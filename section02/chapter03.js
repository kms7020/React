// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "김민승",
  age: 28,
  hobby: "헬스",
};

let { age: myAge, hobby, name, extra = "hello" } = person;
// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extar }) => {
  console.log(name, age, hobby, extra);
};

func(person);
