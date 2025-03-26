document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simuler une vérification asynchrone avec Fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
    })
        .then(response => response.json())
        .then(data => {
            // Vérifier les erreurs (simulées)
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

            // Si tout est valide, afficher un message de succès
            if (email && password) {
                alert("Connexion réussie !");
            }
        })
        .catch(error => {
            console.error("Erreur :", error); // Afficher une erreur dans la console
        });
});