// 1. js파일을 만들어서 html에 연결 시킬수 있는가?
// 2. parseInt()를 사용할 수 있는가?
//     - 배열에 parseInt()를 적용하면 정수가 된다.
// 3. sort()를 사용할 수 있는가요?
// 4. Math.random()을 사용할 수 있는가?

function lottoGen(){
    let lottoNumbers = []

for (let i = 0; i < 45; i++) {
    lottoNumbers[i] = i+1
}

console.log(lottoNumbers)

let drawnNos = []

//1. splcie를 1회 수행하면 배열의 요소가 1개 줄어듬
//2. 줄어든 배열의 길이로 나눈 것의 나머지를 구해야 한다.
//3. 고정된 45로 계속 나누계 되면 정수 44가 발생할 수 있지만 배열엔 44에 해당하는 값이 없다(배열이 줄어 들어서)
//4. 배열.splice()의 결과 값은 1개 요소를 갖는 배열이다.
//5. 오름차순으로 정렬한다.

for (let i = 0; i < 6; i++) {
    //2. 줄어든 배열의 길이로 나눈 것의 나머지를 구해야 한다.
    num = parseInt(Math.random()*100%lottoNumbers.length)

    //4. 배열.splice()의 결과 값은 1개 요소를 갖는 배열이다.
    drawnNos[i] = parseInt(lottoNumbers.splice(num, 1))
    console.log(lottoNumbers.length, drawnNos[i])
}

//5. 오름차순으로 정렬한다.
drawnNos.sort((a, b) => {
    return a-b
})
    console.log(drawnNos)

//    const newDiv = document.getElementById("lottoNums")

    const newDiv = document.createElement('div')

    const newNums = document.createTextNode(drawnNos)

    newDiv.appendChild(newNums)

    document.body.appendChild(newDiv)

    // function createDiv() {
    //     // 1. <div> element 만들기
    //     const newDiv = document.createElement('div');
    //
    //     // 2. <div>에 들어갈 text node 만들기
    //     const newText = document.createTextNode('안녕하세요');
    //
    //     // 3. <div>에 text node 붙이기
    //     newDiv.appendChild(newText);
    //
    //     // 4. <body>에 1에서 만든 <div> element 붙이기
    //     document.body.appendChild(newDiv);
    // }







}

