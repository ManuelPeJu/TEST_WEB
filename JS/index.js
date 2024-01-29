//NAVBAR SCRIPT
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const menu = document.getElementById('menu');

    mobileMenuToggle.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});
