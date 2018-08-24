// Coount all given numbers
// [10,53,42,97,97]
//  0,1,2,3,4
function countNumbers(expectedNumber, arr) {
	var count = 0;
	for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
		var arrayValue = arr[arrayIndex];

		if (arrayValue == expectedNumber){
			count++;
		}
	}
	return count;
}

// var actualCount = countNumbers(97, [10,53,42,97,190,97]);
// console.log(actualCount);


// 'c', ['a', 'b', 'c', 'c']
function countLetters(expectedLetter, arr) {
	var letter = 0;
	for (var i =0; i<arr.length; i++) {
		if(arr[i] == expectedLetter){
			letter++;
		}
		
	}
	return letter;
}
// var actualLetterCount = countLetters( 'c', ['a', 'b', 'c', 'c']);
// console.log(actualLetterCount);

function countUnique(arr) {
	// return new Set(arr);
	var unique = [];
	for (var i = 0; i < arr.length; i++) {
		var el = arr[i];
		if (!unique.includes(el)) {
			unique.push(el);
		}
	}
	return unique.length;
}
console.log(countUnique([1,2,1,3,1,4]));


// var arr = []; // empty
// arr.push('grib'); // 0
// arr.push('water'); // 1
// arr[1] = 'wheel';
// var wheel = arr.pop();

// var surnames = ['Styp', 'Karach', 'Muz', 'Zin'];
