const clock = document.getElementById("clock")
const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")
const resetButton = document.getElementById("resetButton")

let action
let msec = 0
// timeStart() 실행 시 0.1초 씩 카운트 up 진행.
// function timeHandler(action) {
//   if(action === true) {
//     msec = msec + 1
//     console.log(msec)
//     clock.innerText = `${msec}`
//       if(msec === 100) {
//       msec = msec = 0 
//       }
//   } else if (action === false) {
//     clearInterval()
//   }
// }

function startTime() {
  action = true
  setInterval(timeHandler(action), 100)
};

startButton.addEventListener("click", startTime)

// timeStop() 실행 시 timeStart() 이벤트 정지.

function stopTime() {
  action = false
  timeHandler(action)
};

stopButton.addEventListener("click", stopTime)

// timeReset() 실행 시 clock = 00:00 으로 변경.