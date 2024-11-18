for (let i = 100; i < 1000; i++) {
  let hundred = Math.trunc(i / 100);
  let ten = Math.trunc((i / 10) % 10);
  let one = Math.trunc((i % 100) % 10);
  if (i == hundred ** 3 + ten ** 3 + one ** 3) {
    console.log(i);
  }
}
