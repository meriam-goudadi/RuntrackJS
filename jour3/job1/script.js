// Créer le bouton "Afficher/Masquer"
const button = $("<button>")
button.attr("id", "button")
button.text("Afficher/Masquer");

// Créer un paragraphe pour le texte à afficher/masquer
const texte = $("<p>")
texte.attr("id", "citation")
texte.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.")
texte.hide(); // Masquer le texte au départ

// Ajouter le bouton et le texte au corps du document
$("body").append(button, texte);

// Gérer l'affichage et le masquage du texte
$("#button").on("click", function () {
    // Basculer entre afficher et masquer le texte
    $("#citation").toggle();
});