const intro = document.querySelector("#intro");
const wish = document.querySelector("#wish");
const openWishButton = document.querySelector("#openWish");
const sparkButton = document.querySelector("#sparkButton");
const typedMessage = document.querySelector("#typedMessage");
const rotatingQuote = document.querySelector("#rotatingQuote");
const music = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicIcon = document.querySelector("#musicIcon");
const canvas = document.querySelector("#confettiCanvas");
const context = canvas.getContext("2d");

const message = `Chúc Huyền Trân có một kỳ thực tập thật tốt nha.
Cứ bình tĩnh, tự tin, học được gì thì học hết mình.
Có gì chưa biết thì hỏi, có gì khó thì từ từ xử lý.
Quan trọng là giữ tinh thần tốt và mỗi ngày tiến bộ hơn một chút.`;

const quotes = [
  "Tự tin lên nha, Huyền Trân!",
  "Mỗi ngày tiến bộ một chút là ổn rồi.",
  "Thực tập là để học, không cần hoàn hảo ngay từ đầu.",
  "Cứ bình tĩnh, làm tới đâu chắc tới đó.",
  "Giữ năng lượng tốt nha.",
  "Huyền Trân làm được mà!"
];

const colors = ["#f27d72", "#ffd36c", "#78c6b3", "#7aa7e8", "#ef9db4"];
let confettiPieces = [];
let quoteIndex = 0;
let typeTimer = null;
let quoteTimer = null;
let triedAutoplay = false;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function typeMessage() {
  clearTimeout(typeTimer);
  typedMessage.textContent = "";

  let index = 0;
  const step = () => {
    typedMessage.textContent = message.slice(0, index);
    index += 1;

    if (index <= message.length) {
      typeTimer = window.setTimeout(step, 12);
    }
  };

  step();
}

function startQuotes() {
  clearInterval(quoteTimer);
  rotatingQuote.textContent = quotes[quoteIndex];

  quoteTimer = window.setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    rotatingQuote.textContent = quotes[quoteIndex];
  }, 3000);
}

function burstConfetti(amount = 72) {
  const originX = window.innerWidth / 2;
  const originY = window.innerHeight * 0.44;

  for (let i = 0; i < amount; i += 1) {
    confettiPieces.push({
      x: originX,
      y: originY,
      size: 5 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: -4 + Math.random() * 8,
      vy: -8 - Math.random() * 5,
      gravity: 0.18 + Math.random() * 0.08,
      rotation: Math.random() * Math.PI,
      spin: -0.2 + Math.random() * 0.4,
      life: 90 + Math.random() * 40
    });
  }
}

function drawConfetti() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  confettiPieces = confettiPieces.filter((piece) => piece.life > 0);

  confettiPieces.forEach((piece) => {
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += piece.gravity;
    piece.rotation += piece.spin;
    piece.life -= 1;

    context.save();
    context.translate(piece.x, piece.y);
    context.rotate(piece.rotation);
    context.fillStyle = piece.color;
    context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.58);
    context.restore();
  });

  requestAnimationFrame(drawConfetti);
}

function addSpark(x, y) {
  const spark = document.createElement("span");
  spark.className = "spark";
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  document.body.appendChild(spark);
  window.setTimeout(() => spark.remove(), 950);
}

function openWish() {
  intro.hidden = true;
  wish.hidden = false;
  wish.scrollIntoView({ block: "start" });
  typeMessage();
  startQuotes();
  burstConfetti();
  startMusic();
}

function setMusicLabel(isPlaying) {
  musicIcon.textContent = isPlaying ? "Tắt nhạc" : "Bật nhạc";
  musicToggle.setAttribute("aria-label", isPlaying ? "Tắt nhạc" : "Bật nhạc");
}

async function startMusic() {
  music.volume = 1;

  try {
    await music.play();
    setMusicLabel(true);
    return true;
  } catch {
    setMusicLabel(false);
    return false;
  }
}

async function toggleMusic() {
  if (music.paused) {
    await startMusic();
    return;
  }

  music.pause();
  setMusicLabel(false);
}

openWishButton.addEventListener("click", openWish);
musicToggle.addEventListener("click", toggleMusic);

sparkButton.addEventListener("click", (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  burstConfetti(36);
  addSpark(rect.left + rect.width / 2, rect.top);
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button")) return;

  if (!triedAutoplay && music.paused) {
    triedAutoplay = true;
    startMusic();
  }

  addSpark(event.clientX, event.clientY);
});

window.addEventListener("resize", resizeCanvas);
window.addEventListener("DOMContentLoaded", () => {
  startMusic().then((played) => {
    triedAutoplay = played;
  });
});

resizeCanvas();
drawConfetti();
setMusicLabel(false);
