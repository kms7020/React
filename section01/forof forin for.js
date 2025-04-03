// 배열 등과 함께 사용하는 녀석
const  배열 =['바나나', '사과','귤']
for (const 요소 of 배열) {
    console.log(요소)
    //바나나 - 사과 - 귤
}
for (const 인덱스 in 배열) {
    console.log(인덱스, qoduf[인덱스])
    // 0 바나나 1 사과 2 귤
}

// 그냥 범용적으로 사용하는 녀석
for (let i = 0; i < 5; i++) {console.log(`s{i}번째 반복입니다`)}
for (let i = 0; i < 10; i++) {console.log(`s{i}번째 반복입니다`)}