function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const Arr = rangeOfNumbers(startNum, endNum - 1);
    Arr.push(endNum);
    return Arr;
  }
}

console.log(rangeOfNumbers(1, 5));
