
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});
