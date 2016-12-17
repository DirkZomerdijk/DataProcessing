/* 	
Dirk Zomerdijk
10530274
D3LinkedVieuws
*/

// initiate colors for coloring map
var colorHex = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'];

// initiate global variables
var Max;
var dict = {};
var alcohol;
var countryCodes;
var width = 800;
var height = 400;

// queue data and save data
queue()
	.defer(d3.json, "alcohol.json")
	.defer(d3.csv, "countryCodes.csv")
	.await(saveData);

// save data in global variable
function saveData(alcohol, countryCodes){
	alcohol = alcohol;
	countryCodes = countryCodes;
	makeMap(alcohol, countryCodes);
};
// makes datamap
function makeMap(error, alcohol, countryCodes){
	if (error) throw error;
	
	// create container for holding the map
	var container = d3.select("body").append("div")
    	.attr("id", "container");

	// add a title to map
	container.append("text")
		.attr("class", "title")
		.attr("x", 400)
		.attr("y", 2)
		.attr("text-anchor", "middle")
        .text("Alcohol consumption in Liters per person, 2010 (wikipedia.org). (Click on country for more info)");

    // get maximum value of data for determine fill keys
	var valuelist = [];
	for (var i = 0; i < alcohol.length; i++) {
	    valuelist.push(parseInt(alcohol[i].total));
	};
	max = Math.max.apply(Math, valuelist); 

	// create dict with country code as key which contains the data
    for (var i = 0; i < alcohol.length; i++) {
        var key = alcohol[i].country;
        dict[key] = { 	country: 	alcohol[i].country,
        				total: 		alcohol[i].total,
                    	beer: 		alcohol[i].beer,
                    	wine: 		alcohol[i].wine,
                   		spirits: 	alcohol[i].spirits,
                   		other: 		alcohol[i].other,
                   		fillKey: 	calcFillKey(alcohol[i].total) };
    };

    // initiate map
	var map = new Datamap({
	        element: document.getElementById('container'),
	        scope: 'world',
	        data: dict,
	        // get country data on click
	        done: function(map) {
	            map.svg.selectAll('.datamaps-subunit').on('click', function(geo) {
	                var localData = map.options.data[geo.id]
	                if (localData && localData.total && localData.beer && localData.wine 
	                	&& localData.spirits && localData.other) {
	                	makePie(localData);
	                };
	            })},    
	        geographyConfig: {
	            borderColor: '#FDFDFD',
	            // popup template which hold data, focused on alcohol consumption in liters
	            popupTemplate: function(geo, data) {
	                if (data){ return "<div class='hoverinfo' <ul><strong>" 
	                	+ geo.properties.name + ", alcohol consumption: " + data.total + "L" +
	                    "</ul></div>"
	                }
	            },
	            highlightFillColor: '#4FD5D6',
	            highlightBorderColor: false
	        },
	        // fill-key with corresponding fill-color
	        fills: {
	            "0-1.7L": "#fff5f0",
	            "1.7-3.4L": "#fee0d2",
	            "3.4-5.1L": "#fcbba1",
	            "5.1-6.8L": "#fc9272",
	            "6.8-8.5L": "#fb6a4a",
	            "8.5-10.2L": "#ef3b2c",
	            "10.2-11.9L": "#cb181d",
	            "11.9-13.6L": "#a50f15",
	            ">13.6L": "#67000d",
	            "No data": "yellow",
	            defaultFill: "yellow"
	        }
	    });
    // initialize legend
    map.legend();    
};

function makePie (data) {
	// remove former pie chart
	d3.select("#pie").remove();

	// initialize data for piechart
	var dataset = [
		{label: "Beer", count: data.beer}, 
		{label: "Wine", count: data.wine}, 
		{label: "Spirits", count: data.spirits}, 
		{label: "Other", count: data.other}
	];

	// initiate variables for piechart
	var width = 1000,
	height = 250,
	radius = Math.min(width, height) / 2,
	donutWidth = 60,
	legendRectSize = 15,
	legendSpacing = 4;

	// set scale for pie chart
	var color = d3.scale.ordinal()
	    .range(['#ca0020','#f4a582','#92c5de','#0571b0'])
	    .domain("","Beer", "Wine", "Spirits", "Other");

	// initialize donut
	var arc = d3.svg.arc()
	    .outerRadius(radius)
	    .innerRadius(radius - donutWidth);

	// initialze arc holding datalabels
	var labelArc = d3.svg.arc()
	    .outerRadius(radius - 30)
	    .innerRadius(radius - 30);

	// set values for piechart
	var pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return d.count});

	// initialize container for holding piechart
	var svg = d3.select("body").append("svg")
		.attr("id", "pie")
	    .attr("width", width)
	    .attr("height", height + 130)
	  .append("g")
	    .attr("transform", "translate(" + width / 2.4 + "," + height / 1.1  + ")");
	
	// add a title to chart
	svg.append("text")
		.attr("class", "title1")
		.attr("x", 0)
		.attr("y", -140)
		.style("text-anchor", "middle")
		.style("font-weight", "bold")
        .text("Consumed: " + data.total + "L. Relative choise of drink:" );

	// append piechart
	var g = svg.selectAll(".arc")
		.data(pie(dataset))
	  .enter().append("g")
		.attr("class", "arc");

	// fill piechart with color
	g.append("path")
	  	.attr("d", arc)
	  	.style("fill", function(d, i) { return color(d.data.label); });

	// append text to labels
	g.append("text")
		.attr("class", "legendLabel")
	  	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	  	.attr("dy", ".35em")
	  	.style("font-weight", "bold")
	  	.style("font-size", "12px")
	  	.text(function(d) { if (d.data.count != 0) { return d.data.count + "%";};});
	
	// initialize legend
	var legend = svg.selectAll('.legend')
	  	.data(color.domain())
	  .enter()
	  	.append('g')
	  	.attr('class', 'legend')
	  	.attr('transform', function(d, i) {
	   		var height = legendRectSize + legendSpacing;
	    	var offset =  height * color.domain().length / 2;
		    var horz = -2 * legendRectSize;
		    var vert = i * height - offset;
		    return 'translate(' + horz + ',' + vert + ')';
  	});

	// append rectangles of legend
	legend.append('rect')
	  	.attr('width', legendRectSize)
	  	.attr('height', legendRectSize)
	  	.style('fill', color)
	  	.style('stroke', color);

	// apped text to legend
	legend.append('text')
		.attr("class", "legendText")
  		.attr('x', legendRectSize + legendSpacing)
  		.attr('y', legendRectSize - legendSpacing)
  		.text(function(d) { return d; });
};

// function calculates fillKey
function calcFillKey(data){

    var percent = data / max * 100;

    if (percent < 10){
        return '0-1.7L';
    }
    if (percent < 20){
        return '1.7-3.4L';
    }
    if (percent < 30){
        return '3.4-5.1L';
    }
    if (percent < 40){
        return '5.1-6.8L';
    }
    if (percent < 50){
        return '6.8-8.5L';
    }
    if (percent < 60){
        return '8.5-10.2L';
    }
    if (percent < 70){
        return '10.2-11.9L';
    }
    if (percent < 80){
        return '11.9-13.6L';
    }                       
    if (percent >= 80){
        return '>13.6L';
    }
};