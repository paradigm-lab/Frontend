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


// Using the tag
var lis = document.getElementsByTagName('li');
console.log(lis);

// Using the tag name
// NodeList is an object and it's almost the same as an HTMLCollection
// Both of the have the length and they are index based
// We can provide multiple CSS selectors
var list = document.querySelectorAll('li, h2');
console.log(list);
Array.from(list).push("Hello");

// for the NodeList we don't need to change to an array inorder to use forEach method
Array.from(list).forEach(function(li) {
	li.textContent = "Hello Javascript";
});
