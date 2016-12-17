
var colorHex = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'];

var Max
var dict = {}

queue()
	.defer(d3.json, "alcohol.json")
	.defer(d3.csv, "countryCodes.csv")
	.await(makeMap);

function calcFillKey(data){

    var percent = data / max * 100;

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

function makeMap(error, alcohol, countryCodes){

	var container = d3.select("body").append("div")
    	.attr("id", "container");

	if (error) throw error

	var valuelist = []
	for (var i = 0; i < alcohol.length; i++) {
	    valuelist.push(parseInt(alcohol[i].total));
	};
	max = Math.max.apply(Math, valuelist); 

    for (var i = 0; i < alcohol.length; i++) {
        // for (var j = 0; j < countryCodes.length; j++) {
            // if (alcohol[i].country == countryCodes[j]["countrycode2"]){
        var key = alcohol[i].country;
        dict[key] = { 	country: alcohol[i].country,
        				total: alcohol[i].total,
        				recorded: alcohol[i].recorded,
        				unrecorded: alcohol[i].unrecorded, 
                    	projection: alcohol[i].projection, 
                    	beer: alcohol[i].beer,
                    	wine: alcohol[i].wine,
                   		spirits: alcohol[i].spirits,
                   		other: alcohol[i].other,
                   		fillKey: calcFillKey(alcohol[i].total) };
    };

	var map = new Datamap({
	        element: document.getElementById('container'),
	        scope: 'world',
	        data: dict,
	        done: function(map) {
	            map.svg.selectAll('.datamaps-subunit').on('click', function(geo) {
	                var localData = map.options.data[geo.id]
	                if (localData && localData.total && localData.beer && localData.wine && localData.spirits && localData.other) {
	                	makePie(localData);
	                };
	            })},    
	        geographyConfig: {
	            borderColor: '#FDFDFD',
	            // popup template which hold data, focused on birth rate
	            popupTemplate: function(geo, data) {
	                if (data){ return "<div class='hoverinfo' <ul><strong>" + geo.properties.name + ", alcohol consumption: " + data.total + "L" +
	                    // "<li>Beer: " + data.beer + "%" + 
	                    // "<li>Wine: " + data.wine + "%</li>" +
	                    // "<li>Spirits: " + data.spirits + "%</li>" +
	                    // "<li>Other: " + data.other + "%</li>" + 
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
	            "No data of alcohol consumption": "#000000",
	            defaultFill: "pink"
	        }
	    });
    // initialize legend
    // map.legend();    

	function makePie (data) {

		d3.select("#pie").remove()

		var dataset = [
			{label: "Beer", count: data.beer}, 
			{label: "Wine", count: data.wine}, 
			{label: "Spirits", count: data.spirits}, 
			{label: "Other", count: data.other}
		];

		var width = 1000,
		height = 200,
		radius = Math.min(width, height) / 2,
		donutWidth = 50;

		var color = d3.scale.ordinal()
		    .range(colorHex)
		    .domain("Beer", "Wine", "Spirits", "Other")

		var arc = d3.svg.arc()
		    .outerRadius(radius)
		    .innerRadius(radius - donutWidth);

		var labelArc = d3.svg.arc()
		    .outerRadius(radius - 40)
		    .innerRadius(radius - 40);

		var pie = d3.layout.pie()
		    .sort(null)
		    .value(function(d) { return d.count});

		var svg = d3.select("body").append("svg")
			.attr("id", "pie")
		    .attr("width", width)
		    .attr("height", height)
		  .append("g")
		    .attr("transform", "translate(700," + height / 2 + ")");

		var g = svg.selectAll(".arc")
		  .data(pie(dataset))
		.enter().append("g")
		  .attr("class", "arc")

		g.append("path")
		  .attr("d", arc)
		  .style("fill", function(d, i) { return color(d.data.label); });

		g.append("text")
		  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
		  .attr("dy", ".35em")
		  .text(function(d) { if (d.data.count != 0) { return d.data.label +": " + d.data.count + "%";};});
	};

	function type(d) {
	  d.population = +d.population;
	  return d;
	};  
};