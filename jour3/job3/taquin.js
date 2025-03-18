// JEU DU TAQUIN : 8 carreaux + 1 case vide
// Le but du jeu est de reconstituer l'image en déplaçant les carreaux adjacents à la case vide

$(document).ready(function () {
    const $container = $("#taquin-container");
    const $message = $("#message");
    const $restartButton = $("#restart-button");

    // Taille du plateau (3x3)
    const size = 3;
    let emptyIndex = size * size - 1; // Index de la case vide (dernière case)

    // Tableau des images (8 images + 1 case vide)
    const images = [
        "images/image1.png", "images/image2.png", "images/image3.png",
        "images/image4.png", "images/image5.png", "images/image6.png",
        "images/image7.png", "images/image8.png", "" // Case vide
    ];

    // Fonction pour initialiser le plateau
    function initTaquin() {
        $container.empty(); // Vider le conteneur
        $message.text("").removeClass("win"); // Réinitialiser le message
        $restartButton.hide(); // Cacher le bouton Recommencer

        // Mélanger les images
        const shuffledImages = shuffle([...images]);

        // Créer les carreaux du plateau
        for (let i = 0; i < shuffledImages.length; i++) {
            const $tile = $("<div>").addClass("tile");
            if (shuffledImages[i]) {
                $tile.css("background-image", `url(${shuffledImages[i]})`);
            } else {
                $tile.addClass("empty"); // Case vide
            }
            $tile.attr("data-index", i);
            $container.append($tile);
        }
    }

    // Fonction pour mélanger un tableau
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Initialiser le jeu au chargement de la page
    initTaquin();
});