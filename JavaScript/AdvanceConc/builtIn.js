// call(), apply(), bind()

var person = {
	firstname: 'John',
	lastname: 'Smith',
	fullname: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var nick = {
	firstname: 'Nick',
	lastname: 'Doe'
};

console.log(person.fullname.call(nick))

var definePerson = function(age, job) {
	console.log(this.fullname() + ' is ' + age + ' years old and he is a ' + job);
};

definePerson.call(person, 28, "Developer");     // Argument should be individual parameter
definePerson.apply(person, [18, "Developer"]); // Argument list should always be in array

var getPerson = definePerson.bind(person, 10);
getPerson("Musician");
getPerson("Driver");

