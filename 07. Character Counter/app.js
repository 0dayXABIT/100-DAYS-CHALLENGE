var input = document.getElementById("input") ;
var display = document.getElementById("display");
var button = document.getElementById("button");

button.addEventListener("click" , function() {
    var characters = input.value ;
    var count = characters.length ;
    display.innerText=count ;
    display.style.color="lime" ;
});