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
	if (val == 12) {
		return "Equal";
	}

	return "Not Equal";
}

console.log(testEqual(10));


function testStrict(val){ 
	if (val === 7) {
		return "Equal";
	}

	return "Not Equal";
}

console.log(testStrict('7'));
