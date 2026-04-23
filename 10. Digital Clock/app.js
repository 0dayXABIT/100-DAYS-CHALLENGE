var display = document.getElementById("display");

function UpdateDate() {

    // date function :
    var now = new Date();
    // getting intervals 
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // formatting :
    hours = hours < 10 ? +"0" + hours : hours;
    minutes = minutes < 10 ? +"0" + minutes : minutes;
    seconds = seconds < 10 ? +"0" + seconds : seconds;

    // format string :

    var Time = `${hours}:${minutes}:${seconds}`;

    display.innerText = Time;
}

UpdateDate();
setInterval(UpdateDate, 1000);