// Setup

// ---First Answer---
// function abTest(a, b) {
//   // Only change code below this line
//   if (a === -2 && b === 2) {
//     return undefined;
//   } else if (a === 2 && b === -2) {
//     return undefined;
//   } else {
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }

//   // Only change code above this line
// }

// ---Second Answer---
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code

abTest(2, 2);
console.log(abTest(0, 0));
