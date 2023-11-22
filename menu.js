document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });

    // Ajoutez cette partie pour gérer la fermeture du menu lorsque vous cliquez sur un lien
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
        });
    });
});
