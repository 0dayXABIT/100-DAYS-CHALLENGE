var display = document.getElementById("display");
var number = document.getElementById("number");
var button = document.querySelector("button");

button.addEventListener("click", function () {

    var player = Number(number.value);
    var computer = Math.floor(Math.random() * 10);

    // Logic if number wasnt entered ; 

    if (number.value === "") {
        display.value = "Enter a Number";
        display.style.color = "yellow";
       display.style.fontWeight = "bold";
    }
    else if (player === computer) {
        display.value = `Correct Guess : ${computer}`
        display.style.color = "lime";
       display.style.fontWeight = "bold";
    }
    else {
        display.value = `I Thought : ${computer}`
        display.style.color = "red";
        display.style.fontWeight = "bold";
    }
    number.value = "";
    number.focus();
});