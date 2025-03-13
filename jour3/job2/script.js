$(document).ready(function () {
    const $container = $("#image-container");
    const $message = $("#message");
    const images = $container.children("img").toArray(); // Convertir les images en tableau

    // Fonction pour mélanger les images
    function shuffleImages() {
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            $container.append(images[j]); // Déplacer les images aléatoirement
        }
        $message.text("").removeClass("win lose"); // Réinitialiser le message
    }

    // Fonction pour vérifier l'ordre des images
    function checkOrder() {
        const ordered = images.every((img, index) => $(img).data("order") === index + 1);
        if (ordered) {
            $message.text("Vous avez gagné !").addClass("win").css("color", "green");
        } else {
            $message.text("Vous avez perdu").addClass("lose").css("color", "red");
        }
    }

    // Mélanger les images au clic sur le bouton
    $("#shuffle-button").on("click", shuffleImages);

    // Vérifier l'ordre des images au clic sur une image
    $container.on("click", "img", function () {
        $(this).detach().appendTo($container); // Déplacer l'image cliquée à la fin
        checkOrder(); // Vérifier l'ordre après chaque déplacement
    });

    // Mélanger les images au chargement de la page
    shuffleImages();
});