document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav');
    });
});
