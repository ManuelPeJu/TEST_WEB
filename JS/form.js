// // FORM

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    let timerInterval;
    Swal.fire({
    title: "Thank you for your message, we will get back to you shortly!",
    timer: 2500,
    willClose: () => {
        clearInterval(timerInterval);
    }}).then(() => {
        form.reset();
    })
    
});
