const textarea = document.createElement("textarea");
textarea.id = "keylogger";
textarea.placeholder = "Tapez ici...";

// Ajouter le <textarea> au corps du document
document.body.appendChild(textarea);

// Définir la fonction pour gérer les événements clavier
function handleKeyPress(event) {
    // Vérifier si la touche pressée est une lettre (a-z)
    if (/^[a-z]$/.test(event.key)) {
        // Si le focus est dans le textarea, ajouter la lettre deux fois
        if (document.activeElement === textarea) {
            textarea.value += event.key + event.key;
        } 
        // Sinon, ajouter la lettre une seule fois
        else {
            textarea.value += event.key;
        }
    }
}

// Ajouter un écouteur d'événement pour les touches pressées
document.addEventListener("keydown", handleKeyPress);