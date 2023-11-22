document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    document.addEventListener('click', function (event) {
        if (event.target === menuIcon) {
            nav.classList.toggle('show');
        } else if (!nav.contains(event.target)) {
            nav.classList.remove('show');
        }
    });
});
