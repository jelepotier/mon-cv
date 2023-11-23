document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var nav = document.querySelector("nav");

    menuIcon.addEventListener("click", function () {
        // Basculez la classe 'show' sur l'élément nav pour afficher/cacher le menu
        nav.classList.toggle('show');
    });

    // Vous n'avez plus besoin de gérer l'affichage du menu ici
    // car cela sera géré par les styles CSS basés sur la classe 'show'
});
