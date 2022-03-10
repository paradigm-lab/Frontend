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


// Count Backwards with a For Loop
var numArray = [];

for (var i = 9; i > 0; i -= 2) {
  numArray.push(i);
}

console.log(numArray);


// Iterate Through an Array with a For Loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total = myArr[i] + total;
}

console.log(total);


// Nesting For Loops
function multiplyAll(arr) {
  var product = 1;


  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  
  return product;
}

var product = multiplyAll( [ [1,2], [3,4], [5,6,7] ] );

console.log(product);
