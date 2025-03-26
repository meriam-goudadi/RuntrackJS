/* Partie inscription */
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simuler une inscription
    if (email.endsWith('@laplateforme.io')) {
        alert('Inscription réussie!');
        window.location.href = 'login.html';
    } else {
        alert('Seuls les membres de La Plateforme_ peuvent s\'inscrire.');
    }
});