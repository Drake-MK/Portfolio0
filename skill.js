// Select all skill divs
const skills = document.querySelectorAll('.skill');
const container = document.querySelector('.container');

// Add hover event to each skill
skills.forEach(skill => {
    skill.addEventListener('mouseover', function() {
        const bgImage = this.getAttribute('data-bg');
        container.style.backgroundImage = `url(${bgImage})`;
    });

    skill.addEventListener('mouseout', function() {
        container.style.backgroundImage = '';  // Remove background on mouse out
    });
});
