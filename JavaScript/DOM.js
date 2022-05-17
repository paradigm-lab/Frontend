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


var h2 = document.querySelector("header h2");
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


h2.addEventListener("click", a);
h2.addEventListener("click", b);

function a() {
	console.log("Clicked a");
}

function b() {
	console.log("Clicked b");
}
