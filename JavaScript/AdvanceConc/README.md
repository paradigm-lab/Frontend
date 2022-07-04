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

	* function a() {} (Special type of object)	-> Prototype Object(function a)
							-> Prototype Object(Global object Function)
	
	* var var b = {} 				-> Prototype Object(Global object Function)
	
	- Prototypal Vs Classical
		*  


- Object.create()
	* Allows us to create object and defines for that object prototype that we want.
	* It is a method of a Global Object.


- First-Class Functions 
	* Store function in a variable
	* Use Function as a variable
	* Pass function as a parameter
	* Return function from other function


- IIFE (Immediately Invoked Function Expression)
	IIFE is a function that runs as soon as it is defined.



	
