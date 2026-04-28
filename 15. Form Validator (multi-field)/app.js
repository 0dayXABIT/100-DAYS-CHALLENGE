// SELECT ALL FORM INPUTS : 
var username = document.getElementById("username");
var email = document.getElementById("email");
var name = document.getElementById("name");
var number = document.getElementById("number");
var password = document.getElementById("password");
var user = document.getElementById("user");
// SELECT CREATE BUTTON :- 
var button = document.getElementById("button");
// Button Pe event listner for adding validiation :- 
button.addEventListener("click", function () {

    // for username : not able to use admin / Admin and length more than 4 

    if (username.value === "Admin" || username.value === "admin" || username.value.length <= 4) {
        user.innerText = "Username not Available !";
        user.style.color = "red";
    }
    else {
        user.innerText = " ";
    }

    // for phone number  :- 
    if (number.value.length !== 10) {
        alert("Enter a Valid 10 digit Number ");
        number.value = "";
    }
    // for password :- 

    if (password.value.length <= 8) {
        alert("Password Must be Greater Than 8 characters");
    }
    else if (password.value.length > 10) {
        alert("form submitted");
    }

});