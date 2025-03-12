// Créer le bouton avec l'id "button"
const button = document.createElement("button");
button.id = "button";
button.textContent = "Cliquez-moi";

// Créer le paragraphe avec l'id "compteur" et le texte "0"
const compteur = document.createElement("p");
compteur.id = "compteur";
compteur.textContent = "0";

// Ajouter le bouton et le paragraphe au corps du document
document.body.appendChild(button);
document.body.appendChild(compteur);

// Définir la fonction addOne
function addOne() {
    // Récupérer le contenu du paragraphe et le convertir en nombre
    let valeur = Number(compteur.textContent);
    // Incrémenter la valeur de 1
    valeur += 1;
    // Mettre à jour le texte du paragraphe
    compteur.textContent = valeur;
}

// Ajouter un écouteur d'événement au bouton
button.addEventListener("click", addOne);