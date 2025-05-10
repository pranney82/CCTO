document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuOpen && menuClose && mobileMenu) {
    menuOpen.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
    
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
  
  // Testimonial slider functionality
  const testimonialDots = document.querySelectorAll('.testimonial-slider + .flex button');
  const testimonials = document.querySelectorAll('.testimonial-slider > div');
  
  if (testimonialDots.length && testimonials.length) {
    // Show first testimonial, hide others
    testimonials.forEach((testimonial, index) => {
      if (index === 0) {
        testimonial.classList.remove('hidden');
      } else {
        testimonial.classList.add('hidden');
      }
    });
    
    // Add click event to dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Update active dot
        testimonialDots.forEach(d => {
          d.classList.remove('bg-primary');
          d.classList.add('bg-gray-300');
        });
        dot.classList.remove('bg-gray-300');
        dot.classList.add('bg-primary');
        
        // Show corresponding testimonial
        testimonials.forEach((testimonial, i) => {
          if (i === index) {
            testimonial.classList.remove('hidden');
          } else {
            testimonial.classList.add('hidden');
          }
        });
      });
    });
  }
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server
      // For now, we'll just show an alert
      alert('Thanks for your message! We\'ll get back to you soon.');
      contactForm.reset();
    });
  }
});