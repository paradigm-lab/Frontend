var scoreOfJohn = 49;
var scoreOfNick = 39;
var pass = 51;

if (scoreOfJohn >= pass && scoreOfNick >= pass) {
	console.log("Both John and Nick passed");
} else if (scoreOfJohn >= pass || scoreOfNick >= pass) {
	
	console.log("One of the students passed");
	
	if (scoreOfJohn > scoreOfNick) {
		console.log("and it is John with " + scoreOfJohn + " points");
	} else {
		console.log("and it is Nick with " + scoreOfNick + " points");
	}

} else {
	console.log("Both students failed");
}
