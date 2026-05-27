let totalStudySeconds = 0;
const quotes = [

    "Where focus becomes progress.",

    "Build your focus. Master your work.",

    "All your study tools, one core.",

    "Focus better. Achieve more.",

    "Your daily base for better studying.",

    "Lock in. Level up.",

    "Turn focus into results.",

    "Distraction out. Progress in.",

    "Stay locked. Stay ahead.",

    "Train your focus. Change your outcome.",

    "Find your calm. Find your focus.",

    "Quiet mind. Clear progress.",

    "Soft structure for strong results.",

    "Study in flow."

];
function showDailyQuote() {

    let today =
        new Date().getDate();

    let quote =
        quotes[today % quotes.length];

    document.getElementById("quoteText")
        .innerHTML = quote;
}

showDailyQuote();
function showDate() {

    let now = new Date();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("dayText")
        .innerHTML =
        days[now.getDay()];

    document.getElementById("dateText")
        .innerHTML =
        now.getDate() + " " +
        months[now.getMonth()] + " " +
        now.getFullYear();
}

showDate();
function playAlarm() {

    document.getElementById("alarmSound")
        .play();
}
let studyMinutes = 25;
let breakMinutes = 5;

let time = studyMinutes * 60;

let timerRunning = false;

let interval;

let isBreak = false;

function updateTimer() {

    let minutes = Math.floor(time / 60);

    let seconds = time % 60;

    seconds = seconds < 10
        ? "0" + seconds
        : seconds;

    document.getElementById("timer")
        .innerHTML =
        minutes + ":" + seconds;
}

function setMode(study, breakTime) {

    studyMinutes = study;

    breakMinutes = breakTime;

    time = studyMinutes * 60;

    isBreak = false;

    document.getElementById("modeText")
        .innerHTML =
        "Study Session";

    updateTimer();
}

function startTimer() {

    if (timerRunning) return;

    timerRunning = true;

    interval = setInterval(function () {

        if (time > 0) {

            time--;
            if (!isBreak) {

    totalStudySeconds++;

    let hours =
        (totalStudySeconds / 3600)
        .toFixed(2);

    document.getElementById("studyHours")
        .innerHTML =
        hours + " hrs";
}

            updateTimer();
        } else {
             playAlarm();
            if (!isBreak) {

                isBreak = true;

                time = breakMinutes * 60;

                document.getElementById("modeText")
                    .innerHTML =
                    "Break Time 😭";

            } else {

                isBreak = false;

                time = studyMinutes * 60;

                document.getElementById("modeText")
                    .innerHTML =
                    "Study Session";
            }
        }

    }, 1000);
}

function pauseTimer() {

    clearInterval(interval);

    timerRunning = false;
}

function resetTimer() {

    clearInterval(interval);

    timerRunning = false;

    isBreak = false;

    time = studyMinutes * 60;

    document.getElementById("modeText")
        .innerHTML =
        "Study Session";

    updateTimer();
}
function takeBreak() {

    clearInterval(interval);

    timerRunning = false;

    isBreak = true;

    time = breakMinutes * 60;

    document.getElementById("modeText")
        .innerHTML =
        "Break Time 😭";

    updateTimer();
}

function addTask() {

    let taskInput =
        document.getElementById("taskInput");

    let taskText =
        taskInput.value;

    if (taskText === "")
        return;

    let li =
        document.createElement("li");

    li.innerHTML = `
        <input type="checkbox">
        ${taskText}
    `;

    document.getElementById("taskList")
        .appendChild(li);

    taskInput.value = "";
}

function toggleDarkMode() {

    document.body.classList
        .toggle("dark-mode");
}

updateTimer();