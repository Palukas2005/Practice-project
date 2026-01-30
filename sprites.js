const canvas = document.getElementById("canvasSprite");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);

// Tête du sprite
ctx.fillStyle = "blue";
ctx.fillRect(15, 0, 20, 20);

// Corps du sprite
ctx.fillStyle = "red";
ctx.fillRect(15, 20, 20, 20);

// Jambes du sprite
ctx.fillStyle = "blue";
ctx.fillRect(10, 40, 8, 10); // jambe gauche
ctx.fillRect(32, 40, 8, 10); // jambe droite

// Créer le lien pour télécharger le sprite
const dataURL = canvas.toDataURL("image/png"); // ✅ Méthode correcte
const link = document.createElement("a");
link.download = "monPremierSprite.png";
link.href = dataURL;
link.textContent = "Télécharger le sprite";

// Rendre le lien visible
link.style.display = "block";
link.style.marginTop = "10px";
link.style.color = "white";
link.style.fontSize = "16px";
link.style.textDecoration = "underline";

document.body.appendChild(link);
