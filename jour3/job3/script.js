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
        "image1.png", "image2.png", "image3.png",
        "image4.png", "image5.png", "image6.png",
        "image7.png", "image8.png", "" // Case vide
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

        // Ajouter des écouteurs d'événements pour les clics
        $container.on("click", ".tile", function () {
            moveTile($(this));
        });
    }

    // Fonction pour mélanger un tableau
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Fonction pour déplacer un carreau
    function moveTile($tile) {
        const tileIndex = $tile.data("index");
        const emptyTile = $container.find(".empty");

        // Vérifier si le carreau est adjacent à la case vide
        if (isAdjacent(tileIndex, emptyTile.data("index"))) {
            // Échanger les positions
            $tile.css("background-image", emptyTile.css("background-image"));
            $tile.removeClass("empty");
            emptyTile.css("background-image", "").addClass("empty");

            // Vérifier si le puzzle est résolu
            checkWin();
        }
    }

    // Fonction pour vérifier si deux cases sont adjacentes
    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / size);
        const col1 = index1 % size;
        const row2 = Math.floor(index2 / size);
        const col2 = index2 % size;

        return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
    }

    // Fonction pour vérifier si le puzzle est résolu
    function checkWin() {
        let isWin = true;
        $container.find(".tile").each(function (index) {
            if ($(this).css("background-image") !== `url(${images[index]})`) {
                isWin = false;
            }
        });

        if (isWin) {
            $message.text("Vous avez gagné !").addClass("win").css("color", "green");
            $restartButton.show(); // Afficher le bouton Recommencer
        }
    }

    // Bouton Recommencer
    $restartButton.on("click", initTaquin);

    // Initialiser le jeu au chargement de la page
    initTaquin();
});