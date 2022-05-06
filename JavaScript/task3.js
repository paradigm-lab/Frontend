var students = [
	{
		name: 'John',
		score1: 47,
		score2: 46
	},
	
	{
		name: 'Bob',
		score1: 23,
		score2: 24
	},
	
	{
		name: 'Nick',
		score1: 40,
		score2: 35
	},
	
	{
		name: 'Alex',
		score1: 44,
		score2: 45
	},
];

var scores = [91, 81, 71, 61, 51];

var degree = ['A', 'B', 'C', 'D', 'E']

// A function to add score1 and score2 
function calcSum(scr1, scr2) {
	var sum = scr1 + scr2;
	
	return sum;
}


function calcFinal() {
	for (var i = 0; i < students.length; i++) {
		// Creating a property in the fly for the score of each object
		students[i].sum = calcSum(students[i].score1, students[i].score2);

		if (students[i].sum >= 51) {
			console.log(students[i].name + " passed final Exam successfully:");

			for (var x = 0; x < scores.length; x++) {

				if(students[i].sum >= scores[x]) {
				
					console.log("He has " + students[i].sum + " points and he got diploma with degree " + degree[x]);
					
					console.log('--------------------------------');

					break;
			
				}

			}
			

		} else {
			
			console.log(students[i].name + " got " + students[i].sum + " points, has failed and has to try next year");
			
			console.log("---------------------------------");
		
		}

	}

	console.log(students);

}

calcFinal();
