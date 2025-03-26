/* Partie Calendrier */
document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Générer les jours du mois
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Ajouter des jours vides pour le début du mois
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day', 'empty');
        calendar.appendChild(emptyDay);
    }

    // Ajouter les jours du mois
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = i;

        // Marquer les jours passés
        if (i < today.getDate() && currentMonth === today.getMonth()) {
            day.classList.add('past');
        }

        // Ajouter un événement de clic pour sélectionner une date
        day.addEventListener('click', function () {
            if (!day.classList.contains('past')) {
                document.querySelectorAll('.day.selected').forEach(selected => {
                    selected.classList.remove('selected');
                });
                day.classList.add('selected');
                alert(`Vous avez sélectionné le ${i}/${currentMonth + 1}/${currentYear}`);
            }
        });

        calendar.appendChild(day);
    }
});