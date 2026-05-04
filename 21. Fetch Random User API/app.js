var button = document.querySelector("button");

button.addEventListener("click", function () {

    function Userdetails() {

        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var country = document.getElementById("country");

        fetch("https://api.randomuser.me/")
            .then(response => response.json())
            .then(data => {
                var user = data.results[0];
                var fname = user.name.first;
                name.innerText = fname;
                var emailid = user.email;
                email.innerText = emailid;

                var c = user.location.country;
                country.innerText = c;
            })

            .catch(error => {
                console.log("Error", error);
            });


    }

    Userdetails();
});