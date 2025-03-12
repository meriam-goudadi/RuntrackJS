$(document).ready(function () {
    // Dès qu'on clique sur le bouton "Afficher", on affiche le texte
    $("#button").on("click", function () {
        $("#citation").show();
    });

    // Dès qu'on clique sur le bouton "Masquer", on masque le texte
    $("#button0").on("click", function () {
        $("#citation").hide();
    });
});