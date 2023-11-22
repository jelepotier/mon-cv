document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');

        // Empêcher le clic de se propager au document
        event.stopPropagation();
    });

    // Fermer le menu si on clique en dehors de celui-ci
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target)) {
            nav.classList.remove('show');
        }
    });
});
