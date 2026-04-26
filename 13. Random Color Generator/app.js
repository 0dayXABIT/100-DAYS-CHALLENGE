var box = document.querySelector(".box");
var button = document.querySelector("button");
var colors = [
    // Your original colors
    "red", "green", "yellow", "orange", "lime", "orangered", "purple", 
    
    // Vibrant & Neon
    "cyan", "magenta", "hotpink", "aquamarine", "chartreuse", "crimson", "gold", 
    "deepskyblue", "springgreen", "fuchsia", "tomato", "yellowgreen",
    
    // Modern & Flat UI Colors
    "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", 
    "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", 
    "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b",
    
    // Soft & Pastel
    "lightcoral", "salmon", "peachpuff", "palegoldenrod", "lavender", 
    "thistle", "powderblue", "lightcyan", "mistyrose", "honeydew",
    
    // Deep & Royal
    "midnightblue", "darkslategrey", "indigo", "maroon", "navy", "darkolivegreen"
];

button.addEventListener("click", function () {
    var i = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[i];
});