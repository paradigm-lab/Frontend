var a = 10;
var b = a;
a = 20;

console.log(a);
console.log(b);

var c = {
	name: 'John'
}; 

var d = c;

c.name = 'Nick';

// Using the equal sign we have created new object which took different spot in memory
c = {
	name: 'Bob'
};
