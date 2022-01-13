// For loop will keep on executing until the condition check return false
// for(initialization; condition; updation or incremenation and decrementation)

var subjects = ["Maths", "Physics", "Chemistry"];
var marks = new Array();
var num1;

for (var j = 0; j < subjects.length; j++) {
	num1 = parseFloat(prompt("Enter marks for subjects " + subjects[j]));
	marks[j] = num1;
}

for (i in marks){
	console.log(marks[i]);
}
