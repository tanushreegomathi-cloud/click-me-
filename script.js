const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");

let rainInterval;

// NO button escapes
function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

function openValentine() {
  document.getElementById("start").style.display = "none";
  document.getElementById("valentine").classList.remove("hidden");
}

// YES clicked
function yesClicked() {
  document.getElementById("valentine").innerHTML = `
    <h1>YAYYY ❤️ you're my galentine</h1>
    <h2 style="font-size:2.4rem;">love you achu kuttyy</h2>
  `;

  // BIGGER explosion
  for (let i = 0; i < 60; i++) {
    explodeHeart();
  }

  // Start heart shower
  rainInterval = setInterval(createRainHeart, 250);
}

// 💥 Explosion hearts
function explodeHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  const x = (Math.random() - 0.5) * 900 + "px";
  const y = (Math.random() - 0.5) * 900 + "px";

  heart.style.setProperty("--x", x);
  heart.style.setProperty("--y", y);

  heart.style.left = "50%";
  heart.style.top = "50%";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 2200);
}

// 🌧️ Heart shower
function createRainHeart() {
  const heart = document.createElement("div");
  heart.classList.add("rain-heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
