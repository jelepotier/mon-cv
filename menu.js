document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        // Fermer le menu si on clique en dehors de celui-ci
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            nav.classList.remove('show');
        }
    });
});
