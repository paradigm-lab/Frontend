/*
// For loop will keep on executing until the condition check return false
// for(initialization; condition; updation or incremenation and decrementation)


var subjects = ["Maths", "Physics", "Chemistry"];
var marks = new Array();
var num1;

for (var j = 0; j < subjects.length; j++) {
	num1 = parseFloat(prompt("Enter marks for subjects " + subjects[j]));
	marks[j] = num1;
}

for (i in marks){
	console.log(marks[i]);
}



// While loop will be executed unless the condition statement returns a Boolean false
// while (condition) "The while loop syntax"

// Conditional loop

var i = 8;
while (i < 10) {
	console.log(i);
	i++;
}


// Exit status loop
do {
	console.log(i);
	i++;

} while(i < 10);
*/


console.log("Debugging the program");
console.log("Even numbers:");
function evenNumbers(a, b) {
	for(var i = a; i <= b; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}
console.log("Prime Numers: ")
function primeNumbers(a, b) {
	for (var i = a; i <= b; i++) {
		if (i % 2 == 0) {
			
		}
		else {
			console.log(i);
		}
	}

}

console.log(primeNumbers(1, 10))
console.log(evenNumbers(1, 10));
