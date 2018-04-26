function fToM(){
	//This is the function for Meters

  var measure = parseInt(document.getElementById("value1").value);

  var Meters = measure * 0.3048;
  //This is the formula for the equation
  var message = measure + ' feet converts to ' + Meters + ' Meters.';

	console.log(message);
	document.getElementById("Meters").innerHTML = message;

}
function fToC(){
	//This is the function for Centimetres

  var measure = parseInt(document.getElementById("Centimetres").value2);

  var Centimetres = measure * 2.54;
  var message = measure + ' Inches converts to ' + Centimetres + ' Centimetres.';

	console.log(message);
	document.getElementById("Centimetres").innerHTML = message;

}
function fToY(){
	//This is the function for Yards

  var measure = parseInt(document.getElementById("Yards").value3);

  var Yards = measure * 0.9144;
  var message = measure + ' Yards converts to ' + Meters + ' Meters.';

	console.log(message);
	document.getElementById("Yards").innerHTML = message;

}
function fToK(){
	//This is the function for Kilometres

  var measure = parseInt(document.getElementById("Kilometres").value4);

  var Kilometres = measure * 1.60934
  var message = measure + ' Miles converts to ' + Kilometres + ' Kilometres.';

	console.log(message);
	document.getElementById("Kilometres").innerHTML = message;

}