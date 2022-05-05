// Loops is the process of repeating a block of code when a condition is true

var arr = ['John', 'Nick', 'Bob', 'Michael', 'Mary'];

for (let i = 0; i < arr.length; i++) { 
	
	if (arr[i] === "Bob") {
		continue;
		console.log(arr[i] + " is my brother");
	}

	console.log(arr[i]);
}

/*
var counter = 0;
while (counter <= 10) {
	console.log(counter);
	counter++;
}
*/

console.log();


var colors = ["White", "Red", "Green", "Blue"];

var counter = 0;

while (counter < colors.length) {
	console.log(colors[counter]);
	counter++;
}


console.log();

let i = 0;

do {
	console.log(colors[i]);
	i++;
} while (i < colors.length)
