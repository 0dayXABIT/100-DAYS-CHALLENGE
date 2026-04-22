var amount = document.getElementById("amount");
var service = document.getElementById("service");
var display = document.getElementById("display");
var button = document.querySelector("button");
var missing = document.getElementById("missing");

button.addEventListener("click", function () {

// if values are empty 
    if (amount.value === "" || service.value === "") {
        missing.innerText = "Enter Missing Fields";
        return;
    }
// calculation logic 
    var bill = amount.value;
    var Tipservice = Number(service.value);
    var tip = bill * Tipservice;
    display.value = `Tip: ₹${tip.toFixed(2)}`;

});