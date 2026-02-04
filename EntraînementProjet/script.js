const player = document.getElementById("player");
const gameArea = document.getElementById("game-area");

let playerPos = { x: 275, y: 175 }; // position initiale
const speed = 10; // vitesse en pixels

// --- Gestion des touches appuyées ---
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

document.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
    }
});

// --- Mouvement fluide avec le temps réel ---
let lastTime = 0;

function movePlayer(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime; // temps écoulé depuis la dernière frame en ms
    lastTime = timestamp;

    const distance = (speed * delta) / 16; // ajuste la distance selon le temps

    if (keys.ArrowUp) playerPos.y = Math.max(0, playerPos.y - distance);
    if (keys.ArrowDown) playerPos.y = Math.min(gameArea.clientHeight - 50, playerPos.y + distance);
    if (keys.ArrowLeft) playerPos.x = Math.max(0, playerPos.x - distance);
    if (keys.ArrowRight) playerPos.x = Math.min(gameArea.clientWidth - 50, playerPos.x + distance);

    // Mettre à jour la position du carré
    player.style.top = playerPos.y + "px";
    player.style.left = playerPos.x + "px";

    requestAnimationFrame(movePlayer); // boucle continue pour le mouvement
}

// Lancer la boucle de mouvement
movePlayer();