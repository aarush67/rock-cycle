const canvas = document.getElementById("rockCanvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const statusText = document.getElementById("statusText");

canvas.width = 800;
canvas.height = 400;

let step = 0;
let animationRunning = false;

function drawBackground() {
    ctx.fillStyle = "#87CEEB"; // Sky
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#8B4513"; // Ground
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

    ctx.fillStyle = "blue"; // River
    ctx.fillRect(100, canvas.height - 80, 600, 20);
}

function drawLava() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(400, 100, 30, 0, Math.PI * 2);
    ctx.fill();
}

function drawIgneousRock() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(400, 200, 30, 0, Math.PI * 2);
    ctx.fill();
}

function drawSediment() {
    ctx.fillStyle = "brown";
    ctx.fillRect(150, canvas.height - 75, 100, 10);
}

function drawSedimentaryRock() {
    ctx.fillStyle = "#D2B48C"; // Tan color
    ctx.fillRect(380, 280, 40, 30);
}

function drawMetamorphicRock() {
    ctx.fillStyle = "gray";
    ctx.fillRect(420, 320, 40, 30);
}

function drawMagma() {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(400, 370, 30, 0, Math.PI * 2);
    ctx.fill();
}

// Function to update the animation step
function updateCycle() {
    if (!animationRunning) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();

    // Hide all labels first
    document.querySelectorAll("#labels p").forEach(label => label.style.display = "none");

    switch (step) {
        case 0:
            drawLava();
            document.getElementById("lavaLabel").style.display = "block";
            break;
        case 1:
            drawIgneousRock();
            document.getElementById("igneousLabel").style.display = "block";
            break;
        case 2:
            drawSediment();
            document.getElementById("weatheringLabel").style.display = "block";
            break;
        case 3:
            drawSedimentaryRock();
            document.getElementById("sedimentLabel").style.display = "block";
            break;
        case 4:
            drawMetamorphicRock();
            document.getElementById("sedimentaryLabel").style.display = "block";
            break;
        case 5:
            drawMagma();
            document.getElementById("metamorphicLabel").style.display = "block";
            break;
        case 6:
            step = -1; // Restart the cycle
            document.getElementById("magmaLabel").style.display = "block";
            break;
    }
    step++;
}

// Function to start animation
function startAnimation() {
    if (!animationRunning) {
        animationRunning = true;
        statusText.innerText = "Animation Playing...";
        setInterval(updateCycle, 3000);
    }
}

// Attach event listener to button
startButton.addEventListener("click", startAnimation);
