const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const suggestionsList = document.getElementById("suggestions");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    updateStrength(password);
});

function updateStrength(password) {
    let score = 0;
    let suggestions = [];

    // Conditions for scoring
    if (password.length >= 8) score++;
    else suggestions.push("Use at least 8 characters.");

    if (/[A-Z]/.test(password)) score++;
    else suggestions.push("Add uppercase letters (A–Z).");

    if (/[a-z]/.test(password)) score++;
    else suggestions.push("Add lowercase letters (a–z).");

    if (/[0-9]/.test(password)) score++;
    else suggestions.push("Add numbers (0–9).");

    if (/[^A-Za-z0-9]/.test(password)) score++;
    else suggestions.push("Add special characters (!@#$%).");

    // Update meter
    const strengthPercent = (score / 5) * 100;
    strengthBar.style.width = strengthPercent + "%";

    // Strength color
    if (score <= 1) strengthBar.style.background = "red";
    else if (score === 2) strengthBar.style.background = "orange";
    else if (score === 3) strengthBar.style.background = "yellow";
    else if (score === 4) strengthBar.style.background = "lightgreen";
    else strengthBar.style.background = "green";

    // Strength text
    const strengthLabels = ["Very Weak", "Weak", "Okay", "Good", "Strong", "Very Strong"];
    strengthText.textContent = "Strength: " + strengthLabels[score];

    // Suggestions
    suggestionsList.innerHTML = "";
    suggestions.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        suggestionsList.appendChild(li);
    });
}

// Generate Strong Password Button
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+<>?";
    
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
        newPassword += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordInput.value = newPassword;
    updateStrength(newPassword);
});

