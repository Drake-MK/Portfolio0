document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const body = document.querySelector('body'); // Select the body to change its background

    window.onload = function() {
        document.querySelector('.skills').classList.add('loaded');
    };

    skills.forEach(skill => {
        skill.style.opacity = '1'; // Set opacity to 1 to make all visible
        skill.style.transform = 'translateY(0)'; // Reset translate to normal position

        // Add hover event to change the button background image and body background
        skill.addEventListener('mouseover', function () {
            const bgImage = this.getAttribute('data-bg'); // Get the background image from data-bg
            
            // You can add any background transition for the skill here if needed
        });
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get all skill elements
    const skills = document.querySelectorAll('.skill');

    // Iterate over each skill and assign the background image
    skills.forEach(skill => {
        const bgImage = skill.getAttribute('data-bg'); // Get the data-bg value
        skill.style.backgroundImage = `url(${bgImage})`; // Set as background
        skill.style.backgroundSize = 'cover'; // Make sure image covers the entire element
        skill.style.backgroundPosition = 'center'; // Center the background
    });
});

        // Reset background image on mouse out
        skill.addEventListener('mouseout', function () {
            // Optionally reset to a default image here if you want
        });
    });
});
