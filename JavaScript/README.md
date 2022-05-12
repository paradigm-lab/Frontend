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

Execution Context is a container, Which manages the code that is currently running
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



### Hoisting 
## Execution Context
# Hoisting in creation stage variables and function declarations are put into memory space.
* In creation stage all variables are set to undefined

Nt: All this happen before the javascript engineer start executing the code.
 
-> Creation Stage -> Global Object, 'this', Scope Chain
	-> When javascrip engineer created the memory for the variables it assign to all those variable the value undefined.
	-> Functions don't get any values.
	-> All this creation is called hoisting

-> Execution Stage 
	* In this stage javascrip engineer execute the code line by line 




### Objects VS Primitives







### THIS
this === window 
-> For the regular functions this key word still point to the global window object except for the methods of an object.
-> Local(function) Execution context this at this point it refers to the local object and not the global window object






### Document Object Model
- Manipulate on individual Elements
- Manipulate on multiple Elements
- DOM Styles
- DOM Classes
- Events
- set / Get Attributes
- DOM Navigation
- Note Manager App

Document Object Model (DOM):
	DOM is a cross-platform and language-independent model for representing and interacting with elements in HTML documents.
	
	* The DOM is neither part of HTML, nor part of JavaScript
	* DOM as a Tree

Nodes:
	* DOM is a collection of nodes
	* Everything in HTML document is a node

eg: 
	<p class='par'> This is my first paragraph </p>
	Element Node: p
	Attribute Node: Used to give more specification about an element. eg: class
	
document is an object. We can prove this by writing typeof document in the console.
We use document or window.document to get the document object in the console.

# Single Elements or Individual Elements
- getElementsById()

- querySelector('selector')
	* Returns the first element that matches a specified CSS selector in the document.
	* String argument always must to follow CSS syntax.

# Multiple Elements
- getElementsByClassName('class')
	* Returns a collection of all elements in the document with specified class name.
	* Collection is not an array

- getElementsByTagName('tag')
	* Returns a collection of all elements in the document with the specified tag name.
	* Return HTML collection

- The main difference between the getElementsByClassName and getElementsByTagName
	* geElementsByClassName get elements by specific the class name.
	* getElementsByTagName get elements by specific tag name.

- querySelectorAll('selector')
	* Return all elements in the document that matches a specified CSS selector
	* You can select multiple elements with multiple selectors separated by commas

- foreach() method executes a provided function once for each array element.
	* uses function as a paramenter
