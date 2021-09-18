// Setup
function compareEquality(a, b) {
  if (a === typeof b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
console.log(compareEquality());
