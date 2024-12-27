// Sélection des éléments HTML
const settingsWindow = document.getElementById("settings-window");
const openSettingsBtn = document.getElementById("open-settings");
const closeButton = document.querySelector(".close-button");
const toggleThemeBtn = document.getElementById("toggle-theme");

// Fonction pour ouvrir la fenêtre des paramètres
function openSettings() {
    settingsWindow.classList.remove("hidden");
}

// Fonction pour fermer la fenêtre des paramètres
function closeSettings() {
    settingsWindow.classList.add("hidden");
}

// Fonction pour basculer entre les thèmes sombre et clair
function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    // Mettre à jour le texte du bouton
    toggleThemeBtn.textContent = isDarkTheme
        ? "Passer au mode clair"
        : "Passer au mode sombre";
}

// Initialisation de l'état du bouton en fonction du thème actuel
function initializeThemeButton() {
    const isDarkTheme = document.body.classList.contains("dark-theme");
    toggleThemeBtn.textContent = isDarkTheme
        ? "Passer au mode clair"
        : "Passer au mode sombre";
}

// Ajouter les écouteurs d'événements
openSettingsBtn.addEventListener("click", openSettings);
closeButton.addEventListener("click", closeSettings);
toggleThemeBtn.addEventListener("click", toggleTheme);

// Initialiser l'état au chargement de la page
document.addEventListener("DOMContentLoaded", initializeThemeButton);
