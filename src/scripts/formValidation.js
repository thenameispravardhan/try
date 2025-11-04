// Form validation functionality
export function initFormValidation() {
  const forms = document.querySelectorAll('.form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('.form__input, .form__select');
    const submitButton = form.querySelector('.form__button');

    // Real-time validation
    inputs.forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('form__input--error')) {
          validateField(input);
        }
        // Password strength indicator
        if (input.type === 'password' && input.id === 'password') {
          updatePasswordStrength(input);
        }
      });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      inputs.forEach((input) => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        submitForm(form, submitButton);
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  const fieldGroup = field.closest('.form__group');
  const errorElement = fieldGroup?.querySelector('.form__error');
  const successElement = fieldGroup?.querySelector('.form__success');

  // Clear previous states
  field.classList.remove('form__input--error', 'form__input--success');
  errorElement?.classList.remove('form__error--visible');
  successElement?.classList.remove('form__success--visible');

  // Check if field is required
  if (field.hasAttribute('required') && !value) {
    showError(field, errorElement, 'This field is required');
    return false;
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(field, errorElement, 'Please enter a valid email address');
      return false;
    }
  }

  // Phone validation
  if (field.type === 'tel' && value) {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
      showError(field, errorElement, 'Please enter a valid phone number');
      return false;
    }
  }

  // Password validation
  if (field.type === 'password' && field.id === 'password' && value) {
    if (value.length < 8) {
      showError(field, errorElement, 'Password must be at least 8 characters');
      return false;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      showError(
        field,
        errorElement,
        'Password must contain uppercase, lowercase, and number'
      );
      return false;
    }
  }

  // Confirm password validation
  if (field.id === 'confirmPassword') {
    const passwordField = document.getElementById('password');
    if (passwordField && value !== passwordField.value) {
      showError(field, errorElement, 'Passwords do not match');
      return false;
    }
  }

  // Name validation
  if (field.id === 'name' && value) {
    if (value.length < 2) {
      showError(field, errorElement, 'Name must be at least 2 characters');
      return false;
    }
  }

  // Select validation
  if (field.tagName === 'SELECT' && field.hasAttribute('required')) {
    if (!value || value === '') {
      showError(field, errorElement, 'Please select an option');
      return false;
    }
  }

  // Field is valid
  showSuccess(field, successElement);
  return true;
}

function showError(field, errorElement, message) {
  field.classList.add('form__input--error');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('form__error--visible');
  }
}

function showSuccess(field, successElement) {
  field.classList.add('form__input--success');
  if (successElement) {
    successElement.classList.add('form__success--visible');
  }
}

function updatePasswordStrength(passwordField) {
  const value = passwordField.value;
  const strengthBar = document.querySelector('.password-strength__bar');
  const strengthText = document.querySelector('.password-strength__text');

  if (!strengthBar || !strengthText) return;

  let strength = 0;
  if (value.length >= 8) strength++;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
  if (/\d/.test(value)) strength++;
  if (/[^a-zA-Z0-9]/.test(value)) strength++;

  strengthBar.className = 'password-strength__bar';

  if (strength === 0 || value.length === 0) {
    strengthBar.style.width = '0';
    strengthText.textContent = '';
  } else if (strength <= 2) {
    strengthBar.classList.add('password-strength__bar--weak');
    strengthText.textContent = 'Weak password';
    strengthText.style.color = '#f56565';
  } else if (strength === 3) {
    strengthBar.classList.add('password-strength__bar--medium');
    strengthText.textContent = 'Medium password';
    strengthText.style.color = '#ed8936';
  } else {
    strengthBar.classList.add('password-strength__bar--strong');
    strengthText.textContent = 'Strong password';
    strengthText.style.color = '#48bb78';
  }
}

function submitForm(form, button) {
  // Show loading state
  button.classList.add('form__button--loading');
  button.disabled = true;

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    button.classList.remove('form__button--loading');
    button.disabled = false;

    // Show success message
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data); // eslint-disable-line no-console

    // Show success notification
    showNotification('Form submitted successfully!', 'success');

    // Reset form after successful submission
    form.reset();
    form.querySelectorAll('.form__input').forEach((input) => {
      input.classList.remove('form__input--success', 'form__input--error');
    });
  }, 1500);
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? '#48bb78' : '#f56565'};
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideInRight 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
