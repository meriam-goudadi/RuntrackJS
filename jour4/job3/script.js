document.getElementById("filtrer").addEventListener("click", function () {
    // Récupérer les valeurs du formulaire
    const id = document.getElementById("id").value;
    const nom = document.getElementById("nom").value;
    const type = document.getElementById("type").value;

    // Récupérer les données Pokémon avec Fetch
    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            // Filtrer les Pokémon en fonction des critères
            const filteredPokemon = data.filter(pokemon => {
                return (!id || pokemon.id == id) &&
                       (!nom || pokemon.nom.toLowerCase().includes(nom.toLowerCase())) &&
                       (!type || pokemon.type === type);
            });

            // Afficher les Pokémon filtrés
            const pokemonList = document.getElementById("pokemon-list");
            pokemonList.innerHTML = ""; // Vider la liste

            filteredPokemon.forEach(pokemon => {
                const li = document.createElement("li");
                li.textContent = `${pokemon.nom} (ID: ${pokemon.id}, Type: ${pokemon.type})`;
                pokemonList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Erreur :", error); // Afficher une erreur dans la console
        });
});