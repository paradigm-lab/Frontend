// Scope is referred to the visibillty of the variable

// Declare your variable here
var myGlobal = 10;


function fun1() {
	// Assign 5 to oppsGlobal here
	// When we don't declare the variable with var keyword the it becames visible to the function only and not globally
	// When we don't use the var keyword then it be cames globally 
	var oopsGlobal = 5;
}


function fun2() {
	var output = "";

	if (typeof myGlobal != "undefined") {
		output += " myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

// Created a local variable whereby the definition of the variable can't be accesed out of the function 
function myLocalScope() {
	var myVar = 6 % 2;
	console.log(myVar);
}



fun1();
fun2();
myLocalScope();
