var elNumber1 = document.getElementById("num1");
var elNumber2 = document.getElementById("num2");
var elCalculate = document.getElementById("calculate");
var elResult = document.getElementById("num3");
var select = document.getElementById("selec");
var value = select.options[select.selectedIndex].value;
var el = document.getElementById("elem");

	elCalculate.onclick = function(event) {
		var num1 = parseInt(elNumber1.value, 10);
		var value = select.options[select.selectedIndex].value;
		var num2 = parseInt(elNumber2.value, 10);
			if(value == "+"){
				elResult.value = num1 + num2;
			}else if(value == "-"){
				elResult.value = num1 - num2;
			}else if(value == "*"){
				elResult.value = num1 * num2;
			}else if(value == "/"){
				elResult.value = num1 / num2;
			}else if (Number.isNaN(num1 && num2)){
				alert("Zapovni polya");
			}
	
			var listResults = (num1 + value + num2 + "=" + elResult.value);
			console.log(listResults);
			el.appendChild(document.createTextNode(listResults +  "\n"));
						
		}




