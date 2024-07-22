const startPauseBttn = document.getElementById("startAndPause");
// const pauseBttn = document.getElementById("pause");
const restartBttn = document.getElementById("restart");
const timer = document.getElementById("timer");
let milsec = 0;
let second = 0;
let minut = 0;
let tsag = 0;

let timerInterval = null;

function miTimer() {
  milsec++;
  if (milsec == 99) {
    milsec = 0;
    second++;
    if (second == 60) {
      second = 0;
      minut++;
      if (minut == 60) {
        minut = 0;
        tsag++;
      }
    }
  }
  let ms = milsec < 10 ? "0" + milsec : milsec;
  let s = second < 10 ? "0" + second : second;
  let m = minut < 10 ? "0" + minut : minut;
  let ts = tsag < 10 ? "0" + tsag : tsag;
  timer.innerHTML = ts + " : " + m + " : " + s + " : " + ms;
}
startPauseBttn.addEventListener("click", function () {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    startPauseBttn.innerHTML = "START";
  } else {
    /* for (let i = 0; i <= 10; i++) {
      i = click;
      timerInterval = setInterval(miTimer, 1);
      startPauseBttn.innerHTML = "PAUSE";
      startPauseBttn.addEventListener("click", function () {
        clearInterval(timerInterval);
        startPauseBttn.innerHTML = "RESUME";
      });
    } */
    timerInterval = setInterval(miTimer, 15);
    startPauseBttn.innerHTML = "PAUSE";
    startPauseBttn.addEventListener("click", function () {
      clearInterval(timerInterval);
      startPauseBttn.innerHTML = "RESUME";
      startPauseBttn.addEventListener("click", function () {
        timerInterval = setInterval(miTimer, 15);
        startPauseBttn.innerHTML = "PAUSE";
        startPauseBttn.addEventListener("click", function () {
          clearInterval(timerInterval);
          startPauseBttn.innerHTML = "RESUME";
          startPauseBttn.addEventListener("click", function () {
            timerInterval = setInterval(miTimer, 15);
            startPauseBttn.innerHTML = "PAUSE";
          });
        });
      });
    });
  }
});

// pauseBttn.addEventListener("click", function () {
//   clearInterval(timerInterval);
// });

restartBttn.addEventListener("click", function () {
  clearInterval(timerInterval);
  milsec = 0;
  second = 0;
  minut = 0;
  tsag = 0;
  timer.innerHTML = "00 : 00 : 00 : 00";
});
