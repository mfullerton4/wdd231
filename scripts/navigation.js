// Store the selected elements that we are going to use.
const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar')

// Toggle the show class on and off
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
});