const date1 = new Date("2022-05-03");
console.log(date1.getTime());
console.log(((60 * 60 * 24) / 1000) * 10);
const date2 = date1.getTime() + 60 * 60 * 24 * 1000 * 10;
date1.setTime(date2);

console.log(date1);
