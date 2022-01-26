let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
//console.log(selectedColors.length);

// Nested Arrays
var ourArray = [["The universe", 42], ["Everything", 101010]];
console.log(ourArray[1][0]);

console.log("\n");

for(var i = 0; i < 2; i++ ) {
	for (var j = 0; j < 2; j++) {
		console.log(ourArray[i][j]);
	}
}

// Created an array
var myArray = [18, 64, 99];

// Updating the array using the index 
myArray[0] = 10;
console.log(myArray);

console.log("\n");

var myArray1 = [["John", 23], ["Cat", 2]];
myArray1.push(["Dog", 12]);
console.log(myArray1);

console.log("\n");

var removedFromMyArray = myArray1.pop();
console.log(removedFromMyArray);
console.log(myArray1);

console.log("\n");

var removedFromFirst = myArray1.shift();
console.log(removedFromFirst);
console.log(myArray1);

