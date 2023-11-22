document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && nav.classList.contains('show')) {
            nav.classList.remove('show');
        } else if (event.target.tagName === 'A') {
            // Si un lien est cliqué, fermez le menu
            nav.classList.remove('show');
        }
    });
});
