// Array is a special variable, which can hold more than one value at the same time
// Array's in javascript can consist of multiple data type simulateneous

// Array literal notation
// To access the specific item in the array using the index
var arr = ['John', 'Bob', 'Mary', 10, true, [1, 2, 3], function(name) { return "Hello " + name;}];

console.log(arr[6](arr[0]));


// Using array Constructor
var array = new Array(1, 'John', false);
console.log(array);

var colors = ['White', 'Black', 'Red'];
console.log(colors);

colors[1] = 'Green';


// Using array method
colors.push('Blue');
console.log(colors);

colors.pop();
console.log(colors);

// Adding and removing items at the begining of the array
colors.shift();
console.log(colors);

// Add 
colors.unshift('Purple');
console.log(colors);

// Return the index of the item
console.log(colors.indexOf('Green'));


if (colors.indexOf('blue') === -1) {
	colors.push('blue');
	console.log(colors);
}
