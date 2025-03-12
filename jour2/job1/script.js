// Créer l'élément <article> avec l'id "citation"
const article = document.createElement("article");
article.id = "citation";
article.textContent = "La vie a beaucoup plus d'imagination que nous.";

// Créer le bouton avec l'id "button"
const button = document.createElement("button");
button.id = "button";
button.textContent = "Afficher la citation";

// Ajouter les éléments au corps du document
document.body.appendChild(article);
document.body.appendChild(button);

// Définir la fonction citation
function citation() {
    // Récupérer le contenu de l'élément avec l'id "citation"
    const citationText = document.getElementById("citation").textContent;
    // Afficher le contenu dans la console
    console.log(citationText);
}

// Ajouter un écouteur d'événement au bouton
document.getElementById("button").addEventListener("click", citation);