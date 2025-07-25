const canvas = document.getElementById("codeRain");
const ctx = canvas.getContext("2d");

// Fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Arabic + English characters
const chars = "01أبجد1234567890DEFغفقكلمن!@#$%^&*(){}[]<>/*+-";

// split to individual characters
const matrix = chars.split("");

// font size
const fontSize = 16;
const columns = canvas.width / fontSize;

// create drops for each column
const drops = Array(Math.floor(columns)).fill(1);

// draw the characters
function draw() {
  // dark background with transparency
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0d4f67ff"; // text color
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // reset to top randomly
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// animate
setInterval(draw, 33);

// update canvas size on resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
