const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});