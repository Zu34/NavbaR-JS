
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

// Function to toggle the menu
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
};

// Add event listeners for both buttons
hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
