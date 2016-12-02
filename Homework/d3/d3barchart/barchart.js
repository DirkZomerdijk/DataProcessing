// initiate svg size and margins
var outerWidth = 800;
var outerHeight = 400 ;
var margin = { left: 120, top: 50, right: 50, bottom: 80 };

//initiate barpadding and ticks of yaxis
var barPadding = 0.2;
var yTicks = 15;

// globalise code by using column names, labels and title
var xColumn = "year";
var yColumn = "population";
var xAxisLabelText = "Years";
var yAxisLabelText = "Population";
var titleText = "Population Growth of Canada";
var xAxisLabelOffset = 50;
var yAxisLabelOffset = -50;

// determine graph space
var innerWidth  = outerWidth  - margin.left - margin.right;
var innerHeight = outerHeight - margin.top  - margin.bottom;

// initiate x and y scales
var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);
var yScale = d3.scale.linear().range([innerHeight, 0]);

// append svg to html body
var svg = d3.select("body").append("svg")
  .attr("width",  outerWidth)
  .attr("height", outerHeight);
// translate to create margins for title etc
var g = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// create tag for x axis and transform it to the bottom
var xAxisG = g.append("g")
  .attr("transform", "translate(0," + innerHeight + ")")
  .attr("class", "axisG");
// lable x axis
var xAxisLabel = xAxisG.append("text")
  .style("text-anchor", "middle")
  .attr("x", innerWidth / 2)
  .attr("y", xAxisLabelOffset)
  .attr("class", "label")
  .text(xAxisLabelText);
// create tag for y axis
var yAxisG = g.append("g")
  .attr("class", "axisG");
// label y axis
var yAxisLabel = yAxisG.append("text")
  .style("text-anchor", "middle")
  .attr("x", -innerHeight / 2)
  .attr("y", yAxisLabelOffset)
  .attr("transform", "rotate(-90)")
  .attr("class", "label")
  .text(yAxisLabelText);
// initiate xAxis
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")
  .outerTickSize(0);
// initiate y axis
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(yTicks)
  .outerTickSize(1)
  .tickFormat(d3.format("s"));
// create title
var title = svg.append("text")
        .attr("x", (outerWidth / 2 + 25))             
        .attr("y", 0 + (margin.top / 2))
        .attr("text-anchor", "middle")  
        .attr("class", "title")
        .text(titleText);
// initiate a tip
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Population:</strong> <span style='color:#C40C0C'>" + d.population / 1000000 + " Million" + "</span>";
  });
svg.call(tip);

// create graph with data
d3.json("CanPop.json", function(error, data){
  // convert string to integer
  data.population = +data.population;
  // determine domain
  xScale.domain(data.map(function (d){ return d[xColumn]; }));
  yScale.domain([0, d3.max(data, function (d){ return parseInt(d[yColumn]); })]);
  // call axis
  xAxisG.call(xAxis);
  yAxisG.call(yAxis);

  // ENTERY
  // append data to bars
  var bars = g.selectAll("rect").data(data);
  bars.enter().append("rect");

  // UPDATE
  // create bars
  bars
    .attr("x", function (d){ return xScale(d[xColumn]); })
    .attr("y", function (d){ return yScale(d[yColumn]); })
    .attr("width", xScale.rangeBand())
    .attr("height", function (d){ return innerHeight - yScale(d[yColumn]); })
    .attr("class", "bar")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

  // EXIT
  // removes bars if data is removed
  bars.exit().remove();
});