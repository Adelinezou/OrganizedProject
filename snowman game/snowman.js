// Get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the device pixel ratio for high-DPI screens
const dpr = window.devicePixelRatio || 1;
canvas.width = 500 * dpr;  // Set the actual canvas width in pixels
canvas.height = 500 * dpr; // Set the actual canvas height in pixels
ctx.scale(dpr, dpr); // Scale the context to ensure the drawing operations use device pixels

// Function to draw a circle
function drawCircle(x, y, radius, color) {
    ctx.beginPath(); // Start a new path
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Create an arc (circle)
    ctx.fillStyle = color; // Set the fill color
    ctx.fill(); // Fill the circle
}

// Function to draw buttons on the snowman
function drawButtons() {
    drawCircle(250, 400, 5, "#000000"); // Draw bottom button
    drawCircle(250, 350, 5, "#000000"); // Draw middle button
    drawCircle(250, 300, 5, "#000000"); // Draw top button
}

// Function to draw eyes on the snowman
function drawEyes() {
    drawCircle(225, 180, 5, "#000000"); // Draw left eye
    drawCircle(275, 180, 5, "#000000"); // Draw right eye
}

// Function to draw an image on the canvas
function drawImg(img, x, y, width, height) {
    img.onload = function() {
        ctx.drawImage(img, x, y, width, height); // Draw the image on load
    }
    if (img.complete) {
        img.onload(); // If the image is already loaded, draw it immediately
    }
}

// Function to draw arms on the snowman
function drawArms() {
    let arm1 = document.getElementById('arm1'); // Get left arm image
    let arm2 = document.getElementById('arm2'); // Get right arm image
    drawImg(arm1, 15, 200, 175, 100); // Draw left arm
    drawImg(arm2, 310, 200, 175, 100); // Draw right arm
}

// Function to initialize all event listeners for drawing different parts of the snowman
function drawAll() {
    const hatImg = document.getElementById('hatImg'); // Get hat image
    const noseImg = document.getElementById('noseImg'); // Get nose image
    const scarfImg = document.getElementById('scarfImg'); // Get scarf image
    const mouthImg = document.getElementById('mouthImg'); // Get mouth image

    // Add event listeners for each accessory
    document.getElementById('hat').addEventListener('click', () => drawImg(hatImg, 230, 65, 110, 110));
    document.getElementById('nose').addEventListener('click', () => drawImg(noseImg, 200, 155, 110, 90));
    document.getElementById('scarf').addEventListener('click', () => drawImg(scarfImg, 155, 220, 195, 150));
    document.getElementById('mouth').addEventListener('click', () => drawImg(mouthImg, 220, 200, 60, 50));
}

// Function to reset the canvas and draw the initial snowman circles
function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr); // Clear the canvas
    drawCircle(250, 435, 115, "#ffffff"); // Draw bottom circle
    drawCircle(250, 310, 90, "#ffffff"); // Draw middle circle
    drawCircle(250, 200, 70, "#ffffff"); // Draw top circle
}

// Add event listeners for buttons and canvas reset
document.getElementById("buttons").addEventListener("click", drawButtons);
document.getElementById("eyes").addEventListener("click", drawEyes);
document.getElementById("arms").addEventListener("click", drawArms);
document.getElementById("resetButton").addEventListener("click", resetCanvas);

resetCanvas(); // Draw initial snowman circles on load
drawAll(); // Initialize accessory drawing event listeners
