var display = document.getElementById("display") ;
var buttons = document.querySelectorAll("button");

var expression = "" ;

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click" , function() {

        var value = this.innerText ;

        if (value === "C") {
            expression = ""
            display.value="0"
        }
        else if (value === "=") {
            try {
                var result = eval(expression) ;
                expression = result ;
                display.value=result ;
            }
            catch {
                display.innerText="Error" ;
                expression="" ;
            }
        }

        else {
        expression = expression + value ; 
        display.value=expression ;
        }

    });
}