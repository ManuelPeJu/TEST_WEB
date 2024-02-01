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


const navbarEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }
})


// button

const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", () => {
    window.scroll({
        top: 1050,
        left: 0,
        behavior: "smooth"
    });
})