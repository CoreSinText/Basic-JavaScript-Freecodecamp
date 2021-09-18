// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const Array = countdown(n - 1);
    Array.unshift(n);
    return Array;
  }
}
// Only change code above this line
console.log(countdown(10));
