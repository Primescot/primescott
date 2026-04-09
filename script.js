// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Coverage Form Simulation
const form = document.getElementById('coverage-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const zip = form.querySelector('input[type="text"]').value;
    
    // Simulate a check
    alert(`Great news! Ketel 5G Ultra is available in ${zip}. One of our agents will email you shortly.`);
    form.reset();
});


