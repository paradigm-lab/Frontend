/*
 * Query Selector -> DOM method which is used to selector, Update and manipulate on them
 *
	var el = document.querySelector("ul li:nth-child(2)");
	el.textContent = "Hello World";
	var ll = document.querySelector("#search-note");
	var le = document.querySelector("ul li");
	var ne = document.querySelector("ul");
	console.log(el + " " + ll + " " le + " " ne);
*/

/*
var icons = document.getElementsByClassName('fa'); // icons is just a HTML collection

for (var i = 0; i < icons.length; i++) {
	console.log(icons[i]);
}

// HTML collection
var iconsArr = Array.from(icons);
console.log(iconsArr); // Array
console.log(icons);    // HTMLCollection

iconsArr.push("Hello");
console.log(iconsArr);

// foreach()
// foreach() method executes a provided function once for each array element
// *uses function as a paramenter 

// Converting from HTML collection to an Array collection
Array.from(icons).forEach(function(icon, index, arr) {
	console.log(icon, index, arr);	
});


// Using the tag name
// Returns an HTML Collection which can be converted to an Array instance
var lis = document.getElementsByTagName('li');
console.log(lis);

// Using the tag name
// NodeList is an object and it's almost the same as an HTMLCollection
// Both of the have the length and they are index based
// We can provide multiple CSS selectors
// Put the element in node list selects element top to bottom
var list = document.querySelectorAll('li, h2');
console.log(list);
Array.from(list).push("Hello");

// for the NodeList we don't need to change to an array inorder to use forEach method
Array.from(list).forEach(function(li) {
	li.textContent = "Hello Javascript";
});


var h2 = document.querySelector('header h2')
// Creating an inline styling
h2.style.color = "red"
h2.style.backgroundColor = "green"
var list = document.querySelectorAll('ul li')
for (var i = 0; i < list.length; i++) {
	  lis[i].style.backgroundColor = 'blue'
}

// Using cssText property
// It remove recent inline style and replace it with new styles
// Takes more than one style argument
lis[0].style.cssText = 'background-color: yellow; font-size:25px;'

var h2 = document.querySelector('header h2');

// 
h2.className = "changeBg";
//h2.className = " changeFt";

h2.classList.add("changeFt");
// h2.classList.remove("changeBg");

// This will remove the changeBg from the list
h2.classList.toggle("changeBg");

// console.log(typeof h2.className);

console.log(h2.classList);

*/


//var h2 = document.querySelector("header h2");
/*
h2.onclick = function() {
	console.log("Clicked");
}

h2.onmouseover = function() {
	console.log("MouseOver");
}

function a() {
	console.log("Clicked");
}

function b() {
	console.log("MouseOver");
}
*/

/*
h2.addEventListener("click", function() {
	a(2, 10);
});
// h2.addEventListener("click", b);

function a(x, y) {
	console.log(x * y);
}
*/

/* 
function b() {
	console.log("Clicked b");
}
*/



/*
var div = document.querySelector('div.wrapper');
var header = document.querySelector('header');


div.addEventListener('click', function(){
	var delay = new Date().getTime() + 1000;
	while (new Date() < delay) {}
	console.log("From div");
}, true);

header.addEventListener('click', function(){
	var delay = new Date().getTime() + 1000;
	while (new Date() < delay) {}
	console.log("From header");
}, true);


var h2 = document.querySelector('header h2');


// Waiting until function a() finish the execution 
// After that run EventListener
h2.addEventListener('click', function(){
	console.log("From click event");
}, false);

function a() {
	var delay = new Date().getTime() + 3000;
	while (new Date() < delay) {}
	console.log("From function a");
}

a();

console.log("Global Code is Executed");


var div = document.querySelector('div.wrapper');
div.getAttribute("class"); 
div.getAttribute("id");

// Add an attribute and value in the element
div.setAttribute("style", "background:  coral")
// Remove an attribute from element
div.removeAttribute("style")
// Returns a boolean
div.hasAttribute("style")
*/


var btn = document.getElementById("add-btn");
var input = document.getElementById("add-input");

btn.addEventListener("click", function(e) {
	e.preventDefault();
	input.setAttribute("type", "submit");
	input.setAttribute("value", input.value);
});


var listItem = document.getElementById("list-item");


console.log(listItem.parentNode);
console.log(listItem.parentNode.parentNode);
console.log(listItem.parentElement);
listItem.parentElement.style.background = "aqua";

// Text Nodes are actually the white spaces which are btwn the elements
console.log(listItem.childNodes);

// Ignores the spaces and returns the HTMLCollectin
console.log(listItem.children);


// It recognize the white spaces as child nodes
console.log(listItem.firstChild);
// It ignores the white spaces
console.log(listItem.firstElementChild);

// Get the last element
console.log(listItem.lastElementChild);


// Getting access on sibling
// Include the White spaces
console.log(listItem.previousSibling);

// Gives the previous sibling Element
console.log(listItem.previousElementSibling);

// Gives the next sibling Element
console.log(listItem.nextElementSibling);


// Using DOM manipulation We can create new Elements and add them in HTML document
var newEl = document.createElement("button");
var text = document.createTextNode("Click");

newEl.appendChild(text);
newEl.setAttribute("style", "display: block; margin:10px auto; padding:5px 10px; background-color: coral; color:#fff;");
console.log(newEl);

var form = document.getElementById("add");
// form.appendChild(newEl);
form.insertBefore(newEl, form.children[0]);

// Remove Element from HTML document
// newEl.parentElement.removeChild(newEl);
