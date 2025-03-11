function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b); // Tri ascendant/croissant
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a); // Tri descendant/décroissant
    } else {
        return numbers; // Retourne le tableau non trié si l'ordre n'est pas reconnu
    }
}

// Exemples d'utilisation
console.log(tri([3, 1, 4, 2], "asc"));  // [1, 2, 3, 4]
console.log(tri([3, 1, 4, 2], "desc")); // [4, 3, 2, 1]
console.log(tri([3, 1, 4, 2], "other")); // [3, 1, 4, 2] (ordre non reconnu)

/* Autre façon de faire l'exercice :

    function tri(numbers) {
    let order = numbers.sort((a, b) => a - b);
    return order;
}
console.log(tri([5, 8, 2, 1, 9, 3])); */