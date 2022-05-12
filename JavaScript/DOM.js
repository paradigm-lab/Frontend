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
