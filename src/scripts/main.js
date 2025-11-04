// Main JavaScript entry point
import { initNavigation } from './navigation.js';
import { initFormValidation } from './formValidation.js';
import { initAnimations } from './animations.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFormValidation();
  initAnimations();
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Add active class to current page nav link
const currentPath = window.location.pathname;
document.querySelectorAll('.navbar__link').forEach((link) => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
