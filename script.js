document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    const errors = [];

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name) {
      errors.push('Name is required.');
    }

    if (!email) {
      errors.push('Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Valid email is required.');
    }

    if (!subject) {
      errors.push('Subject is required.');
    }

    if (!message) {
      errors.push('Message is required.');
    }

    const formError = document.getElementById('formError');

    if (errors.length > 0) {
      e.preventDefault();
      formError.innerHTML = errors.join('<br>');
    } else {
      formError.textContent = '';
    }
  });
});
