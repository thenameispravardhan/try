// Animation and interaction effects
export function initAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(
    '.hero__feature, .about__card, .form'
  );

  animatableElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(el);
  });

  // Add parallax effect to hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  }

  // Add hover effect to buttons
  const buttons = document.querySelectorAll('.hero__button, .form__button');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
      if (!this.disabled) {
        this.style.transform = 'translateY(0)';
      }
    });
  });

  // Add loading animation to page
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });
}
