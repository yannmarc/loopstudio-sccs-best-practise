const toogleBtn = document.querySelector('.bar-container');
const mobileNav = document.querySelector('.mobile-nav-container');

toogleBtn.addEventListener('click', (e) => {
    mobileNav.classList.toggle('active');
})