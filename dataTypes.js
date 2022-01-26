/*
console.log("Hello World!!!");
document.write("Using javascript to print hello in the browser");

// Variable declaration
// When we declare a variable and we don't assign a value in the variable then that is undefined
// undefined is a special values in javascript

var general = 5;
console.log(typeof general);


// The string data type can be initiallized in two ways by using the double and single quotes
// The string data type 
general = "Hi";
console.log(typeof general);

// The string data type 
general = 'Hi';
console.log(typeof general);

// Boolean data type
general = true;
console.log(typeof general);

// The null data type
general = null;
console.log(typeof general);


// Array internally in javascript is treated as an object
general = [5, 6, 7, 8]
console.log(typeof general);
console.log(general.length);


console.log(2 + 3);
console.log("HI " + "There")
console.log(2 + " hi")


   Type Conversion:
   Implicit convertion - Integer converted to string and back automatically
   Explicit convertion - Use javascript functions like parseInt(), parseFloat() etc.
 

var num1 = 5;
var num2 = num1 + 5;
console.log(num2);
var num3 = num1 + "5";
console.log(num3);

// The prompt funtion returns a string
num1 = prompt("Enter first Real/Floating-point number: ");
num2 = prompt("Enter second Real/Floating-point number: ");
alert("The sum of real number is: " + (parseFloat(num1) + parseFloat(num2))); // String to float
console.log(parseInt(num1) + parseInt(num2));

*/

// Data is anything that is meaning to the computer
// Data types in javascript are: Undefined, null, boolean, String, number, object and symbol

// var, let and const
// var it will be able to use it throught you whole program
// let will only be used in where you declare that variable
// const is a variable that should or can't change

let name = 'Mosh';	// String Literal
let age = 30; 		// Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let lastName = null;	// We use null to explicity clear the value of the variable

