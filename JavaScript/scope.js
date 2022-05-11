var num1 = 5;

function a() {
	var num2 = 10;
	function b() {
		var num3 = 15;
		console.log(num3 + num2 + num1);
	}

	b();
}

a();
