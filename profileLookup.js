// Setup

var contacts = [

  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0621611266",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },

  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "07437294",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },

  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0734564310",
    "likes": ["Intriguing", "Cases", "Violin"]
  },

  {
    "firstName": "Kristan",
    "lastName": "Vos",
    "number": "0721321030",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
        return contacts[i][prop] || "No Such property";
    }
  }
  return "No such contacts";
}

// Change these values to test the function
var data = lookUpProfile("Kristan", "number");

console.log(data);
