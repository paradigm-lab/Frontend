// Generate Random Number
function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

// Generate Random Whole Numbers
 function randomWholeNum() {

    return Math.floor(Math.random() * 10);
 }

 console.log(randomWholeNum());

 // Generate Random Whole Numbers Within a Range
 function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
 }

 var myRandom = randomRange(0, 10);
 console.log(myRandom);


// Use the parseInt Function
// Use the parseInt function with a Radix default is base 10
 function convertToInteger(str) {

    return parseInt(str, 2);
 }

 var num = convertToInteger("10011");
 console.log(num + 10);



 
