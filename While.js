let i = 0
while (confirm('계속 진행하시겠습니까?')) {
    alert(`${i}번째 반복입니다.`)
    i++
}

// 1. 불_표현식을 확인한다.
// 2-a true라면 → 본문을 실행하고 1번으로 돌아간다.
// 2-b. false라면 → 종료

let k = 0
while (k < 10) {
    k++
    console.log(`${k}번째 반복입니다.`)
    break
}

let j = 0
while (j < 10) {
    j++
    console.log(`${j}번째 반복입니다.`)
    continue
    console.log(`현재 반복이 끝났습니다.`)
}