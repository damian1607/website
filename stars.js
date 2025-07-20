const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let width, height, stars;

function init() {
  resizeCanvas();
  stars = [];

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.05,
    });
  }

  animate();
}

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let star of stars) {
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("DOMContentLoaded", init);
