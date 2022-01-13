var weight = parseFloat(prompt("Enter your weight: "));

switch(weight){
	case 1:
		document.write("Weight is 1");
		break;
	case 2: 
		document.write("Weight is 2");
		break;
	case 3:
		document.write("Weight is 3");
		break;

	default:
		document.write("Weight is not in 1, 2, 3");
		break;
}
