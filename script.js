// Calculate 80% of the viewport height for the form
const screenHeight = window.innerHeight;
const formHeight = 0.8 * screenHeight;

// Set the height of the form
const form = document.getElementById('myForm');
form.style.height = `${formHeight}px`;

// Calculate and set the height of the .social section
const socialSection = document.querySelector('.social');
socialSection.style.height = `${screenHeight - formHeight}px`;
