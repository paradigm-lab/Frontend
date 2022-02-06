function caseInSwitch(val) {
	var answer = "";

	switch (val) {
		case 1:
			answer = "Alpha";
			break;
		case 2:
			answer = "Beta";
			break;
		case 3:
			answer = "Gamma";
			break;
		case 4:
			answer = "Delta";
			break;
		default:
			answer = "Try again";
			break;
	}

	return answer;
}


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
	var answer = "";

	switch (val) {
		case 1:

		case 2:

		case 3:

		case 4:
			answer = "Low";
			break;
		case 5:

		case 6:

		case 7:

		case 8:
			answer = "Mid";
			break;

		case 9:

		case 10:

		case 11:

		case 12:
			answer = "High";
			break;
	}
	console.log("Out of the switch case");

	return answer;
}	


function chainToSwitch(val) {
	var answer = "";

	switch (val) {	
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much!";
			break;
		case 7:
			answer = "Ate Nine";
			break;

		default:
			answer = "Invalid Function argument";
			break;
	}

	return answer;
}	

// Returning a boolean value which is either True or False
function isLess(a, b) {
	// Fix this code
	/*
		if (a < b) {
			return true;
		}  else {
			return false;
		}
	*/

	return a < b;

}

// Returning Early Pattern from Functions





// console.log(isLess(3, 3));
// console.log(chainToSwitch("bob"));
// console.log(sequentialSizes(5));
// console.log(caseInSwitch(4));
