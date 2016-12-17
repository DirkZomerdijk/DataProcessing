
var colorHex = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'];

var yMax
var dict = {}

queue()
	.defer(d3.json, "countryData.json")
	.defer(d3.csv, "countryCodes.csv")
	.await(makeMap);

function calcFillKey(pop){

    var percent = pop / max * 100;

    if (percent < 10){
        return '4.5';
    }
    if (percent < 20){
        return '4.5-9';
    }
    if (percent < 30){
        return '9-13.5';
    }
    if (percent < 40){
        return '13.5-18';
    }
    if (percent < 50){
        return '18-22.5';
    }
    if (percent < 60){
        return '22.5-27';
    }
    if (percent < 70){
        return '27-31.5';
    }
    if (percent < 80){
        return '31.5-36';
    }                       
    if (percent >= 80){
        return '36-40.5';
    }
};

function makeMap(error, countryData, countryCodes){

	var container = d3.select("body").append("div")
    	.attr("id", "container");

	if (error) throw error

	var valuelist = []
	for (var i = 0; i < countryData.length; i++) {
	    valuelist.push(parseInt(countryData[i].Birthrate));
	};
	max = Math.max.apply(Math, valuelist); 

    // for (var i = 0; i < countryData.length; i++) {
    //     for (var j = 0; j < countryCodes.length; j++) {
    //         if (countryData[i].Country == countryCodes[j]["country"]){
    //             var key = countryCodes[j]["countrycode2"];
    //             dict[key] = { 	yDict1: countryData[i].Birthrate, 
    //                         	yDict2: countryData[i].Deathrate, 
    //                        		yDict3: countryData[i].Population,
    //                        		fillKey: calcFillKey(countryData[i].Birthrate)};
    //         };
    //     };
    // };

	var map = new Datamap({
	        element: document.getElementById('container'),
	        scope: 'world',
	        data: dict,
	        done: function(datamap) {
	            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
	                makePie(countryData);
	            })},    
	        geographyConfig: {
	            borderColor: '#FDFDFD',
	            // popup template which hold data, focused on birth rate
	            popupTemplate: function(geo, data) {
	                if (data){ return "<div class='hoverinfo' <ul><strong>" + geo.properties.name + ":" +
	                    "<li>Birthrate: " + data.yDict1 + "</strong>" +
	                    "<li>Deathrate: " + data.yDict2 + "</li>" +
	                    "<li>Population: " + (data.yDict3 / 1000000).toFixed(2) + "M" + "</li>" +
	                    "</ul></div>"
	                }
	            },
	            highlightFillColor: '#4FD5D6',
	            highlightBorderColor: false
	        },
	        // fill-key with corresponding fill-color
	        fills: {
	            "0-4.5": "#fff5f0",
	            "4.5-9": "#fee0d2",
	            "9-13.5": "#fcbba1",
	            "13.5-18": "#fc9272",
	            "18-22.5": "#fb6a4a",
	            "22.5-27": "#ef3b2c",
	            "27-31.5": "#cb181d",
	            "31.5-36": "#a50f15",
	            "36-40.5": "#67000d",
	            "No data of birth rate": "#000000",
	            defaultFill: "black"
	        }
	    });
    // initialize legend
    // map.legend();    
};

function makePie (data) {

	d3.select("#pie").remove()

	var fillKey = []
	for (var i = 0; i < data.length; i++) {
		
		fillKey.push(calcFillKey(data[i].Birthrate))
	};	

	var width = 1000,
	height = 200,
	radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal()
	    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var arc = d3.svg.arc()
	    .outerRadius(radius - 10)
	    .innerRadius(50);

	var labelArc = d3.svg.arc()
	    .outerRadius(radius - 40)
	    .innerRadius(radius - 40);

	var pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return (d.Birthrate); });

	var svg = d3.select("body").append("svg")
		.attr("id", "pie")
	    .attr("width", width)
	    .attr("height", height)
	  .append("g")
	    .attr("transform", "translate(700," + height / 2 + ")");

	var g = svg.selectAll(".arc")
	  .data(pie(data))
	.enter().append("g")
	  .attr("class", "arc")

	g.append("path")
	  .attr("d", arc)
	  .style("fill", function(d) { return colorHex[Math.floor(Math.random() * colorHex.length)];; });

	g.append("text")
	  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	  .attr("dy", ".35em")
	  .text(function(d) { return calcFillKey(d.Country); });
};

function type(d) {
  d.population = +d.population;
  return d;
}