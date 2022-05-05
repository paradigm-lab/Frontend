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

passExam("John", 75);
passExam("Mary", 65);
passExam("Bob", 45);
