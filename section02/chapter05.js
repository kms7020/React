// 1. 원시타입 vs 객체타입

// 원시타입 = 불변값(바뀌지 않는 값)
let p1 = 1;
let p2 = p1;
p2 = 2;

// 객체타입 = 가변값값
// let o1 = { name: "김민승"};
// let o2 = o1;

// o2.name = "홍길동";  ->  원본 데이터 값까지 수정됨

// 원시타입
// Number, String, Boolean 등 ...
// 값 자체로 변수에 저장되고 복사 된다
// 불변값이다(메모리 값 수정 x)

// 객체타입
// Object, Array, Function 등 ...
// 참조값을 통해 변수에 저장되고 복사된다.
// 가변값이다(메모리 값 수정 o)

// 얕은 복사 (객체의 참조값을 복사함)
//let o1 = { name: "김민승" };
//let o2 = o1; // 원복 객체가 수정될 수 있어 위험함함

// 깊은 복사 (새로운 객체를 생성하면서 프로퍼티만 따로 복사함)
//let o3 = { name: "김민승" };
//let o4 = { ...o3 }; // 원본 객체가 수정될 일이 없어 안전함

let o1 = { name: "김민승" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2);
// 결과 : True
console.log(o1 === o3);
// 결과 : False

console.log(JSON.stringify(o1) === JSON.stringify(o3));
// 결과 : True

// 얕은 비교
// o1 === o2

// 깊은 비교
// JSON.stringify(o1) === JSON.stringify(o2)
