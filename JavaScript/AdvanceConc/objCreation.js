// Object.create() is a method of global object
// console.dir(Object); // Gives the list of methods in the Object

var obj1 = Object.create(Object.prototype, {
	name: {
		value: "Smith"
	}
});

// obj1.name = "Jhon";
// console.log(obj1);

var obj2 = {};
// console.log(obj2);


// Function Constructor
function Person() {
	this.name = "Jhon";
}

Person.prototype.greet = "Hello";


// Both person1 and person2 object have access to Person prototype object
// Both of the have access on Global object functions prototype
var person1 = new Person();

var person2 = Object.create(Person.prototype);
console.log(person1);
console.log(person2);


var firstProto = {
	sayHello: function() {
		return "Hello " + this.name;
	}
};

var john = Object.create(firstProto, {
	name: {
		value: "John"
	}
});

console.log(john);


var secondProto = Object.create(firstProto, {
	sayHi: {
		value: function() {
			return "Hi" + this.name;
		}
	}
});

console.log(secondProto);


var bob = Object.create(secondProto, {
	name: {
		value: 'Bob'
	}
});

console.log(bob);

var obj = Object.create(null);

console.log(obj);
