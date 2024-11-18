const checkBMI = (height, weight) => {
  let meterHeight = height / 100;
  let BMI = weight / meterHeight ** 2;

  if (BMI >= 26) return "비만";
  else if (BMI >= 24) return "과체중";
  else if (BMI >= 18.5) return "정상";
  else return "저체중";
};

console.log(`키 187cm 몸무게 92kg의 BMI는 ${checkBMI(187, 92)}입니다.`);
