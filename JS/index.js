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



//SLIDER SCRIPT

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImage = 1;

let timeOut;

const updateImg = () => {
    if(currentImage > imgsEl.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImage - 2) * 500}px)`;
    timeOut = setTimeout(() => {
        currentImage++;
        updateImg()
    },3000)
}

updateImg();


nextEl.addEventListener("click", () => {
    currentImage++;
    clearTimeout(timeOut);
    updateImg()
});

prevEl.addEventListener("click", () => {
    currentImage--;
    clearTimeout(timeOut);
    updateImg()
})