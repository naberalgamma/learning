(function rnd() {
	var expected = Math.floor(Math.random() * 100);
	
	var isWin = false;
	for(var i = 0; i < 2; i++) {
		/*
		* 1. 0 -> OK -> promt() return 0 -> continue
		* 2. CANCEL -> prompt() return null -> exit
		* 3. 'asd' -> Number(promopt()) return NaN -> repeat
		* 4. '' -> OK -> prompt() return ~default~ -> repeat
		*/
		var value = prompt("Enter the number from 0 - 100");

		if (value === null) {
			return;
		} else if (value === '') {
			alert("enter some number");
			continue;
		}
		
		var numb = Number(value);

		if(Number.isNaN(numb)) {
			alert("enter correct number");
			continue;
		}
		
		if (numb == expected) {
			isWin = true;
		} else if (numb > 100){
			alert("alo vasya tu sho petuh?");
		} else if (numb < 0){
			alert("alo vasya tu sho petuh?");
		} else if (numb > expected){
			alert("numb bigger then rundom number");
		} else if (numb < expected){
			alert("numb less then random number");
		}
	}

	if (isWin) {
		alert("Gc");
	} else {
		alert("Try again");
	}
})();
