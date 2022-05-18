/*
var person1 = {}; 

person1.firstname = "John";
person1.lastname = "Papa";

var person2 = {}; 

person2.firstname = "Nick";
person2.lastname = "Doe";


function createPerson() {
	var newPerson = {}; 

	newPerson.firstname = "Bob";
	newPerson.lastname = "Brown";
	 
	return newPerson;
}

// Creating new objects dynamically on the fly
function createPerson(firstname, lastname) {
	var newPerson = {}; 

	newPerson.firstname = firstname;
	newPerson.lastname = lastname;
	 
	return newPerson;
}


var person3 = createPerson("Nick", "Smith");
var person4 = createPerson("Marry", "James");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
*/



// Function Constructor
function Person(firstname, lastname) {
	// var this = {};
	this.firstname = firstname;
	this.lastname = lastname;
	// return this; 
}


// If we don't have the new operator then it will point to global window object
var person5 = new Person("Nick", "Smith");
var person6 = new Person("Marry", "James");

console.log(person5);
console.log(person6);



var strObj = new String("Hello");
console.log(strObj);
console.log(typeof strObj);


