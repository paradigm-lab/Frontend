// Function Statement
function a() {
	var c = "From Function a";
	return c;
}

// Function Expression
var b = function() {
	var c = "From Function a";
	return c;
}

var c = 10;
var c = 20;

console.log(c);

console.log(a());
console.log(b());


5 + 10;

// Immediately Invoked Function Expression (IIFE)
(function(name) {
	console.log("Hello " + name);
}('John'));


var a = function() {
	console.log("Hi");
	return 'Hello';
}();

console.log(a);
