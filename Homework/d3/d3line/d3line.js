/* 	
Dirk Zomerdijk
10530274
Linegraph in d3
*/

var outerWidth = 700,
	outerHeight = 300,
	margin = {top: 40, right: 180, bottom: 30, left: 100},
	innerWidth = outerWidth  - margin.left - margin.right,
	innerHeight = outerHeight - margin.top  - margin.bottom;

var parsTime = d3.time.format("%Y%m%d").parse,
	formatTime = d3.time.format("%d %B"),
    bisectDate = d3.bisector(function(d) { return d.datum; }).left;

var xScale = d3.time.scale()
    .rangeRound([0, innerWidth]),
	
	yScale = d3.scale.linear()
    .rangeRound([innerHeight, 0]);

var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom").ticks(6)
	.outerTickSize(1),

	yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left").ticks(5)
	.outerTickSize(1);

var valueline = d3.svg.line()
	.x(function(d) { return xScale(d.datum); })
	.y(function(d) { return yScale(d.etmaal_gemiddelde); })
	// .interpolate("basis");


var svg = d3.select("body").append("svg")
	.attr("width", outerWidth)
	.attr("height", outerHeight)
  	.append("g")
  		.attr("transform", "translate(" + margin.left + "," + margin.top +")");

d3.json("temp_jul_2016.json", function(error, data) {
	if (error) throw error;

	data.forEach(function(d) {
		d.datum = +parsTime(d.datum);
		d.etmaal_gemiddelde = +d.etmaal_gemiddelde/10;
		return d;
	});

	svg.append("text")
		.attr("x", innerWidth / 2)
		.attr("y", 0 - margin.top / 2)
		.attr("text-anchor", "middle")
		.style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Daily Average Temperature in Juli 2016, De bilt");

	xScale.domain(d3.extent(data, function(d) { return d.datum; }))
		.nice();
	yScale.domain([0, d3.max(data, function(d) { return d.etmaal_gemiddelde; })+5])
		.nice();

	svg.append("g")
		.attr("class", "xAxis axis")
		.attr("transform","translate(0," + innerHeight + ")")
		.call(xAxis);

	svg.append("g")
		.attr("class", "yAxis axis")
		.call(yAxis)
	 .append("text")
	 	.attr("transform", "rotate(-90)")
      	.attr("y", margin.left/3)
      	.attr("dy", "-5.0em")
      	.attr("x", -70)
	 	.style("text-anchor", "end")
	 	.text("Temperature in °C")

	svg.append("path")
	  	.attr("class", "line")
		.attr("d", valueline(data));

	var focus = svg.append("g")
		.attr("class", "focus")
		.style("display","none");

	focus.append("circle")
		.attr("class", "circle")
		.attr("r", 3.5);
	  	
	focus.append("text")
	 	.attr("class", "info")
	 	// .attr("transform", "translate(-30, -15)")
		.attr("x", 10)
		.attr("dy", ".4em");

	var source = d3.select("body").append("div").append("text2");

    svg.append("rect")
        .attr("width", innerWidth)
        .attr("height", innerHeight)
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function() { focus.style("display", null); })
        .on("mouseout", function() { focus.style("display", "none"); })
        .on("mousemove", mousemove);

    function mousemove() {
		var x0 = xScale.invert(d3.mouse(this)[0]),
		    i = bisectDate(data, x0, 1),
		    d0 = data[i - 1],
		    d1 = data[i],
		    d = x0 - d0.datum > d1.datum - x0 ? d1 : d0;

		focus.attr("transform","translate(" + xScale(d.datum) + "," + yScale(d.etmaal_gemiddelde) + ")");
		focus.select("text")
		.text(formatTime(new Date(d.datum)) + ": " + d.etmaal_gemiddelde + "°C");
	}
});

