// menu.js
document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var navList = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        // Basculez la visibilité des éléments du menu
        if (navList.style.display === "block") {
            navList.style.display = "none";
        } else {
            navList.style.display = "block";
        }
    });
});
