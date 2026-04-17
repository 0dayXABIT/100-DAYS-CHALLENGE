var count = 0;
var display = document.getElementById("count-value");

// addition function 

var add = document.getElementById("add");
add.addEventListener("click", function () {
    count = count + 1;
    display.innerText = count;
});

var remove = document.getElementById("remove");

remove.addEventListener("click", function () {
    count = count - 1;
    display.innerText = Math.max(0,count);
});

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    count = 0;
    display.innerText = count;
});

