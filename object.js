let person = {
	name: "Mosh",
	age: 30
};
// Dot Notation
person.name = "Collins";

// Bracket Notation 
let selection = "name"
person[selection] = "John"

// console.log(person.name);


// Objects
// With the properties
var myDog = {

	"name": "Quincy",
	"legs": 3,
	"tails": 2,
	"friends":["Blucky"]

}

// Accessing the properties in the object using the dot
var nameValue = myDog.name;
var friendsValue = myDog.friends;

console.log(nameValue);
console.log(friendsValue);

var testObj = {

	"an entree": "hamburger",
	"my side": "Veggies",
	"The drink": "Water"
	
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["The drink"];

console.log(entreeValue);
console.log(drinkValue);


// Accessing Object Properties with variables
var VarifyObj = {

	12: "Namath",
	16: "Montana",
	19: "Unitas",
	
};


var playerNumber = 16;
var player = VarifyObj[playerNumber];
console.log(player);




const person1 = {};

person1.firstname = "John";
person1.lastname = "Doe";
person1.age = 50;
person1.eyecolor = "Blue";


console.log(person1.age);

const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
