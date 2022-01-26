// Performing a task
function greet(name, lastName) {
	console.log("Hello " + name + ' ' + lastName);
}


// Calculating a value
function square(number) {
	return number * number;
}


// Passing the Values to functions with arguments
// Parameter a variable but they act as a placeholder
function ourFunctionWithArgs(a, b) {
	console.log(a - b);
}

ourFunctionWithArgs(2, 2);


let number = square(2);
console.log(number);

greet("Collins", "Golang");
greet("Rust", "Smith");
