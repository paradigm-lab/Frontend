let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
//console.log(selectedColors.length);

// Nested Arrays
var ourArray = [["The universe", 42], ["Everything", 101010]];
//console.log(ourArray[0][0]);

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
