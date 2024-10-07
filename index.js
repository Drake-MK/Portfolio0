const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
    

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
    });
});
