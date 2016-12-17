/* 	
Dirk Zomerdijk
10530274
Linegraph in d3
*/

// initiate variables which hold different data sets
var data15,
	data16;

// initiate framework
var outerWidth = 1000,
	outerHeight = 500,
	margin = {top: 40, right: 250, bottom: 30, left: 100},
	innerWidth = outerWidth  - margin.left - margin.right,
	innerHeight = outerHeight - margin.top  - margin.bottom;

// parse initial dateformat to custom date format
var parsTime = d3.time.format("%Y%m%d").parse,
	formatTime = d3.time.format("%e %B"),
	formatTime2 = d3.time.format("%e %B %Y"),
    bisectDate = d3.bisector(function(d) { return d.datum; }).left;

// initiate scales
var xScale = d3.time.scale()
    .rangeRound([0, innerWidth]),
	
	yScale = d3.scale.linear()
    .rangeRound([innerHeight, 0]);

// initiate x and y axis
var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom").ticks(5)
	.outerTickSize(1),

	yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left").ticks(5)
	.outerTickSize(1);

// get datapoints for lines
var lineAverage = d3.svg.line()
	.x(function(d) { return xScale(d.datum); })
	.y(function(d) { return yScale(d.etmaal_gemiddelde); })
	.interpolate("cardinal");

var lineMax = d3.svg.line()
	.x(function(d) { return xScale(d.datum); })
	.y(function(d) { return yScale(d.maximum_temperatuur); })
	.interpolate("cardinal");
	
var lineMin = d3.svg.line()
	.x(function(d) { return xScale(d.datum); })
	.y(function(d) { return yScale(d.minimum_temperatuur); })
	.interpolate("cardinal");

// queue data
queue()
	.defer(d3.json, 'temp_jul_2015.json')
	.defer(d3.json, 'temp_jul_2016.json')
	.await(loadData);

// prepair data for linegraph
function prepairData(data) {
	data.forEach(function(d) {
		d.datum = +parsTime(d.datum);
		d.etmaal_gemiddelde = +d.etmaal_gemiddelde/10;
		d.minimum_temperatuur = +d.minimum_temperatuur/10;
		d.maximum_temperatuur = +d.maximum_temperatuur/10;
		return d;
	});	

}

// load data into global variables and make first graph
function loadData(error, temp_jul_2015, temp_jul_2016) {
	data16 = temp_jul_2016;
	data15 = temp_jul_2015;

	prepairData(data15);
	prepairData(data16);
	
	makeGraph(data15);
}

// switches between data
function chooseData(selfData) {
	if (selfData == 2015) {
		makeGraph(data15);
	}
	else {
		makeGraph(data16);
	}
};

// makes graph
function makeGraph(data) {

	// remove current graph
	d3.selectAll("svg").remove();

	// initialize svg
	var svg = d3.select("body").append("svg")
		.attr("width", outerWidth)
		.attr("height", outerHeight)
	  	.append("g")
	  		.attr("transform", "translate(" + margin.left + "," + margin.top +")");

	// add a title
	svg.append("text")
		.attr("class", "title")
		.attr("x", innerWidth / 2)
		.attr("y", 0 - margin.top / 2)
		.attr("text-anchor", "middle")
        .text("Daily Temperature in July 2015 and 2016, De Bilt (source: Knmi.nl)");

	// initialize domains
	xScale.domain(d3.extent(data, function(d) { return d.datum; }))
		.nice();
	yScale.domain([0, d3.max(data, function(d) { return Math.max(d.maximum_temperatuur) + 5 })])
		.nice();

	// draw x axis	
	svg.append("g")
		.attr("class", "xAxis axis")
		.attr("transform","translate(0," + innerHeight + ")")
		.call(xAxis);
	// draw y axis
	svg.append("g")
		.attr("class", "yAxis axis")
		.call(yAxis)
	 .append("text")
	 	.attr("transform", "rotate(-90)")
      	.attr("y", margin.left/3)
      	.attr("dy", "-5.0em")
      	.attr("x", -70)
	 	.style("text-anchor", "end")
	 	.text("Temperature in °C");

	// draw path first line: minimum
	svg.append("path")
	  	.attr("class", "line1")
		.attr("d", lineMax(data));
	// draw path second line: average
	svg.append("path")
	  	.attr("class", "line2")
	  	.style("stroke-dasharray", ("3, 3"))
		.attr("d", lineAverage(data));
	// draw path third line: minimum
	svg.append("path")
	  	.attr("class", "line3")
		.attr("d", lineMin(data));

	function makeFocus(){
		var focus = svg.append("g")
		.attr("class", "focus dynobj")
		.style("display","none");
		return focus;
	}
	// initialize focuses for lines
	var focus1 = makeFocus();
	var focus2 = makeFocus();
	var focus3 = makeFocus();

	// initialize date holder
	var dateHolder = svg.append("g")
		.attr("class", "dateholder dynobj")
		.style("display", "none");		

	// add text area to date holder
	d3.select(".dateholder").append("text")
		.attr("x", innerWidth / 2)
		.attr("y", margin.top / 2)
		.attr("text-anchor", "middle");

	// append a circle to each focus
	d3.selectAll(".focus").append("circle")
		.attr("id", "focusCircles")
		.attr("class", "circle")
		.attr("r", 3.5);

	// append a text area to each focus
	d3.selectAll(".focus").append("text")
	 	.attr("class", "info")
		.attr("x", 10)
		.attr("dy", ".4em");

	// initialze mouse listeners to svg area
    svg.append("rect")
        .attr("width", innerWidth)
        .attr("height", innerHeight)
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function() { d3.selectAll(".dynobj").style("display", null); })
        .on("mouseout", function() { d3.selectAll(".dynobj").style("display", "none"); })
        .on("mousemove", mousemove);

    // add info to focuses and date holder
    function mousemove() {
		var x0 = xScale.invert(d3.mouse(this)[0]),
		    i = bisectDate(data, x0, 1),
		    d0 = data[i - 1],
		    d1 = data[i],
		    d = x0 - d0.datum > d1.datum - x0 ? d1 : d0;

		focus1.attr("transform","translate(" + (xScale(d.datum)) + "," + yScale(d.maximum_temperatuur) + ")");
		focus1.select("text").text("Max: " + d.maximum_temperatuur + "°C");

		focus2.attr("transform","translate(" + (xScale(d.datum)) + "," + yScale(d.etmaal_gemiddelde) + ")");
		focus2.select("text").text("Average: " + d.etmaal_gemiddelde + "°C");

		focus3.attr("transform","translate(" + (xScale(d.datum)) + "," + yScale(d.minimum_temperatuur) + ")");
		focus3.select("text").text("Min: " + d.minimum_temperatuur + "°C");

		dateHolder.select("text").text("Temperature on " + formatTime2(new Date(d.datum)) + ":");
	}	
}

