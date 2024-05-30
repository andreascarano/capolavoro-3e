document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const body = document.body;

    navToggle.addEventListener('click', function() {
        const isMenuVisible = navMenu.classList.toggle('show');
        body.classList.toggle('menu-active', isMenuVisible);
        navToggle.classList.toggle('active', isMenuVisible); // Aggiungi/rimuovi la classe 'active'
        console.log('Menu visibility:', isMenuVisible);
    });
});
