function nextInLine(arr, item) {
	// Your code here
	arr.push(item);
	return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

// Calling the function and printing in the console
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));