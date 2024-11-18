function getArrayMaxNumbet(arr) {
  let maxNum = arr[0];
  for (let num in arr) {
    if (maxNum < arr[num]) {
      maxNum = arr[num];
    }
  }
  return maxNum;
}
const max = getArrayMaxNumbet([10, 50, 30]);
console.log(max);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 2);
});

const result = (function (a, b) {
  function init() {
    return doSum(a, b);
  }
  function doSum(a, b) {
    return a + b;
  }
  return init();
})(10, 20);
console.log(result);
