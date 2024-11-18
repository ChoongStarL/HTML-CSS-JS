let checkOdd = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 2 == 0) {
    checkOdd++;
  }
}
console.log(`짝수의 개수는 ${checkOdd}개입니다.`);
