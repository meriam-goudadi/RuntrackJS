// Ajouter un style minimal au body pour qu'il ait une hauteur de 4096px
document.body.style.minHeight = "4096px";

// Créer un <footer> avec un style de base
const footer = document.createElement("footer");
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.left = "0";
footer.style.width = "100%";
footer.style.height = "20px"; // Hauteur du footer
footer.style.backgroundColor = "red"; // Couleur de départ

// Ajouter le <footer> au corps du document
document.body.appendChild(footer);

// Définir la fonction pour mettre à jour la couleur du footer
function updateFooterColor() {
    // Calculer le pourcentage de défilement
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Changer la couleur du footer en fonction du pourcentage de défilement
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
}

// Ajouter un écouteur d'événement pour le défilement
window.addEventListener("scroll", updateFooterColor);