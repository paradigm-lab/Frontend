var ul = document.querySelector("ul");

document.getElementById("add-btn").addEventListener("click", function(e) {
	e.preventDefault();
	var addInput = document.getElementById("add-input");
	
	if (addInput.value != "") {
		var li = document.createElement("li"),
			firstPar = document.createElement("p"),
			secondPar = document.createElement("p"),
			firstIcon = document.createElement("i"),
			secondIcon = document.createElement("i"),
			input = document.createElement("input");

		firstIcon.className = "fa fa-pencil-square-o";
		secondIcon.className = "fa fa-times";
		input.className = "edit-note";
		input.setAttribute("type", "text");

		firstPar.textContent = addInput.value;

		secondPar.appendChild(firstIcon);
		secondPar.appendChild(secondIcon);
		li.appendChild(firstPar);
		li.appendChild(secondPar);
		li.appendChild(input);
		ul.appendChild(li);
		addInput.value = "";
	}
});



// *************************** HIDE ITEMS ******************************
var hideItem = document.getElementById("hide");
hideItem.addEventListener("click", function() {
	if (hideItem.checked) {
		ul.style.display = "none";
	} else {
		ul.style.display = "block";
	}
});

