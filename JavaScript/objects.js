// Objects are collections of related variables and functions, which are represented as name/value pairs
// In javascript almost everything is an object
// objects can hava properties and method 
// Whereby properties can be primitive data types and object it self
// Curly braces {...} always represents an object
// . (dot) Member Access used to create access or dynamically changed the value of the property in the object
// [..] (Computed Member Access) 

/*
// constructor notation
var person = new Object();

var job = 'Profession';
var name = 'firstname';

person.name = "Jhon";
person['lastname'] = 'Smith';
person[job] = "Instructor";
person.son = new Object();
person.son.name = 'Nick';
person.son.age = 5;

console.log(person);
console.log(person.firstname);
console.log(person['lastname']);
*/


// Literal notation
var person = {
	firstname: "Toshi", 
	lastname: "Smith", 
	age: 35,
	daughter: {
		name: "Mary",
		age: 5
	},

	myFunc: function(par) {
		console.log(par.daughterName + " is a daughter of " + par.fatherName + " and she is " + par.daughterAge + " years old");
	}
};

console.log(person);
console.log(person["daughter"]["name"]);
person.myFunc({daughterName: 'Jessy', fatherName: "Michael", daughterAge: 5});



