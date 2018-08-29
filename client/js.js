var elNumber1 = document.getElementById("num1");
var elNumber2 = document.getElementById("num2");
var elNumber3 = document.getElementById("num12");
var elCalculate = document.getElementById("calculate");
var elResult = document.getElementById("num3");
//var plus = document.getElementById("plus");
//var minus = document.getElementById("minus");
//var multiply = document.getElementById("multiply");
//var divide = document.getElementById("divide");
var select = document.getElementById("selec");
var value = select.options[select.selectedIndex].value;
var text = select.options[select.selectedIndex].text;


if("+"){
	elCalculate.onclick = function(event) {
		var num1 = parseInt(elNumber1.value, 10);
		var num2 = parseInt(elNumber2.value, 10);
			elResult.value = num1 + num2;
		}
}else if("-"){
	elCalculate.onclick = function(event) {
		
		var num1 = parseInt(elNumber1.value, 10);
		var num2 = parseInt(elNumber2.value, 10);
			elResult.value = num1 - num2;
			
		};
}else if("*"){
	elCalculate.onclick = function(event) {
		
		var num1 = parseInt(elNumber1.value, 10);
		var num2 = parseInt(elNumber2.value, 10);
			elResult.value = num1 * num2;
		};
}else if("/"){
	elCalculate.onclick = function(event) {
	
		var num1 = parseInt(elNumber1.value, 10);
		var num2 = parseInt(elNumber2.value, 10);
			elResult.value = num1 / num2;
		};

}else if (elResult.value == NaN){
	alert("Zapovnit' polya");
}



