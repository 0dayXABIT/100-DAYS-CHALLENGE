var dark = document.getElementById("dark");
var light = document.getElementById("light");
var display = document.getElementById("display");

function Toggle() {
    dark.addEventListener("click", function () {
        display.value = "";
        document.body.style.backgroundColor = "black";
        display.value = "Dark Mode On";
        display.style.color = "black";
        display.style.fontSize = "20px";
    });

    light.addEventListener("click", function () {
        document.body.style.backgroundColor = "white";
        display.value = "Light Mode On";
        display.style.color = "red";
        display.style.fontSize = "20px";

    });
}

Toggle();