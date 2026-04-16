var input = document.querySelector("#todoinput");
var button = document.querySelector("button");
var list = document.querySelector(".list")

button.addEventListener("click", function () {
    if (input.value === "") {
        alert("Task Cant be Empty !");
    }
    else {
        var li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        input.value = "" ;
    }
    event.preventDefault();
});
