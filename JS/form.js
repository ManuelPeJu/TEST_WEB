// // FORM

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    window.alert("Thank you for your message, we will get back to you shortly")
    
})