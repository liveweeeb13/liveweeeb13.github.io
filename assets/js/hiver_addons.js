// ============================================================
// HIVER ADDONS - FLOCONS DE NEIGE UNIQUEMENT
// ============================================================

function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snowflake-container';
    snowContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(snowContainer);

    // Reduce snowflake count on smaller screens / mobile devices
    const isMobile = (typeof window !== 'undefined') && (
        (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent)
    );
    const snowflakeCount = isMobile ? 18 : 50;

    // Animation CSS pour la chute
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
                opacity: 0;
            }
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .snowflake-symbol {
            display: inline-block;
            transform-origin: center;
            will-change: transform;
        }

        #snowflake-container.snowflakes-hidden {
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        // Wrap the symbol in a child span so we can spin it independently
        snowflake.innerHTML = '<span class="snowflake-symbol">❄</span>';
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;
        
        snowflake.style.cssText = `
            position: absolute;
            color: #E0FFFF;
            font-size: ${Math.random() * 20 + 10}px;
            opacity: ${Math.random() * 0.5 + 0.3};
            left: ${Math.random() * 100}%;
            top: -10px;
            text-shadow: 0 0 5px rgba(224, 255, 255, 0.8);
            animation: fall ${duration}s linear infinite;
            animation-delay: ${delay}s;
        `;
        snowContainer.appendChild(snowflake);

        // Add a random spin to the inner symbol (independent from the fall animation)
        const symbol = snowflake.querySelector('.snowflake-symbol');
        if (symbol) {
            const spinDuration = Math.random() * 3 + 2; // 2s -> 5s
            const spinDelay = Math.random() * 5;
            symbol.style.animation = `spin ${spinDuration}s linear infinite`;
            symbol.style.animationDelay = `${spinDelay}s`;
            symbol.style.animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse';
            symbol.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
    }
}

// ============================================================
// INITIALISATION
// ============================================================

function initHiverAddons() {
    console.log('%c❄️ Flocons de neige chargés! ❄️', 'color: #B0E0E6; font-size: 20px; font-weight: bold;');
    createSnowflakes();
}

// Attendre que le document soit complètement chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHiverAddons);
} else {
    // Le DOM est déjà chargé
    initHiverAddons();
}
