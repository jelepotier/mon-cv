document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        if (nav.style.display === 'block' || nav.style.display === '') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

    window.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && event.target !== menuIcon) {
            nav.style.display = 'none';
        }
    });
});
