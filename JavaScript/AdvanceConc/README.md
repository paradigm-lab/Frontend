### Everything is an Object (Except Primitives)
- Primitives
	* Strings
	* Numbers 
	* Booleans
	* Undefined
	* Null 

- Objects
	* Arrays
	* Functions
	* Objects	
	* Dates
	* ...


- Function Constructor 
	* The function constructor is used to create the function object.
	* Constructs objects dynamically


- Built-In Function Costructors
	* new Object();
	* new Date();
	* new String();
	* new Array();
	* new Number();


- ProtoType(Inheritance)
	* Every object inherits properties and method from its prototype.
	* Prototype itself is an object

	var a = {};             -----------------------
		     __proto__                        |
						      |
	Object
	(Global Function Objec) ---------->       Prototype Object
		     prototype:                       |
						      |
	var b = new Objec();    -----------------------
		     __proto__


	
	- Prototypal Vs Classical
		*  
