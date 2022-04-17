console.log('Hello');

// Variables 
var b = 'Smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

/*
var age = prompt('What is your age?');
document.getElementById('someText').innerHTML = "Your age is: " + age;
*/


// Numbers in javascript 
var num1 = 10;

// Increment num1 by 1
num1++;

//Decrement num1 by 1
num1--

console.log(num1); 

// Divide, muliply *, Reminder %
console.log(num1 % 6);


// Increment/decrement by 10
num1 += 10;
console.log(num1);


/* 
 * Function
 *-> Create a f(x)
 *-> call a f(x)
 */
function fun() {
	console.log('This is a function');
}

// Call a f(x)
fun();



// var name = prompt("What is your name?");
function greeting(name) {
	var result = "Hello" + ' ' + name; // String Concatenation
	console.log(result);
}

// greeting(name);

// Taking arguments in the f(x)
function sumNumbers(num1, num2) {
	var result = num1 + num2;
	console.log(result);
}


sumNumbers(10, 10); // The f(x) will add the two numbers 
sumNumbers("Hello ", "Collins"); // The f(x) will concatenate the two Strings together



// While loop
/*
var num = 0;
while (num < 100) {
	num += 20;
	console.log(num);
} 
*/

// For loop
for (let num = 0; num <= 100; num++) {
	console.log(num);
}


// Data Types
var yourAge = 18; 				// Number
let yourName = "Bob";				// String 
let name = {
	first: 'Jane', 
	last: 'Doe'
} 						// Object
let truth = false;				// boolean
let groceries = ['apple', 'banana', 'oranges']; // Array
let random; 					// undefined
let nothing = null; 				// value null


// Strings in Javascript (common methods)
let fruit = 'banana\napple';			// New line
console.log(fruit.length);
console.log(fruit.indexOf('n'));		// Getting an index from the Array of characters
console.log(fruit.slice(2, 5));




