// Créer le bouton avec l'id "button"
const button = document.createElement("button");
button.id = "button";
button.textContent = "Afficher/Masquer la citation";

// Ajouter le bouton au corps du document
document.body.appendChild(button);

// Définir la fonction showhide
function showhide() {
    // Récupérer l'élément <article> s'il existe
    const article = document.getElementById("dynamicArticle");

    // Si l'article existe, le supprimer
    if (article) {
        document.body.removeChild(article);
    } 
    // Sinon, créer et ajouter l'article
    else {
        const newArticle = document.createElement("article");
        newArticle.id = "dynamicArticle";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}

// Ajouter un écouteur d'événement au bouton
button.addEventListener("click", showhide);