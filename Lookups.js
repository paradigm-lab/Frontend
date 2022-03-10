// Setup

function phoneticLookup(val) {
    var result = "";


    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };

    result = lookup[val];

    return result;

}

console.log(phoneticLookup("foxtrot"));


// Testing Object for Properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
}

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
console.log(checkObj("gift"));



// Manipulating Complex Objects
// A JavaScript object is a way to store a flexible data
// WhereBy we can Store strings, Numbers, Arrays, Boolean and Even other Objects

var myMusic = [
  // The First Object which is holding data using the key, Value Pair
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },

  // The Second Object which is holding data using the key, value Pair
  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "Youtube Videos",
      "Spotify",
      "YoutubeGo"
    ]
  }
];

console.log(myMusic[0]["artist"]);
console.log(myMusic[1].formats[2]);
