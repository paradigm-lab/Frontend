function a() {
	var name = 'Joh';
	b();
	console.log(name);
}


function b() {
	var name = 'Bob';
	c();
	console.log(name);
}


function c() {
	var name = 'Nick';
	console.log(name);
}

a();
