// var drink = "Energy Drink";
var drink = prompt("Enter your favorite");
var lyrics = "";
var cans = 99;


while (cans > 0) {
	lyrics = lyrics + cans + " cans of " + drink + " on the wall <br>";

	lyrics = lyrics + cans + " cans of " + drink + "<br>";

	lyrics = lyrics + "Take one down, pass it around, <br>";

	if (cans > 1) {
		lyrics = lyrics + (cans-1) + " cans of " + drink + " on the wall <br>";	
	}  else {
		lyrics = lyrics + "No more cans of " + drink + " on the wall <br>";
	}
	
	cans = cans - 1;
}

 
/*
	This example: 
		Gives you a flavor of how code can dynamically change a page.

	document.write takes a string of text and insert it into the document;
	In fact, it outputs the string precisely where the script tag is located. 
	so, in this case document.write outputs the string right into the body of the page.
*/

document.write(lyrics);
