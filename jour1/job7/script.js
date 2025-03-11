// Définir la fonction jourTravaille qui prend une date en paramètre
function jourTravaille(date) {
    // Liste des jours fériés en 2024
    const joursFeries = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-30", // Ascension
        "2024-06-10", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice 1918
        "2024-12-25"  // Noël
    ];

    // Formater la date en YYYY-MM-DD pour la comparer avec les jours fériés
    const dateFormatee = date.toISOString().split('T')[0];

    // Vérifier si la date est un jour férié
    if (joursFeries.includes(dateFormatee)) {
        console.log(`Le ${date.toLocaleDateString()} est un jour férié`);
    } 
    // Vérifier si la date est un samedi ou un dimanche
    else if (date.getDay() === 6 || date.getDay() === 0) {
        console.log(`Non, ${date.toLocaleDateString()} est un week-end`);
    } 
    // Sinon, c'est un jour travaillé
    else {
        console.log(`Oui, ${date.toLocaleDateString()} est un jour travaillé`);
    }
}

// Exemples d'utilisation de la fonction
jourTravaille(new Date("2024-01-01")); // Nouvel An
jourTravaille(new Date("2024-06-09")); // Dimanche
jourTravaille(new Date("2024-06-10")); // Lundi de Pentecôte
jourTravaille(new Date("2024-06-11")); // Jour travaillé

/* Explications :
- Fonction jourTravaille :
Cette fonction prend un paramètre date qui est un objet Date JavaScript.
Elle vérifie si cette date correspond à un jour férié, un week-end, ou un jour travaillé.

- Liste des jours fériés :
joursFeries est un tableau qui contient les dates des jours fériés en 2024 au format YYYY-MM-DD.

- Formatage de la date :
date.toISOString().split('T')[0] convertit la date en une chaîne de caractères au format YYYY-MM-DD pour pouvoir la comparer avec les dates dans joursFeries.

- Vérification des jours fériés :
joursFeries.includes(dateFormatee) vérifie si la date formatée est dans la liste des jours fériés.

- Vérification du week-end :
date.getDay() retourne le jour de la semaine (0 pour dimanche, 6 pour samedi). On vérifie si c'est un samedi ou un dimanche.

- Affichage du résultat :
Selon la vérification, la fonction affiche un message approprié dans la console.

 - Exemples d'utilisation :
jourTravaille(new Date("2024-01-01")) affichera "Le 1/1/2024 est un jour férié".
jourTravaille(new Date("2024-06-09")) affichera "Non, 9/6/2024 est un week-end".
jourTravaille(new Date("2024-06-11")) affichera "Oui, 11/6/2024 est un jour travaillé". */