var titles = document.querySelectorAll(".accordion-title");

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () {
        var title = this.parentElement;
        title.classList.toggle("active");
    });
}