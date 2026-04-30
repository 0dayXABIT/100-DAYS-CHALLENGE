var display = document.getElementById("display");
var number = document.getElementById("number");
var celcius = document.getElementById("celcius");
var farenheight = document.getElementById("farenheight");
var button = document.querySelector("button");

button.addEventListener("click", function () {
    let num = Number(number.value);
    if (number.value === "") {
        display.value = "enter a value";
    }
    else if (celcius.checked) {
        var c = (num - 32) * 5 / 9;
        display.value = c.toFixed(2);
    }

    else if (farenheight.checked) {
        var f = (num * 9 / 5) + 32;
        display.value = f.toFixed(2);
    }

    else {
        display.value = "Select a unit ! ";
    }

});
