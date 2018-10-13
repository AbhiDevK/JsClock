window.addEventListener("DOMContentLoaded", playAudio);
function playAudio() {
  const audio = document.querySelector(".play");
  audio.play();
}

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const time_12 = document.querySelector(".time-12");
const time_3 = document.querySelector(".time-3");
const time_6 = document.querySelector(".time-6");
const time_9 = document.querySelector(".time-9");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds(); //get current second
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (secondsDegrees === 90) {
    time_12.classList.add("focus");
  }
  if (secondsDegrees === 168) {
    time_3.classList.add("focus");
  }
  if (secondsDegrees === 264) {
    time_6.classList.add("focus");
  }
  if (secondsDegrees === 366) {
    time_9.classList.add("focus");
  }

  if (secondsDegrees === 96) {
    time_12.classList.remove("focus");
  }
  if (secondsDegrees === 174) {
    time_3.classList.remove("focus");
  }
  if (secondsDegrees === 276) {
    time_6.classList.remove("focus");
  }
  if (secondsDegrees === 378) {
    time_9.classList.remove("focus");
  }

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
function bounce() {
  console.log("bounce 372-9, 174-3, 276-6, 90-12");
}

setInterval(playAudio, 1000);
setInterval(setDate, 1000);

setDate();
