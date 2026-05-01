// Quiz Questions
var QuizQuestions = [
    {
        question: "What does HTML stand for?",
        Options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which HTML element is used for the largest heading?",
        Options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correct: 2
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        Options: ["<lb>", "<break>", "<br>", "<span>"],
        correct: 2
    }
];

// Elements
var question = document.getElementById("q-text");
var button = document.querySelector("button");
var index = 0;
var score = 0;

// Load Question + Options
function LoadQuestions() {

    question.innerText = `Q:${index + 1} ${QuizQuestions[index].question}`;

    var labels = document.getElementsByTagName("label");
    var options = QuizQuestions[index].Options;

    for (let i = 0; i < options.length; i++) {
        labels[i].innerText = options[i];
    }

    // reset radio buttons
    var input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;
    }
}

LoadQuestions();

// Button Click
button.addEventListener("click", function () {

    var input = document.getElementsByTagName("input");
    var selectedIndex = -1;

    // find selected option
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            selectedIndex = i;
        }
    }

    // check answer
    if (selectedIndex === QuizQuestions[index].correct) {
        score++;
    }

    index++;

    if (index < QuizQuestions.length) {
        LoadQuestions();
    } else {
        alert("Quiz Finished! Score: " + score);
    }
});