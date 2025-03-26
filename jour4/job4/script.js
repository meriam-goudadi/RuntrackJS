document.getElementById("update").addEventListener("click", function () {
    // Récupérer les données utilisateurs avec Fetch
    fetch("utilisateur.json")
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector("#user-table tbody");
            tbody.innerHTML = ""; // Vider le tableau

            // Ajouter chaque utilisateur dans le tableau
            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Erreur :", error); // Afficher une erreur dans la console
        });
});