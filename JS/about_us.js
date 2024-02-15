document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        console.log("hola amejo")
  
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
  