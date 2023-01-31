const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const pomodoro = document.getElementById("pomodoro");

let currentHour = 0;
let currentMinute = 40;
let currentSecond = 0;

hour.style.cssText = "--value: " + currentHour;
minute.style.cssText = "--value: " + currentMinute;
second.style.cssText = "--value: " + currentSecond;
console.log(hour.style.cssText);

let startInterval;
let nextPomodoro = false;
let pomodoroCount = 0;
pomodoro.textContent = pomodoroCount;

play.addEventListener("click", () => {
  play.classList.add("hidden");
  pause.classList.remove("hidden");
  startInterval = setInterval(() => {
    if (currentSecond === -1) {
      currentSecond = 59;
      currentMinute--;
    }

    if (currentMinute === -1) {
      if (nextPomodoro) {
        document.body.style.backgroundColor =
          "hsla(var(--b1)/var(--tw-bg-opacity,1))";
        console.log("pomodoro bitti");
        currentMinute = 40;
        currentSecond = 0;
        nextPomodoro = false;
        pomodoroCount++;
        pomodoro.textContent = pomodoroCount;
      } else {
        console.log("molaya girdi");
        currentMinute = 10;
        currentSecond = 0;
        nextPomodoro = true;
        document.body.style.backgroundColor = "#b45309";
      }
    }

    minute.style.cssText = "--value: " + currentMinute;
    second.style.cssText = "--value: " + currentSecond--;
  }, 1000);
});

pause.addEventListener("click", () => {
  play.classList.remove("hidden");
  pause.classList.add("hidden");
  clearInterval(startInterval);
});
