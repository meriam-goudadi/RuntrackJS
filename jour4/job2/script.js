// Fonction jsonValueKey
function jsonValueKey(jsonString, key) {
    // Convertir la chaîne JSON en objet JavaScript
    const jsonObject = JSON.parse(jsonString);
    // Retourner la valeur associée à la clé
    return jsonObject[key];
}

// Exemple d'utilisation avec Fetch pour simuler une récupération asynchrone
fetch("data.json") // Récupérer un fichier JSON (simulé)
    .then(response => response.json()) // Convertir la réponse en objet JavaScript
    .then(data => {
        // Convertir l'objet JavaScript en chaîne JSON pour l'exemple
        const jsonString = JSON.stringify(data);
        
        // Appeler la fonction jsonValueKey avec la clé "city"
        const value = jsonValueKey(jsonString, "city");
        
        // Afficher le résultat dans le conteneur
        document.getElementById("result").textContent = `Valeur pour la clé "city" : ${value}`;
    })
    .catch(error => {
        console.error("Erreur :", error); // Afficher une erreur dans la console
    });