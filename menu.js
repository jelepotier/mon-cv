document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    console.log(menuIcon); // Vérifie si l'élément est correctement sélectionné

    menuIcon.addEventListener('click', function () {
        console.log('Menu icon clicked'); // Vérifie si l'événement de clic est détecté
        nav.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });
});
