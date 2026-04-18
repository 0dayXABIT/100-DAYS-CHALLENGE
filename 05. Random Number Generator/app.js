var generate = document.querySelector("button");
var display = document.getElementById("count");

generate.addEventListener("click", function(){
    var random = Math.floor( Math.random() * 9999 + 1 );
    display.innerText=random ;
});

