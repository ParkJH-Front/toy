// 1. 알파벳 array의 인덱스를 하나하나 button 의 value 로 지정
// 2. 해당 버튼위에 onmouse 시 색 반전 (font와 background-color)
// 3. 해당 버튼을 클릭 시 라이프를 1 줄임
//   3-1. 정답 내 포함 단어인 경우.
//     - 해당 위치의 정답 단어를 보여주고 색반전
//   3-2. 정답 내 포함 단어가 아닌 경우.
//     - 버튼 색반전만 유지
// 4. 정답 리스트 array 에서 랜덤한 인덱스를 정답으로 선정 함
// 5. 라이프가 줄어들 때 마다 행맨 그림이 하나씩 완성이 되어야함
// 6. 게임 종료의 경우의 수
//   6-1. 라이프가 0이 되기전에 정답을 맞춘경우
//   6-2. 라이프가 0이 되어도 정답을 못맞춘 경우
// 7. Hint 버튼 클릭 시 정답 리스트 array에서 선택된 정답과 매칭되는 힌트 array 의 값을 출력해줌.
// 8. Replay 버튼 클릭 시 처음으로 돌아감

const alpBtnList = document.getElementById("alphabetList")

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function alpBtn() {
  alpBtnList.createElement = "button"
}

alpBtn()