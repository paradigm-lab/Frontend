// For the function or inside other regular functions this keyword always refers to global window object and acts like global execution context 
function a() {

	console.log(this);
	console.log(this === window);

	function b() {
		console.log(this);
		console.log(this === window);
	} 

	b();
}

a();

var firstname = 'Bob';

var per = {
	firstname: 'John',
	lastname: 'Smith',
	getFullName: function() {
		// We maintaine the reference to object per and not the global window object
		var that = this;
		// console.log(this === per);
		console.log(this.firstname + ' ' + this.lastname);

		// When this keyword is used inside normarl function it refers to global window object
		function greet() {
			console.log('Hi ' + that.firstname);
		}
		greet();
	}
};


var per1 = {
	firstname: 'Nick',
	lastname: 'Doe'
};

// This fact allow as to borrow the method from object per
per1.getFullname = per.getFullName;

per.getFullName();
per1.getFullname();

