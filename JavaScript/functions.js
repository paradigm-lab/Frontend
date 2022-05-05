// Defining Arguments in the function definition
// Functions let you group a series of statements together to perform a specific task
function passExam(name, score) {
	var passUni = 71;
	var passColl = 51;

	if (score > passUni) {
		console.log(name + " has enrolled in University with " + score + " points");
	} else if (score >= passColl) {
		console.log(name + " has enrolled in University with " + score + " points");
	} else {
		console.log(name + " has failed");
	}
}

function calcScore(quizScore, assayScore) {
	var score = quizScore + assayScore;
	return score;
}

// Passing Arguments in the function 
// Calling a function in the function that return Argument that outer function
passExam("John", calcScore(40, 30));
passExam("Mary", 65);
passExam("Bob", 45);


// Statements Vs Expressions
// Statements are instructions to be executed by the web browser and 
// Expressions produce a value

// Difference between a function statement and expression is that (hoisting)
// Statement functions can be called before the function definition
// While Expression function can not be called before the function definition

// Function definition
function add(a, b) {
	console.log(a + b);
}

add(5, 10);


// Function Expression
// Anonymous Function
var sum = function (a, b) {
	console.log(a + b);
}

sum(10, 10);



