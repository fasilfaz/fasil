const buttons = document.querySelector('.buttons');
const navList = document.querySelector('nav ul');

buttons.addEventListener('click', () => {
    buttons.classList.toggle('active');
    navList.classList.toggle('active');
});