// var weight = parseFloat(prompt("Enter your weight: "));
var weight;
switch(weight){
	case 1:
		document.write("Weight is 1 \n");
		break;
	case 2: 
		document.write("Weight is 2 \n");
		break;
	case 3:
		document.write("Weight is 3 \n ");
		break;

	default:
		document.write("Weight is not in 1, 2, 3 \n");
		break;
}


if (weight == 1) {
	document.write("Weight is 1 \n");
}
else if (weight == 2) {
	document.write("Weight is 2 \n");
}
else if (weight == 3) {
	document.write("Weight is 3 \n");
}
else {
	document.write("Weight is not in 1, 2, 3 \n");
}

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}

	return "No, that was false";
}

var condition = trueOrFalse(true);
console.log(condition);



function testEqual(val){ 
	// Equallity operator 
	// This will change the string operator to an integer
	if (val == 12) {
		return "Equal";
	}

	return "Not Equal";
}

console.log(testEqual(10));


function testStrict(val){ 

	// Using the strict equallity operator
	// Comparison of the type
	if (val === 7) {
		return "Equal";
	}

	return "Not Equal";
}

console.log(testStrict('7'));

// Using the not Equal comparison operator 
function testNotEqual(val) {
	if (val != 99) {
		return "Not Equal";
	}
	return "Equal";
}

console.log(testNotEqual(10));


// Using the Strict not equal
function testStrictNotEqual(val) {
	if (val !== 17) {
		return "Not Equal";
	}
	return "Equal";
}

console.log(testStrictNotEqual(17));


// Comparison function
function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}	

	if (val > 10) {
		return "Above 10";
	}

	return "10 or Under";
}

console.log(testGreaterThan(10));



function testGreaterOrEqual(val) {
	if (val >= 20) {
		return "20 or Over";
	}	

	if (val >= 10) {
		return "10 or over";
	}

	return "Less than 10";
}

console.log(testGreaterOrEqual(10));

