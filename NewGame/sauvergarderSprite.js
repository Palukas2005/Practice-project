const link = document.createElement("a");
link.download = "sprite.png";
link.href = canvas.toDataURL();
link.textContent = "Télécharger le sprite";
link.style.display = "block";

document.body.appendChild(link);
//Une fois le sprite télécharger tu peux enlever ce code.
