const rotateArray = (arr, k) => {
  let n = arr.length;
  k = k % n;
  let res = [];
  for (let i = 0; i < n; i++) {
    res[(i+k) % n] =arr[i];

  }
  return res
};


console.log(rotateArray([1,2,3,4,5], 2));
