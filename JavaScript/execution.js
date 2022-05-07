function a() {
	var name = 'John';
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

a(); // Nick, Bob, John


// Recursion  	We will get a Maximum call stack size exceeded or Too much recursion
// 		This is because every javascript engineer has a limit of the execution stack so we can end up getting an error
function rec() {
	rec()
}

rec();


/*
	Execution Stack 

	Execution Context
	(Function c)

	Execution Context
	(Function b)

	Execution Context
	(Function a)

	Global Execution Context
*/
