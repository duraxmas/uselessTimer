const hourElem = document.querySelector(".hours")
const minElem = document.querySelector(".minutes")
const secElem = document.querySelector(".seconds")
const msElem = document.querySelector(".milliseconds")
const resContainer = document.querySelector(".results")

const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")
const newBtn = document.querySelector(".new")

let ms = 00,
  sec = 00,
  min = 00,
  hour = 00,
  interval,
  result;

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  disableBtn(newBtn);
})

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
})

stopBtn.addEventListener("click", () =>{
  clearTimer
  disableBtn(newBtn) })

newBtn.addEventListener("click", newTimer)




function startTimer() {
  ms++;
  if (ms < 9) msElem.innerText = "0" + ms;
  if (ms > 9) msElem.innerText = ms;
  if (ms > 99) {
    sec++
    secElem.innerText = "0" + sec;
    ms = 0;
    msElem.innerText = "0" + sec;
  }

  if (1 <= sec < 9) secElem.innerText = "0" + sec;
  if (sec > 9) secElem.innerText = sec;
  if (sec > 59) {
    min++
    minElem.innerText = "0" + min;
    sec = 0;
    secElem.innerText = "0" + sec;
  }

  if (min < 9) minElem.innerText = "0" + min;
  if (min > 9) minElem.innerText = min;
  if (min > 59) {
    hour++
    hourElem.innerText = "0" + hour;
    min = 0;
    minElem.innerText = "0" + min;
  }

  if (hour <= 9) hourElem.innerText = "0" + hour;
  if (10 <= hour) hourElem.innerText = hour;

}


function clearTimer() {
  clearInterval(interval);
  ms = 00;
  sec = 00;
  min = 00;
  hour = 00;

  msElem.textContent = "0" + ms;
  secElem.textContent = "0" + sec;
  minElem.textContent = "0" + min;
  hourElem.textContent = "0" + hour;
}

function newTimer() {
  resContainer.insertAdjacentHTML("beforeend", `
  <div class="result">Result: ${hour > 9 ? hour : "0" + hour}:${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}:${ms > 9 ? ms : "0" + ms}</div>
  `)
}

function disableBtn(btn) {
  btn.disabled = !btn.disabled;
}
disableBtn(newBtn);



