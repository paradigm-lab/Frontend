// Arithmetic operators 
console.log(2 - 1);

// Subtraction operator
var diff = 2 - 7;
console.log("Differece: " + diff);
diff++; 
console.log("After Incrementation: " + diff);


// Multiplication operator
var product = 8 * 2;
console.log("Product: " + product);
product--;
console.log("After Decrementation: " + product);


// The division opertor
var div = 2/2;
console.log("Division: " + div);

var mod = 5 % 4;
console.log("Modules: " + mod);

var s = 9;
s-=8;
console.log(s);


// Comparison operators
var s1 = 8;
var s2 = "8";
if(s1 === s2){
	console.log("s1 is equal to s2");
} else {
	console.log("s1 is not equal to s2");
}


// The triple = sign checks for the type and 
// The double = sign checks for the values
var s1 = 9;
var s2 = "9";
if (s1 === s2 && s1 != s2) {
	console.log("If part");
} else {
	console.log("Else part");
}
