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

const buttonEl = document.querySelector(".btn_info");

buttonEl.addEventListener("click", () => {
  const aboutEl = document.getElementById("about_us");
    window.scroll({
        top: aboutEl.offsetTop,
        left: 0,
        behavior: "smooth"
    });
})



// SCROLL TO TOP

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const aboutEl = document.getElementById("about_us");
  if (document.body.scrollTop > aboutEl.offsetHeight || document.documentElement.scrollTop > aboutEl.offsetHeight) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


// // FORM

// const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
    
// })