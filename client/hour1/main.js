var elNumber1 = document.getElementById("num1");
var elNumber2 = document.getElementById("num2");
var elCalculate = document.getElementById("calculate");
var elResult = document.getElementById("num3");

elCalculate.onclick = function(event) {
	console.log(event);
	var num1 = parseInt(elNumber1.value, 10);
	var num2 = parseInt(elNumber2.value, 10);

	elResult.value = num1 + num2;
};
