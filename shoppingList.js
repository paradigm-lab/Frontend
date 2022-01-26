// Created a shopping list using the 2 Dimenstional Array
var myList = [["Cereal", 3], ["Milk", 2], ["Bananas", 3], ["Juice", 2], ["Eggs", 4]];

for (var i = 0; i < myList.length; i++) {
	for(var j = 0; j < 2; j++) {
		console.log(myList[i][j]);
	}
}
