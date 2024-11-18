const person = {
  name: "Hong Gildong",
};
person["age"] = 15;

const copyPerson = person; // 변수 person에 할당된 객체를 변수 copyPerson에 할당
person.name = "Hong"; // 변수 person에 할당된 객체의 값을 변경
console.log(person.name); // Hong
console.log(copyPerson.name); // Hong
console.log(person);
console.log(copyPerson);
