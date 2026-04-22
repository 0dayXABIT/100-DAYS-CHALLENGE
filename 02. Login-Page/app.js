var button = document.querySelector(".btn");

button.addEventListener("click", function () {

    var usernameselect = document.getElementById("username").value;
    var passwordselect = document.getElementById("password").value;

    if (usernameselect === "" || passwordselect === "") {
        alert("Enter Credentials");
    }
    else {
        alert("Logged In");
    }
});