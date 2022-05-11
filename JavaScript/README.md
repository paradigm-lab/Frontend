### Behind the Scenes of Javascript engineer:

Global Execution Context
Global Object
Execution Context
Execution Stack
Scope Chain 
Hoisting
Object Vs Primitives
'this'



Javascript Code >>>>>>>>>>> Web Browser(javascript Engineer(V8, SpiderMonkey, JavascriptCore, ChakraCore))

Syntax Parser reads the code character by character and checks if its grammar is valid.
	*Syntax parser checks the code, before it is actually executed

Lexical Scope or Lexical Environment is an environment, where a piece of the entire code physically sits.
	*Javascript engine behaves in differenct ways according to where this piece of code is placed

Execution Context is ac container, Which manages the code that is currently running
 	*In most cases it is created by the functions

	HTML page -->> Web Browser (The javascript engineer prepare the Global Execution Context)

Global Execution Context is a base execution contex that manages the code which is not inside a function
	*It is created immediately when the page is loaded

Global Object or Window Object is an object which is always exist in the Global Scope 

this is a special keyword and it's always referring to objects and 
     In global level it's reffered to global window object.

Note: When the variable is created outside the function it's on the global level and it's assigned to the global window object as a property.
	eg: var name = "Test";
	    window.name
	    this.name

      Function are attached in the global window object as a method
	eg: function name() {

		return "Hello";
	    }
	    window.name()
	    this.name()

      Object are referred in the global object using the name and the property name or method name or the key.
      var obj = {
	  name: 'Nick"
	  b: function() {
		return 'Hi';
	  }
      }
     
      Accessing the properties
      obj.name
      obj.name

      Accessing the methods	
      obj.b()
      obj.b()


### Execution Context and Execution Stack

### Execution Stack

Global Execution Context -----> Global Window Object ----> this will be created -----> Syntax parser will check the code line by line
if Syntactically === Syntax parser -> valid 
Javascript Engineer will start the execution line by line: Start the Execution Context  

Recursion:  	We will get a Maximum call stack size exceeded or Too much recursion
		This is because every javascript engineer has a limit of the execution stack so we can end up getting an error

scope and Scope Chain
Scope in programming language refers to the visibilty or accessibility of variables and functions
Scope chain accessibility for the variables.
Local variables are defined within function because they have local scope.

* It tells you where in your program you are allowed to use the variables and functions that you have defined.



 
