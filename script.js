const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const projects = document.querySelectorAll('.project');
const experiences = document.querySelectorAll('.experience');
const certificates = document.querySelectorAll('.certificate');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    projects.forEach(project => project.classList.toggle('dark-mode'));
    experiences.forEach(experience => experience.classList.toggle('dark-mode'));
    certificates.forEach(certificate => certificate.classList.toggle('dark-mode'));

    // Toggle icons
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
});

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
