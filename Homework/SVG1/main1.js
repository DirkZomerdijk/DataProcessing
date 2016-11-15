/* 	Dirk Zomerdijk
	10530274	*/

/* use this to test out your function */
window.onload = function() {
	changeColor('cz', '#ff0000');
	changeColor('at', '#ffffff');
	changeColor('si', '#0000ff');
	changeColor('gb', '#00ff00');

}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	document.getElementById(id).setAttribute('fill', color)
}