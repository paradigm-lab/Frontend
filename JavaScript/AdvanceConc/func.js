var arr = [1, 2, 3];
// Adding a new element in the fly
arr[3] = 4;
arr.prop = "Hello";

console.log(arr);


// Function's are objects
// Go to console write: window or this
function a() {
	console.log("Hello");
}


a["prop"] = "HI";


a.obj = {
	greet: "Hey",
};


a.myFunc = function() {
	console.log("Hola");
}
