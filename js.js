var elNumber1 = document.getElementById("num1");
var elNumber2 = document.getElementById("num2");
var elCalculate = document.getElementById("calculate");
var elResult = document.getElementById("num3");
var select = document.getElementById("selec");
var value = select.options[select.selectedIndex].value;


	elCalculate.onclick = function(event) {
		var num1 = parseInt(elNumber1.value, 10);
		var num2 = parseInt(elNumber2.value, 10);
			if(value == "+"){
				elResult.value = num1 + num2;
			}else if(value == "-"){
				elResult.value = num1 - num2;
			}else if(value == "*"){
				elResult.value = num1 * num2;
			}else if(value == "/"){
				elResult.value = num1 / num2;
			}else if (elResult.value == NaN){
				alert("Zapovnit' polya");
			}
		}



