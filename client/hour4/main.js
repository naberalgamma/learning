/**
 * Desrciption
 * @param {string} word 
 * @param {list} arr 
 * @returns true if word exists in given array, else - false
 */
function searchWord(word, arr) {	
	for(var i = 0; i<arr.length; i++ ){
		if(arr[i] == word){
			return true;
		}
	}
	return false;
}

/**
 * Using foreach
 * @param {string} word 
 * @param {list} arr 
 * @returns true if word exists in given array, else - false
 */
function searchWordForeach(word, arr) {
	arr.map(function(element) {
		console.log(element);
	});
}

// searchWordForeach('Maksim', ['Vasyl', 'Dima', 'Maksim', 'Petro']);

/**
 * 
 * @param {list} arr 
 * @returns new array where all elements have new indexes
 */
function shuffleArray(arr) {
	var arrResult = [];
	for(var i = 0; i<arr.length; i++) {
		var randomIndex = Math.floor(Math.random() * arr.length);

		while (arrResult[randomIndex] !== undefined) {
			randomIndex = Math.floor(Math.random() * arr.length);
		}
		arrResult[randomIndex] = arr[i];
	}
	return arrResult;
}

function shuffle(a) {
	// [2,4,6,1,3,5]
    for (var i = a.length - 1; i > 0; i--) {
		// i = 4
		var randomIndex = Math.floor(Math.random() * (i + 1)); // 2
		
		var x = a[i]; // 3
		var y = a[randomIndex]; // 5
        a[i] = y; // [2,4,6,1,5,6]
        a[randomIndex] = x; // [2,4,3,1,5,6]
    }
    return a;
}

/**
 * 
 * @param {*} str 
 * @returns {string} new string with ****
 */
function replace(websiteStr) {
	return "*".repeat(websiteStr.length);
}


console.log(replace('www.site.com'));
