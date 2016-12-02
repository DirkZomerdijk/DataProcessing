/* 	
Dirk Zomerdijk
10530274
Linegraph in d3
*/
queue()
	.defer(d3.json, 'temp_jul_2015.json')
	.defer(d3.json, 'temp_jul_2016.json')
	.await(makemyLine);