const maxElement = (arr) => {
  let max = -1e18;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};
console.log(maxElement([1, 2, 3, 4, 5]));
