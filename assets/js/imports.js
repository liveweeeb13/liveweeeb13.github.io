const headerHTML = `
<!-- HEADER -->
<header class="main-header">
    <div class="container">
        <div class="logo">
            <a href="/">l<span>i</span>v<span>e</span>w<span>e</span>e<span>e</span>b</a>
        </div>
        <button class="menu-toggle" aria-label="Ouvrir le menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <nav class="main-nav">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/news">Nouveautées</a></li>
                <li><a href="/about">À propos de moi</a></li>

            </ul>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<!-- FOOTER -->
<footer class="main-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>liveweeeb</h3>
                <img src="https://liveweeeb13.github.io/assets/img/avatar_circle.png" style="vertical-align: middle; width: 20%">
            </div>
            <div class="footer-section">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/news">Nouveautées</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <a href="mailto:liveweeeb@proton.me">liveweeeb@proton.me</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 <a href="https://github.com/liveweeeb13">liveweeeb</a>. Tous droits réservés.</p>
        </div>
    </div>
</footer>
`;

function injectHTML(html, position = 'end') {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const element = wrapper.firstElementChild;

    if (position === 'start') {
        document.body.prepend(element);
    } else {
        document.body.append(element);
    }
}

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
    injectHTML(headerHTML, 'start');
    injectHTML(footerHTML, 'end');

    loadScript('/assets/js/menu.js');
    loadScript('/assets/js/hiver_addons.js');
    loadScript('/assets/js/noel_decorations.js');
});
