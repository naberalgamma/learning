function squr(first) {
	var a = first*first;
	return a;
}


// var result = squr(2);
// console.log(result);

function sqrt(ret){
	var b = Math.sqrt(ret);
	return b;
}
// var result = sqrt(16);
// console.log(result);

// arr = [0, 1, 2] = 0 + 1 + 2 = 3
function sum (arr) {
	var result = 0;
	 
	for(var n = 0; n < arr.length; n++ ){
		var a = arr[n];
		result += a;
	}
	return result;
}

