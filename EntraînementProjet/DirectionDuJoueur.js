// --- Variables du joueur ---
const player = document.getElementById("player");
const gameArea = document.getElementById("game-area");

const PLAYER_SIZE = 75;           // largeur et hauteur du joueur
const HITBOX_OFFSET_TOP = 50;     // partie haute ignorée pour collision
const HITBOX_HEIGHT = PLAYER_SIZE - HITBOX_OFFSET_TOP; // hauteur de collision basse

let playerPos = { x: 275, y: 175 }; 
const speed = 10; // vitesse en pixels

// --- Gestion des touches appuyées ---
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

document.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

// --- Boucle de mouvement fluide ---
let lastTime = 0;

function movePlayer(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    const distance = (speed * delta) / 16;

    // --- Calculer les positions proposées
    let nextX = playerPos.x;
    let nextY = playerPos.y;

    if (keys.ArrowUp) nextY -= distance;
    if (keys.ArrowDown) nextY += distance;
    if (keys.ArrowLeft) nextX -= distance;
    if (keys.ArrowRight) nextX += distance;

    // --- Collision horizontale (gauche / droite)
    if (nextX >= 0 && nextX <= gameArea.clientWidth - PLAYER_SIZE) {
        playerPos.x = nextX;
    }

    // --- Collision verticale (bas uniquement, haut libre)
    if (nextY + HITBOX_BOTTOM <= gameArea.clientHeight) {
        playerPos.y = nextY;
    } else {
        playerPos.y = gameArea.clientHeight - HITBOX_HEIGHT;
    }

    // --- Mettre à jour le div du joueur
    player.style.left = playerPos.x + "px";
    player.style.top = playerPos.y + "px";

    requestAnimationFrame(movePlayer);
}

// --- Lancer la boucle de mouvement ---
movePlayer();
