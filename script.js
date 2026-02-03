
let current = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  slides[current].classList.remove("active");
  current++;
  slides[current].classList.add("active");
}

const canvas = document.getElementById("cakeCanvas");
const ctx = canvas.getContext("2d");

let flames = [
  { x: 140, y: 120, on: true },
  { x: 180, y: 120, on: true },
  { x: 220, y: 120, on: true }
];

let angle = 0;

function drawCake() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = "#ffb5c2";
  ctx.fillRect(90, 200, 180, 60);

  ctx.fillStyle = "#ff8fab";
  ctx.fillRect(110, 170, 140, 30);

  ctx.fillStyle = "#ffcad4";
  ctx.fillRect(130, 145, 100, 25);


  flames.forEach(f => {
    ctx.fillStyle = "#fff3b0";
    ctx.fillRect(f.x, 145, 10, 40);

    if (f.on) {
      ctx.beginPath();
      ctx.fillStyle = "#ff9f1c";
      ctx.ellipse(
        f.x + 5,
        f.y + Math.sin(angle) * 4,
        7, 13,
        0, 0, Math.PI * 2
      );
      ctx.fill();
    }
  });

  angle += 0.1;
  requestAnimationFrame(drawCake);
}

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  flames.forEach(f => {
    if (f.on && x > f.x && x < f.x + 10 && y > 100 && y < 170) {
      f.on = false;
    }
  });

  if (flames.every(f => !f.on)) {
    setTimeout(() => {
      alert("🎉 All candles blown! Happy Birthday ✨");
    }, 300);
  }
});

drawCake();


const loveText = document.getElementById("loveText");
const noBtn = document.getElementById("noBtn");


function sayNo() {
  loveText.innerHTML = "Hawww 🥺 don't you love me ? 💔";
}


function sayYes() {
  loveText.innerHTML = "Yayyy 😋 I knew it! 💖✨";
  noBtn.style.display = "none";
}


noBtn.style.position = "relative";

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth / 2;
  const maxY = window.innerHeight / 2;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transition = "transform 0.15s ease";
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
