// var alpha = {
//   1: "Z",
//   2: "Y",
//   3: "X",
//   4: "W",
//   24: "C",
//   25: "B",
//   26: "A",
// };
// alpha[2];
// alpha[24];

// var value = 2;
// alpha[value];
// console.log(alpha[2])

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));
