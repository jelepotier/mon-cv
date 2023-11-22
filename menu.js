document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        console.log('Menu icon clicked');
        nav.classList.toggle('show');
        console.log('Is menu now open?', nav.classList.contains('show'));
    });

    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && nav.classList.contains('show')) {
            console.log('Document clicked; hiding menu');
            nav.classList.remove('show');
        }
    });

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            console.log('Link clicked; hiding menu');
            nav.classList.remove('show');
        });
    });
});
