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


// const rotateArray = (arr, k) => {
//   let n = arr.length;
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     res[(i+k) % n] = arr[i]; // still works because of % n
//   }
//   return res;
// };

// console.log(rotateArray([1,2,3,4,5], 7)); // works



// const reverse = (arr, start, end) => {
//   while(start < end){
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }

// const rotateArrayInPlace = (arr, k) => {
//   let n = arr.length;
//   k = k % n;
//   reverse(arr, 0, n-1);
//   reverse(arr, 0, k-1);
//   reverse(arr, k, n-1);
//   return arr;
// }

// console.log(rotateArrayInPlace([1,2,3,4,5], 2)); // [4,5,1,2,3]

