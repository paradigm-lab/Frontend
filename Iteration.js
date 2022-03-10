// Setup

// Iterate with While Loops
var myArray = [];

var i = 0;

while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);


// Iterate with For Loops
var ourArray = [];

// For loop format
// Initialization, Condition and Incrementation or Decrementation
for (var i = 6; i > 1; i--) {
  ourArray.push(i);
}

console.log(ourArray);


// Iterate Odd Numbers with a For Loop
var youArray = [];

for (var i = 1; i < 10; i += 2) {
  youArray.push(i);
}

console.log(youArray);
