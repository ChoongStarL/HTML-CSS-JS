function getMaxRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom); // 0 이상 20 이하의 무작위 정수

const arr = [10, 120, 30, 50, 20];
console.log(`주어진 배열에서 가장 큰 수는 ${arr.sort((a, b) => b - a)[0]}`);
