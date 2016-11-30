/*	
Dirk Zomerdijk
10530274
*/

var container = d3.select("body").append("div")
	.attr("id", "container");

var map = new Datamap({
	element: document.getElementById('container'),
});