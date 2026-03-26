function startSurprise() {
    const msg = document.getElementById("hiddenMsg");
    msg.style.display = "block";

    confetti({
        particleCount: 200,
        spread: 80,
    });

    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { x: 0.2 }
        });

        confetti({
            particleCount: 150,
            spread: 120,
            origin: { x: 0.8 }
        });
    }, 400);
}