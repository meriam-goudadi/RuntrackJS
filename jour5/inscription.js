document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const adresse = document.getElementById("adresse").value;
    const codePostal = document.getElementById("code-postal").value;

    // Simuler une vérification asynchrone avec Fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ nom, prenom, email, password, adresse, codePostal }),
        headers: { "Content-Type": "application/json" },
    })
        .then(response => response.json())
        .then(data => {
            // Vérifier les erreurs (simulées)
            if (nom === "") {
                document.getElementById("nom-error").textContent = "Le nom est requis.";
            } else {
                document.getElementById("nom-error").textContent = "";
            }

            if (prenom === "") {
                document.getElementById("prenom-error").textContent = "Le prénom est requis.";
            } else {
                document.getElementById("prenom-error").textContent = "";
            }

            if (email === "") {
                document.getElementById("email-error").textContent = "L'email est requis.";
            } else {
                document.getElementById("email-error").textContent = "";
            }

            if (password === "") {
                document.getElementById("password-error").textContent = "Le mot de passe est requis.";
            } else {
                document.getElementById("password-error").textContent = "";
            }

            if (adresse === "") {
                document.getElementById("adresse-error").textContent = "L'adresse est requise.";
            } else {
                document.getElementById("adresse-error").textContent = "";
            }

            if (codePostal === "") {
                document.getElementById("code-postal-error").textContent = "Le code postal est requis.";
            } else {
                document.getElementById("code-postal-error").textContent = "";
            }

            // Si tout est valide, afficher un message de succès
            if (nom && prenom && email && password && adresse && codePostal) {
                alert("Inscription réussie !");
            }
        })
        .catch(error => {
            console.error("Erreur :", error); // Afficher une erreur dans la console
        });
});