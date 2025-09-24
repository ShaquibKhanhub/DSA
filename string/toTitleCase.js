const toTitleCase = (str) => {
  const strArr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return strArr.join(" ");
};

console.log(toTitleCase("hello world"));
