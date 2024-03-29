document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
  
        accordionItems.forEach(item => {
          item.classList.remove('active');
          item.querySelector('.accordion-content').style.display = 'none';
        });
  
        if (!isOpen) {
          item.classList.add('active');
          item.querySelector('.accordion-content').style.display = 'block';
        }
      });
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