var elNumber1 = document.getElementById("num1");
var elNumber2 = document.getElementById("num2");
var elCalculate = document.getElementById("calculate");
var elResult = document.getElementById("num3");
var elSelect = document.getElementById("selec");

var historyDiv = document.getElementById("history");

elCalculate.onclick = function() {
	var num1 = parseInt(elNumber1.value, 10);
	var value = elSelect.options[elSelect.selectedIndex].value;
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

	var historyResult = num1 + value + num2 + "=" + elResult.value;

	console.log(historyResult);

	var historyEl = document.createElement("li");
	historyEl.className = "history-el";

	historyEl.appendChild(document.createTextNode(historyResult));
	
	var butt = document.createElement("button");
	butt.appendChild(document.createTextNode("delete"));
	butt.onclick = function(event) {
		var liEl = event.target.parentNode;
		historyDiv.removeChild(liEl);
	}
	historyEl.appendChild(butt);
	
	historyDiv.appendChild(historyEl);
};
