// Définir la fonction sommeNombresPremiers qui prend deux paramètres
function sommeNombresPremiers(nombre1, nombre2) {
    // Fonction pour vérifier si un nombre est premier
    function estNombrePremier(nombre) {
        if (nombre < 2) return false; // Les nombres inférieurs à 2 ne sont pas premiers
        for (let i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) return false; // Si divisible par un autre nombre, ce n'est pas premier
        }
        return true; // Sinon, c'est un nombre premier
    }

    // Vérifier si les deux nombres sont premiers
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2; // Retourner la somme des deux nombres premiers
    } else {
        return false; // Retourner false si l'un des deux nombres n'est pas premier
    }
}

// Exemples d'utilisation de la fonction
console.log(sommeNombresPremiers(3, 5)); // 8 (3 et 5 sont premiers)
console.log(sommeNombresPremiers(4, 10)); // false (4 n'est pas premier)
console.log(sommeNombresPremiers(11, 13)); // 24 (11 et 13 sont premiers)
console.log(sommeNombresPremiers(8, 9)); // false (8 et 9 ne sont pas premiers)