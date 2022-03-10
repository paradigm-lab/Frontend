// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },

  "2468": {
    "album": "1999",
    "artist": "Prience",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },

  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },

  "5439": {
    "album": "ABBA Gold"
  }

};

// Keep a copy of the collection for tests
// Copy of the object
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}


// Alter values below to test the function
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "Diamond Platnum"));
