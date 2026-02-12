const canvas= document.getElementById("game-canvas");
const ctx= canvas.getContext("2d");

//nettoyer
ctx.clearRect(0, 0, canvas.width, canvas.height);

//Couleurs
const skin ="#f1c27d";
const skinShadow = "#e0ac69";
const shirt = "#3b82f6";
const shirtShadow = "#2563eb";
const pants = "#1f2936";
const shoes = "#111827";
const eyes = "#000";

// --- TÊTE ---
ctx.fillStyle = skin;
ctx.fillRect(10, 2, 12, 12);

//ombre de la tête
ctx.fillStyle = skinShadow;
ctx.fillRect(10, 12, 12, 12);

// Yeux
ctx.fillStyle = eyes;
ctx.fillRect(13, 7, 2, 2);
ctx.fillRect(17, 7, 2, 2);

// Torse
ctx.fillStyle = shirt;
ctx.fillRect(9, 14, 14, 12);

//ombre du torse
ctx.fillStyle = shirtShadow;
ctx.fillRect(9, 24, 14, 12);

// --- BRAS ---
ctx.fillStyle = skin;
ctx.fillRect(5, 14, 4, 12); //bras gauche
ctx.fillRect(23, 14, 4, 12); //bras droit

// --- JAMBES ---
ctx.fillStyle = pants;
ctx.fillRect(11, 26, 4, 10);
ctx.fillRect(17, 26, 4, 10);

// --- CHAUSSURES ---
ctx.fillStyle = shoes;
ctx.fillRect(10, 36, 6, 4);
ctx.fillRect(16, 36, 6, 4);