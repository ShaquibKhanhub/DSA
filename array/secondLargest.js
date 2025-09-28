const secondLargest = (arr) => {
  let max = -1e18,
    secondMax = -1e18;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};

console.log(secondLargest([2, 3, 1, 5, 4]));
