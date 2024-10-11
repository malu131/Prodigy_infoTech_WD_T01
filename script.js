// Get the navigation bar element
const navbar = document.getElementById('navbar');

// Add an event listener for scrolling
window.addEventListener('scroll', function() {
    // Add or remove the "scrolled" class based on scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
