// Typing animation
const text = "Aspiring Computer Science Student | AI & Cybersecurity Enthusiast";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;
