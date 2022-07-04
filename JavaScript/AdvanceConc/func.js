/*
var arr = [1, 2, 3];
// Adding a new element in the fly
arr[3] = 4;
arr.prop = "Hello";

console.log(arr);


// Function's are objects
// Go to console write: window or this
function a() {
	console.log("Hello");
}


a["prop"] = "HI";


a.obj = {
	greet: "Hey",
};


a.myFunc = function() {
	console.log("Hola");
}
*/

function sum(num1, num2, fn) {
	console.log(num1 + num2);
	console.log(fn());
}

function done() {
	return "Function is executed";
}

sum(5, 10, done);

var scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

function passOrFail(score) {
	return score >= 51;	
}

function calcDifference(score) {
	return score - 51;
}

console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, calcDifference));


