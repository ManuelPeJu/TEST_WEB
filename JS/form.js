// // FORM

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate the form
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const allFieldsFilled = Object.values(data).every(value => value.trim() !== '');
    console.log(data)
    
    if (!allFieldsFilled) {
        // if any field is empty show an error 
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please complete all fields.',
        });
        return;
    }
    
    // if all fields are filled show a success message
    let timerInterval;
    Swal.fire({
        title: "Thank you for your message, we will get back to you shortly!",
        timer: 2500,
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(() => {
        form.reset();
    });
});



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