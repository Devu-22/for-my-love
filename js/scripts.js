// function startSurprise() {
//     const music = document.getElementById("bgMusic");

//     if (music) {
//         music.currentTime = 0;
//         music.volume = 0.8;
//         music.muted = false;

//         music.play().then(() => {
//             console.log("Music started 🎶");
//         }).catch((err) => {
//             console.log("Playback failed:", err);
//         });
//     }

//     const msg = document.getElementById("hiddenMsg");
//     if (msg) msg.style.display = "block";

//     const popup = document.getElementById("popup");
//     if (popup) popup.style.display = "block";

//     if (typeof confetti === "function") {
//         confetti({
//             particleCount: 300,
//             spread: 120,
//         });
//     }
// }

// Floating hearts generator
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);

const text = "You are my favorite person, my happiness, and my forever ❤️";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;


function startSurprise() {
    const music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(() => {});
    }

    document.getElementById("hiddenMsg").style.display = "block";

    // show first popup
    document.getElementById("popup1").style.display = "block";

    confetti({
        particleCount: 300,
        spread: 120,
    });
}

// ➡️ go to popup 2
function nextPopup() {
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "block";
}

// ❤️ final popup
function showFinal() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("finalPopup").style.display = "block";
}

// ❌ close popup
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}
