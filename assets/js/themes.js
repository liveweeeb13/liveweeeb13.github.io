const themeSwitch = document.getElementById('theme-checkbox');
const body = document.body;

if (localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

console.log('%cHello, js loaded', 'color: #0099ff; font-size: 30px; font-weight: bold');
