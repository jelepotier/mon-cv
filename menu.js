document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le bouton du menu
    var menuButton = document.querySelector('.menu-icon');

    // Récupérer la navigation
    var nav = document.querySelector('nav');

    // Ajouter un gestionnaire d'événement au clic sur le bouton du menu
    menuButton.addEventListener('click', function() {
        // Toggle la classe 'show' sur la navigation
        nav.classList.toggle('show');
    });

    // Ajouter un gestionnaire d'événement pour fermer le menu lorsqu'un lien est cliqué
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('show');
        });
    });
});

// Fermer le menu lorsque l'utilisateur clique en dehors du menu sur les smartphones
document.addEventListener('click', function(event) {
    var isClickInside = nav.contains(event.target) || menuButton.contains(event.target);
    
    if (!isClickInside && nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
});
