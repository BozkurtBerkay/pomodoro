const pomodoroForm = document.getElementById("pomodoroForm");
const pomodoroFormSection = document.getElementById("pomodoroFormSection");
const pomodoroSection = document.getElementById("pomodoroSection");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const pomodoroCount = document.getElementById("pomodoroCount");
const currentCount = document.getElementById("currentCount");

const _pomodoroCount = document.getElementById("_pomodoroCount");
const _currentMinute = document.getElementById("_currentMinute");
const _restMinute = document.getElementById("_restMinute");

let currentHour = 0;
let currentMinute = 0;
let restMinute = 10;
let currentSecond = 0;

let startInterval;
let nextPomodoro = false;
let pomodoroCurrentCount = 0;

handleSubmit = (e) => {
  e.preventDefault();
  currentMinute = _currentMinute.value;
  restMinute = _restMinute.value;

  currentCount.textContent = pomodoroCurrentCount;
  pomodoroCount.textContent = _pomodoroCount.value;
  minute.style.cssText = "--value: " + currentMinute;
  second.style.cssText = "--value: " + currentSecond--;

  console.log("ekran göster");
  pomodoroFormSection.classList.add('hidden');
  pomodoroSection.classList.remove('hidden');
}

hour.style.cssText = "--value: " + currentHour;
minute.style.cssText = "--value: " + currentMinute;
second.style.cssText = "--value: " + currentSecond;


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
        currentMinute = _currentMinute.value;
        currentSecond = 0;
        nextPomodoro = false;
        pomodoroCurrentCount++;
        currentCount.textContent = pomodoroCurrentCount;
      } else {
        console.log("molaya girdi");
        currentMinute = restMinute;
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
