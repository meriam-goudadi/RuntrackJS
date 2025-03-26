/* Partie Backoffice */
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les informations de l'utilisateur connecté depuis localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Vérifier si l'utilisateur est connecté et a le rôle d'admin ou modérateur
    if (currentUser && (currentUser.role === 'admin' || currentUser.role === 'moderator')) {
        // Afficher le contenu du backoffice
        document.getElementById('backofficeContent').style.display = 'block';

        // Simuler des données utilisateur
        const users = [
            { name: 'Meriam', email: 'meriam@laplateforme.io', status: 'Accepté' },
            { name: 'Ines', email: 'ines@laplateforme.io', status: 'En attente' },
            { name: 'Charlie', email: 'charlie@laplateforme.io', status: 'Refusé' }
        ];

        const usersTable = document.getElementById('usersTable');

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.status}</td>
                <td>
                    <button class="btn btn-success">Accepter</button>
                    <button class="btn btn-danger">Refuser</button>
                </td>
            `;
            usersTable.appendChild(row);
        });
    } else {
        // Cacher le contenu du backoffice et afficher un message d'erreur
        document.getElementById('backofficeContent').style.display = 'none';
        document.getElementById('unauthorizedMessage').style.display = 'block';
    }

    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('currentUser'); // Supprimer l'utilisateur connecté
        window.location.href = '../index.html'; // Rediriger vers l'accueil
    });
});