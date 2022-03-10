// Setup

var contacts = [

  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0621611266",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },

  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0621611266",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },

  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0621611266",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },

  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0621611266",
    "likes": ["Pizza", "Coding", "Brownie Points"]
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
var data = lookUpProfile("Akira", "number");

console.log(data);
