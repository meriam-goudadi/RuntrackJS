$(document).ready(function () {
    // Séquence Konami : ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let konamiIndex = 0;

    // Écouter les événements de touche
    $(document).on("keydown", function (event) {
        // Vérifier si la touche pressée correspond à la séquence Konami
        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex++; // Passer à la prochaine touche de la séquence
            if (konamiIndex === konamiCode.length) {
                // Si la séquence est complète, appliquer le style Konami
                $("body").addClass("konami");
                alert("Code Konami activé !");
                konamiIndex = 0; // Réinitialiser pour une nouvelle tentative
            }
        } else {
            konamiIndex = 0; // Réinitialiser si la séquence est incorrecte
        }
    });
});