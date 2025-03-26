// Sélectionner le bouton et le conteneur
const button = document.getElementById("button");
const content = document.getElementById("content");

// Ajouter un écouteur d'événement au bouton
button.addEventListener("click", function () {
    // Utiliser Fetch pour récupérer le fichier expression.txt
    fetch("expression.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Le fichier n'a pas pu être chargé.");
            }
            return response.text(); // Récupérer le contenu du fichier
        })
        .then(text => {
            // Créer un paragraphe et y insérer le texte
            const paragraph = document.createElement("p");
            paragraph.textContent = text;
            content.appendChild(paragraph); // Ajouter le paragraphe au conteneur
        })
        .catch(error => {
            console.error("Erreur :", error); // Afficher une erreur dans la console
        });
});