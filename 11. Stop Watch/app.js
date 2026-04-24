// TIMER SELECT :
var timer = document.getElementById("timer");

// TIMER :

var hours = 0;
var minutes = 0;
var seconds = 0;

// BUTTONS :

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

// interval :

var interval = null;

// Function for StopWatch Timer :
function StopWatch() {
    seconds = seconds + 1;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours++;
        minutes = 0;
    }

    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;

    var timerStr = `${h}:${m}:${s}`;
    timer.innerText = timerStr;
}

// Start Button 
start.addEventListener("click", function () {
    interval = setInterval(StopWatch, 1000);
});

// Stop Button : 
stop.addEventListener("click", function () {
    clearInterval(interval);

});

// Reset Button : 
reset.addEventListener("click", function () {
    hours = 0;
    minutes = 0;
    seconds = 0;

    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;

    var timerStr = `${h}:${m}:${s}`;
    timer.innerText = timerStr;

    interval = null;
});

