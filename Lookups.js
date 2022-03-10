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
