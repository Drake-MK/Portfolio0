document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const body = document.querySelector('body'); // Select the body to change its background

    // Set opacity to 1 to make all visible initially
    skills.forEach(skill => {
        skill.style.opacity = '1'; // Set opacity to 1 to make all visible
        skill.style.transform = 'translateY(0)'; // Reset translate to normal position

        // Add hover event to change the background image and page background color
        skill.addEventListener('mouseover', function () {
            const bgImage = this.getAttribute('data-bg'); // Get the background image from data-bg
            this.style.backgroundImage = `url(${bgImage})`; // Set the background image for the skill card
            this.style.backgroundSize = 'cover'; // Ensure the image covers the button
            this.style.backgroundPosition = 'center'; // Center the background image

            // Change the body background to black with a subtle transition
            body.style.backgroundColor = '#000'; // Set body background color to black on hover
            body.style.transition = 'background-color 0.5s ease'; // Smooth transition for the background color
        });

        // Remove background image and reset page background on mouse out
        skill.addEventListener('mouseout', function () {
            this.style.backgroundImage = ''; // Remove the background image from the skill card
            body.style.backgroundColor = '#121212'; // Reset the body background color back to the dark theme
        });
    });
});
