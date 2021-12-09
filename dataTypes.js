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
