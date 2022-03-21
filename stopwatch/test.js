

let ttt = 0

const interval = setInterval(fucktime, 100)

function fucktime() {
  ttt = ttt + 1
  console.log(ttt)
  
  if(ttt === 100) {
    ttt = ttt = 0 
    clearInterval()
  };
};


