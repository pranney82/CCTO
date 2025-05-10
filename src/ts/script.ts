/**
 * Mobile menu element interfaces
 */
interface MobileMenuElements {
  menuOpen: HTMLElement | null;
  menuClose: HTMLElement | null;
  mobileMenu: HTMLElement | null;
}

/**
 * Testimonial elements interfaces
 */
interface TestimonialElements {
  dots: NodeListOf<HTMLButtonElement>;
  testimonials: NodeListOf<HTMLElement>;
}

/**
 * Main functionality for ContractorCTO landing page
 */
document.addEventListener('DOMContentLoaded', (): void => {
  // Mobile menu functionality
  const menuElements: MobileMenuElements = {
    menuOpen: document.getElementById('menuOpen'),
    menuClose: document.getElementById('menuClose'),
    mobileMenu: document.getElementById('mobileMenu')
  };
  
  initializeMobileMenu(menuElements);
  initializeTestimonialSlider();
  initializeContactForm();
});

/**
 * Initialize mobile menu functionality
 * @param elements - The mobile menu elements
 */
function initializeMobileMenu(elements: MobileMenuElements): void {
  const { menuOpen, menuClose, mobileMenu } = elements;
  
  if (menuOpen && menuClose && mobileMenu) {
    menuOpen.addEventListener('click', (): void => {
      mobileMenu.classList.remove('hidden');
    });
    
    menuClose.addEventListener('click', (): void => {
      mobileMenu.classList.add('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks: NodeListOf<HTMLAnchorElement> = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link: HTMLAnchorElement): void => {
      link.addEventListener('click', (): void => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/**
 * Initialize testimonial slider functionality
 */
function initializeTestimonialSlider(): void {
  const testimonialElements: TestimonialElements = {
    dots: document.querySelectorAll<HTMLButtonElement>('.testimonial-slider + .flex button'),
    testimonials: document.querySelectorAll<HTMLElement>('.testimonial-slider > div')
  };
  
  const { dots, testimonials } = testimonialElements;
  
  if (dots.length && testimonials.length) {
    // Show first testimonial, hide others
    testimonials.forEach((testimonial: HTMLElement, index: number): void => {
      if (index === 0) {
        testimonial.classList.remove('hidden');
      } else {
        testimonial.classList.add('hidden');
      }
    });
    
    // Add click event to dots
    dots.forEach((dot: HTMLButtonElement, index: number): void => {
      dot.addEventListener('click', (): void => {
        // Update active dot
        dots.forEach((d: HTMLButtonElement): void => {
          d.classList.remove('bg-primary');
          d.classList.add('bg-gray-300');
        });
        
        dot.classList.remove('bg-gray-300');
        dot.classList.add('bg-primary');
        
        // Show corresponding testimonial
        testimonials.forEach((testimonial: HTMLElement, i: number): void => {
          if (i === index) {
            testimonial.classList.remove('hidden');
          } else {
            testimonial.classList.add('hidden');
          }
        });
      });
    });
  }
}

/**
 * Initialize contact form submission handling
 */
function initializeContactForm(): void {
  const contactForm: HTMLFormElement | null = document.getElementById('contactForm') as HTMLFormElement;
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e: SubmitEvent): void => {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server
      // For now, we'll just show an alert
      alert('Thanks for your message! We\'ll get back to you soon.');
      contactForm.reset();
    });
  }
}