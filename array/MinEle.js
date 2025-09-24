function minElement(arr) {
  let min = 1e18;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(minElement([4, 2, 9, 1, 7]));
  
