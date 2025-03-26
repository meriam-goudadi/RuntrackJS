/* Partie Login */
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simuler une vérification d'email et de mot de passe
    const users = [
        { email: 'meriam@laplateforme.io', password: 'password', role: 'admin' },
        { email: 'ines@laplateforme.io', password: 'password', role: 'moderator' },
        { email: 'teta@laplateforme.io', password: 'password', role: 'user' }
    ];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Stocker l'utilisateur connecté dans localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Rediriger en fonction du rôle
        if (user.role === 'admin' || user.role === 'moderator') {
            window.location.href = 'backoffice.html';
        } else {
            window.location.href = 'calendar.html';
        }
    } else {
        alert('Email ou mot de passe incorrect');
    }
});