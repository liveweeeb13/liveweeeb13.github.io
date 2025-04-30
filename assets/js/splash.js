const splashHTML = `
    <div id="splash-screen">
        <div class="splash-content">
            <img src="/assets/img/avatar_circle.png" alt="loading assets" class="splash-logo">
            <h1>Chargement...</h1>
        </div>
    </div>
`;

const temp = document.createElement('div');
temp.innerHTML = splashHTML;
document.body.prepend(temp.firstElementChild);

window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');

    if (splash) {
        setTimeout(() => {
            splash.classList.add('hidden');
        }, 300);

        setTimeout(() => {
            splash.remove();
        }, 1000);
    }
});
