// var weight = parseFloat(prompt("Enter your weight: "));

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

trueOfFalse(true);
