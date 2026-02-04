const canvas = document.getElementById("canvasSprite");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);

// Tête du sprite
ctx.fillStyle = "#f2c9ac";
ctx.fillRect(16, 2, 18, 16);

//Yeux du srpite
ctx.fillStyle = "#000";
ctx.fillRect(20, 7, 3, 3); //oeil gauche
ctx.fillRect(27, 7, 3, 3);//oeil droit

// Torse du sprite
ctx.fillStyle = "#3b82f6";
ctx.fillRect(18, 18, 14, 14);

// Bras du sprite
ctx.fillStyle = "red";
ctx.fillRect(12, 18, 6, 14); //bras gauche
ctx.fillRect(32, 18, 6, 14); //bras droit

// Jambes du sprite
ctx.fillStyle = "#1f2936";
ctx.fillRect(18, 32, 6, 12); // jambe gauche
ctx.fillRect(26, 32, 6, 12); // jambe droite

// Créer le lien pour télécharger le sprite
const dataURL = canvas.toDataURL("image/png"); //  Méthode correcte
const link = document.createElement("a");
link.download = "monPremierSprite_humanoïde.png";
link.href = dataURL;
link.textContent = "Télécharger le sprite";

// Rendre le lien visible
link.style.display = "block";
link.style.marginTop = "10px";
link.style.color = "white";
link.style.fontSize = "16px";
link.style.textDecoration = "underline";

document.body.appendChild(link);
