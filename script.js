// Smooth scrolling with active link highlighting
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Scroll smoothly to the target element
      const targetElement = document.querySelector(this.getAttribute('href'));
      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Aligns the top of the target element with the top of the viewport
      });
      
      // Highlight the active link
      document.querySelectorAll('nav ul li a').forEach(link => {
          link.classList.remove('active'); // Remove active class from all links
      });
      this.classList.add('active'); // Add active class to the clicked link
  });
});

// Active link highlighting on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY + 50; // Offset to account for the nav height

  sections.forEach(section => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          const id = section.getAttribute('id');
          document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
      } else {
          const id = section.getAttribute('id');
          document.querySelector(`nav ul li a[href="#${id}"]`).classList.remove('active');
      }
  });
});