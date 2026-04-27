var display =  document.getElementById("display") ;
var weight = document.getElementById("weight");
var height = document.getElementById("height") ;
var button =  document.querySelector("button");

button.addEventListener("click" , function() {
    var h = height.value / 100;
    var w = weight.value ;
    var calculation = w / (h * h ) ;
    display.value=`${calculation.toFixed(1)}`;
});