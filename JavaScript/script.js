// Variable is a container for storing data values.

var person = 'Instructor';

console.log(person);

person = 'Teacher';

console.log(person);

var firstName = 'John', 
    lastName = 'Doe', 
    age = 27;

// DataTypes
// Primitive Data Types -> String, Number, Boolean, Undefined, Null
// In Javascript everything is an object

var str = 'Javascript is a Programming Language';
console.log(str);

var num = 27.23;
console.log(num);

var num1 = 5;

var num2 = 10;

var comp = true;

// Null means nothing
var a = null;
console.log(a);

// Operators is a special function that take two parameters and return result.
// Addition, Subtraction, Division and Multiplication
// It follows the BODMAS (Operator Precedence and Associativity)
var a = (5 + 5) * 5;
console.log(a);

// Comparison Operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values.
// Double equal compare the value while Triple equal sing compare the value and type
// != and !== (Strict Not equal) Not Equal 
var a = 5;
var b = '5';

/*
Type coercion means that a value from one type can be converted to another on run-time(on fly).
true == 1 -> True and false == 0 -> False 
5 === 5 === 5 -> False whereby 5 === 5 while return a bool and bool not equal to integer
*/

var value = 10 * '5';
var valueb = 5 + 10 + 'b';
var valuec = 'b' + 5 + 10;
console.log(valuec);

// Conditional Statement is a statement that will evaluate condition to be either TRUE or FALSE.
// if ... else ...
var myChild = 'Alexis';
var gender = 'Male';

if (gender === 'Male') {
	console.log(myChild + ' is my son');
} else { 
	console.log(myChild + ' is my daughter');
}


























