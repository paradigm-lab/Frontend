


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

	// Declaring an empty String
	var result = "";
	
	// Concatinate the strings from the parameter in the function
	result += "The " + myAdjective + " " + myNoun + " " +myVerb + " to the store " + myAdverb;  

	// Returning the result to the user
	return result;
}

var myAdjective = prompt("Adjective: ");
var myNoun = prompt("Noun: ");
var myVerb = prompt("Verb: ");
var myAdverb = prompt("Adverb: ");

// Calling the function to see the output
var output = wordBlanks(myAdjective, myNoun, myVerb, myAdverb);
console.log(output);
