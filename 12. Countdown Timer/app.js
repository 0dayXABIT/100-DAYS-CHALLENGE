// SELECT ELEMENTS 
var input = document.getElementById("count");
var display = document.querySelector(".display");
var button = document.querySelector("button");

// interval null and targeted date :
var interval = null;
var targetDate;

// Event Listener Button :

button.addEventListener("click", function () {

    // Target Date + Current 
    targetDate = new Date(input.value);
    var now = new Date();

    if (!input.value) {
        display.innerText = "Select a Date!";
        return;
    }

    if (targetDate <= now) {
        display.innerText = "Select Future Date !";
        return;
    }

    if (interval != null) {
        clearInterval(interval);
    }

    UpdateTimer();
    interval = setInterval(UpdateTimer, 1000);

});

// Now the Main Function UpdateTimer() ;

function UpdateTimer() {
    var currentDate = new Date();
    var difference = targetDate - currentDate;

    // Convert Time : 
    var seconds = Math.floor((difference / 1000) % 60);
    var minutes = Math.floor((difference / (1000 * 60)) % 60);
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    display.innerText = days + "d " + hours + ":" + minutes + ":" + seconds;

    if (difference <= 0) {
        clearInterval(interval);
        display.innerText = "Time up !";
    }
}