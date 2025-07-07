const message = `On this special day, I hope your heart is filled with joy and your life surrounded by people who love and cherish you.\n

May this new chapter bring you endless laughter, unforgettable moments, and all the sweet things life has to offer—especially cake! 🎂🎈\n

Never forget how amazing you are, how far you’ve come, and how many beautiful things still lie ahead for you.\n

Happy Birthday to someone truly special. May your dreams grow bigger, your worries grow smaller, and your smiles shine even brighter this year.\n

Sincerely,  \n
Muhammad Hargi Muttaqin`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("message").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// Splash click handler
document.getElementById('splash').addEventListener('click', () => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';

  // Mulai musik lokal
  const music = document.getElementById("music");
  music.play().catch((err) => {
    console.log("Autoplay gagal, mungkin karena belum ada interaksi.");
  });

  typeWriter();
  drawConfetti();
});

// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 40 + 10,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r / 2;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.d);
    ctx.stroke();
  });

  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d / 10) + 1 + c.r / 2;
    c.x += Math.sin(c.d / 15);
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}
