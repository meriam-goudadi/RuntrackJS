$(document).ready(function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Récupération des formulaires
    const loginForm = $("#loginForm");
    const registerForm = $("#registerForm");

    // Ajouter les écouteurs sur les champs pour la validation asynchrone
    if (loginForm.length) {
        $("#loginEmail").on("input", validateLoginEmail);
        $("#loginPassword").on("input", validateLoginPassword);
    }

    if (registerForm.length) {
        $("#lastName").on("input", validateNotEmpty);
        $("#firstName").on("input", validateNotEmpty);
        $("#registerEmail").on("input", validateRegisterEmail);
        $("#registerPassword").on("input", validateRegisterPassword);
        $("#address").on("input", validateNotEmpty);
        $("#postalCode").on("input", validatePostalCode);
    }

    // --- Fonctions de validation pour chaque champ ---

    function validateLoginEmail() {
        const email = $(this).val();
        const errorElem = $("#loginEmailError");
        if (!emailRegex.test(email)) {
            errorElem.text("Veuillez entrer un email valide.");
        } else {
            errorElem.text("");
        }
    }

    function validateLoginPassword() {
        const password = $(this).val();
        const errorElem = $("#loginPasswordError");
        if (password.length < 8) {
            errorElem.text("Le mot de passe doit contenir au moins 8 caractères.");
        } else {
            errorElem.text("");
        }
    }

    function validateNotEmpty() {
        const value = $(this).val();
        const errorElem = $("#" + $(this).attr("id") + "Error");
        if (value.trim() === "") {
            errorElem.text("Ce champ est requis.");
        } else {
            errorElem.text("");
        }
    }

    function validateRegisterEmail() {
        const email = $(this).val();
        const errorElem = $("#registerEmailError");
        if (!emailRegex.test(email)) {
            errorElem.text("Veuillez entrer un email valide.");
        } else {
            errorElem.text("");
        }
    }

    function validateRegisterPassword() {
        const password = $(this).val();
        const errorElem = $("#registerPasswordError");
        if (password.length < 8) {
            errorElem.text("Le mot de passe doit contenir au moins 8 caractères.");
        } else {
            errorElem.text("");
        }
    }

    function validatePostalCode() {
        const postalCode = $(this).val();
        const errorElem = $("#postalCodeError");
        if (!/^\d{5}$/.test(postalCode)) {
            errorElem.text("Le code postal doit contenir 5 chiffres.");
        } else {
            errorElem.text("");
        }
    }
});