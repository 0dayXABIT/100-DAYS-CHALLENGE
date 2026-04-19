var input = document.getElementById("password");
var button = document.getElementById("button");
var display = document.getElementById("display");

button.addEventListener("click", function () {

    var password = input.value;

    if (password === "") {
        display.innerText = "Enter Password";
        display.style.color = "yellow";
        return;
    }

    var score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[@!%$]/.test(password)) {
        score++;
    }

    if (score <= 2) {
        display.innerText = "Weak";
        display.style.color = "red";
    }

    else if (score <= 4) {
        display.innerText = "Medium";
        display.style.color = "yellow"
    }
    else  {
        display.innerText = "Strong";
        display.style.color = "lime";
    }

});