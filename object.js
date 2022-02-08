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
	"friends":[]

}

// Accessing the properties in the object using the dot
var nameValue = myDog.name;
var friendsValue = myDog.friends;

console.log(nameValue);
console.log(friendsValue);
