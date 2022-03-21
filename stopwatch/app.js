window.onload = function () {

  const sec = document.getElementById("min")
  const msec = document.getElementById("sec")
  const startButton = document.getElementById("startButton")
  const stopButton = document.getElementById("stopButton")
  const resetButton = document.getElementById("resetButton")
  
  let itv = null
  let msecTime = 0
  let secTime = 0
  
  function start() {
    clearInterval(itv)
    itv = setInterval(timeHandler, 10)
  };

  function stop() {
    clearInterval(itv)
  };

  function reset() {
    clearInterval(itv)
    msecTime = 0
    secTime = 0
    sec.innerText = "00"
    msec.innerText = "00"
  };

  function timeHandler() {
    msecTime++

    if(msecTime < 10){
      msec.innerText = `0${msecTime}`
    } else if (10 <= msecTime && msecTime < 100) {
      msec.innerText = msecTime
    } else {
      msecTime = 0
      secTime++
      if (secTime <= 9) {
        min.innerText = `0${secTime}`
      } else {
        min.innerText = secTime
      };
    };
  };
  
  startButton.addEventListener("click", start)
  stopButton.addEventListener("click", stop)
  resetButton.addEventListener("click", reset)
};