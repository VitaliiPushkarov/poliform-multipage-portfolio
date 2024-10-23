// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
/* Nav */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.navmenu');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
    });
  });

  navOverlay.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});
// Contact Form
document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission

          var email = document.getElementById('email').value;

          // Regular expression for email validation
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailRegex.test(email)) {
              alert("Please enter a valid email address.");
          } else {
              // Redirect to the thank you page
              window.location.href = "thankyou.html";
          }
      });
  }
});