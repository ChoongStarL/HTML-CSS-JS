const getArrayMax = (arr) => {
  let maxNum = 0;
  for (i in arr) {
    if (maxNum < arr[i]) maxNum = arr[i];
  }
  return maxNum;
};
let itzzang = [10, 20, 50, 30, 20, 70, 10, 40];
console.log(getArrayMax(itzzang));
