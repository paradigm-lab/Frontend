console.log(a);
console.log(b());
console.log(fun);

// Undefined will be assigned to the variable
var a = 10;


// Function will not be assigned with any thing when hoisting is taking place
function b() {
	
	return 20;
}

// Undefined will be assigned to the variable
var fun = function() {
	
	return 40;
}

console.log(a);

if (true) {
	var a = 80;
} else {
	var c = 20;
}

console.log(a);
console.log(c);
