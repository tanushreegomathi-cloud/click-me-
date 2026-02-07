const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");

function openValentine() {
  document.getElementById("start").style.display = "none";
  document.getElementById("valentine").classList.remove("hidden");
}

// NO button escapes
function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// YES → heart explosion
function yesClicked() {
  document.getElementById("valentine").innerHTML = `
    <h1>YAYYY ❤️ you're my galentine</h1>
    <h2 style="font-size:2.4rem;">love you achu kuttyy</h2>
  `;

  for (let i = 0; i < 40; i++) {
    explodeHeart();
  }
}

function explodeHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  const x = (Math.random() - 0.5) * 600 + "px";
  const y = (Math.random() - 0.5) * 600 + "px";

  heart.style.setProperty("--x", x);
  heart.style.setProperty("--y", y);

  heart.style.left = "50%";
  heart.style.top = "50%";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 1800);
}
