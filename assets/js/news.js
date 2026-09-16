/*
 * 🔄 fetchNews()
 * Récupère et affiche les 10 derniers commits GitHub
 */

async function fetchNews() {
    const container = document.getElementById('news-list');

    if (!container) {
        console.error('Element #news-list not found!');
        return;
    }

    try {
        const response = await fetch('https://api.github.com/repos/liveweeeb13/liveweeeb13.github.io/commits');
        const commits = await response.json();
        if (!Array.isArray(commits)) {
            container.innerHTML = `
                <p>Une erreur est survenue. Ce n'est pas normal 😕.
                <a href="https://github.com/liveweeeb13/liveweeeb13.github.io/issues" target="_blank" rel="noopener">
                Signale le problème sur GitHub</a>.</p>`;
            return;
        }

        const html = commits.slice(0, 10).map(commit => `
            <div class="commit">
                <p><strong>${commit.commit?.author?.name || 'N/A'}</strong> :
                ${new Date(commit.commit?.author?.date).toLocaleString('fr-FR')}</p>
                <p>${commit.commit?.message || 'N/A'}</p>
                <a href="${commit.html_url}" target="_blank">Voir le commit →</a>
            </div>
            <hr>
        `).join('');

        container.innerHTML = html;

    } catch (error) {
        container.innerHTML = `
            <p>Une erreur est survenue. Ce n'est pas normal 😕.
            <a href="https://github.com/liveweeeb13/liveweeeb13.github.io/issues" target="_blank" rel="noopener">
            Signale le problème sur GitHub</a>.</p>`;
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
});
