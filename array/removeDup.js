
const removeDuplicates = (arr) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        found = true;
        break;
      }
    }

    if (!found) res.push(arr[i]);
  }

  return res;
};

console.log(removeDuplicates([  1, 2, 3, 2, 1, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // ['apple', 'banana', 'orange']