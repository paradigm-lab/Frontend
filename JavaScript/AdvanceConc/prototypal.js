/*
// Literal Notation
var a = {};

// Constructor Notation
var b = new Object();

Object.prototype.greet = "Hello";

// console.log(a);
// console.log(b);


function a() {
	
}


var b = {};
*/

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.getFullName = function() {
		return this.firstname + " " + this.lastname;
	}

Person.prototype.greet = "Hello From prototype object";


var person1 = new Person("Jhon", "Smith");
Person.prototype.greet = "Hello From person1 object";

var person2 = new Person("Nick", "Doe");



console.log(person1.getFullName());
console.log(person2.getFullName());

