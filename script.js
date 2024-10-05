let timer = null;
let minutes = 25;
let seconds = 0;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const setTimeElement = document.getElementById("setTime-Button");
const inputMinutesElement = document.getElementById("inputTimeValue-Minutes");
const inputSecondsElement = document.getElementById("inputTimeValue-Seconds");

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
setTimeElement.addEventListener('click', setTime);

const inputElementMinutes = document.getElementById("inputTimeValue-Minutes");

const inputElementSeconds = document.getElementById("inputTimeValue-Seconds");

function startTimer () {
  if (timer == null) {
    timer = setInterval(countDown, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer () {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  minutesElement.innerHTML = "25";
  secondsElement.innerHTML = "00";
}


function countDown () {
  if(seconds == 0 ){
    if(minutes == 0) {
      clearInterval(timer);
      timer = null;

      const audio = new Audio("");

      audio.play();
    }
    else {
      minutes--;
      seconds = 59;
    }
  }else {
    seconds --;
  }
  updateTimer();
}

function updateTimer() {
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function formatTime (time) {
  return time < 10 ? `0${time}` : time
}

function setTime () {
  clearInterval(timer);
  timer = null;
  minutes = inputElementMinutes.value;
  seconds = inputElementSeconds.value;

  if (seconds === "") {
    seconds = "00";
  }
  
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  clearInput();
}

function clearInput () {
  inputMinutesElement.value = "";
  inputSecondsElement.value = "";
}

