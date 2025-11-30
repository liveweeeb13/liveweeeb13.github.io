let snowflakesVisible = true;
let snowmanVisible = true;

function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name, defaultValue = true) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length) === 'true';
        }
    }
    return defaultValue;
}

function loadDecorationState() {
    snowflakesVisible = getCookie('decoration_snowflakes', true);
    snowmanVisible = getCookie('decoration_snowman', true);
}

function createSnowman() {
    const snowmanContainer = document.createElement('div');
    snowmanContainer.id = 'snowman-container';
    snowmanContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 120px;
        height: 180px;
        z-index: 10;
        cursor: pointer;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(snowmanContainer);

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes snowman-sway {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
        }

        @keyframes snowman-wave {
            0%, 100% { transform: rotate(-30deg); }
            25% { transform: rotate(-60deg); }
            75% { transform: rotate(0deg); }
        }

        @keyframes snowman-wave-right {
            0%, 100% { transform: rotate(30deg); }
            25% { transform: rotate(60deg); }
            75% { transform: rotate(0deg); }
        }

        .snowman-body {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle at 35% 35%, #FFFFFF, #F0F0F0);
            box-shadow: inset -5px -5px 15px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .snowman-bottom {
            width: 100px;
            height: 100px;
            bottom: 0;
            left: 10px;
        }

        .snowman-middle {
            width: 75px;
            height: 75px;
            bottom: 90px;
            left: 22.5px;
        }

        .snowman-top {
            width: 55px;
            height: 55px;
            bottom: 155px;
            left: 32.5px;
            z-index: 3;
        }

        .snowman-eye {
            position: absolute;
            width: 7px;
            height: 7px;
            background: #000;
            border-radius: 50%;
            top: 16px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3);
        }

        .eye-left {
            left: 12px;
        }

        .eye-right {
            left: 36px;
        }

        .snowman-carrot {
            position: absolute;
            width: 4px;
            height: 16px;
            top: 22px;
            left: 25px;
            border-radius: 50% 50% 50% 50% / 70% 70% 10% 10%;
            background: linear-gradient(to right, #eab4a7, #ca7f68, #b94b34);
            transform: rotate(76deg);
            z-index: 4;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .snowman-coal {
            position: absolute;
            width: 5px;
            height: 5px;
            background: #000;
            border-radius: 50%;
            box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        .coal-1 { top: 34px; left: 10px; }
        .coal-2 { top: 41px; left: 20px; }
        .coal-3 { top: 34px; left: 39px; }

        .snowman-mouth {
            position: absolute;
            top: 40px;
            left: 15px;
            width: 25px;
            height: 12px;
        }

        .mouth-piece {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #000;
            border-radius: 50%;
        }

        .mouth-piece:nth-child(1) { left: 0px; top: 3px; }
        .mouth-piece:nth-child(2) { left: 4px; top: 6px; }
        .mouth-piece:nth-child(3) { left: 8px; top: 8px; }
        .mouth-piece:nth-child(4) { left: 12px; top: 9px; }
        .mouth-piece:nth-child(5) { left: 16px; top: 8px; }
        .mouth-piece:nth-child(6) { left: 20px; top: 6px; }
        .mouth-piece:nth-child(7) { left: 22px; top: 3px; }

        .snowman-button {
            position: absolute;
            width: 5px;
            height: 5px;
            background: #000;
            border-radius: 50%;
            box-shadow: inset -1px -1px 2px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3);
        }

        .button-middle-1 { top: 15px; left: 35.5px; }
        .button-middle-2 { top: 25px; left: 35.5px; }
        .button-middle-3 { top: 35px; left: 35.5px; }

        .button-bottom-1 { top: 15px; left: 35.5px; }
        .button-bottom-2 { top: 28px; left: 35.5px; }
        .button-bottom-3 { top: 41px; left: 35.5px; }
        .button-bottom-4 { top: 54px; left: 35.5px; }

        .snowman-hat {
            position: absolute;
            bottom: 195px;
            left: 18px;
            width: 84px;
            height: 40px;
            z-index: 5;
        }

        .hat-round-top {
            position: absolute;
            width: 50%;
            height: 20%;
            left: 25%;
            top: 0%;
            border-radius: 50%;
            background: radial-gradient(ellipse at 35% 35%, #a8a89a, #6d7d7d, #3d3d3d);
            box-shadow: inset -2px -2px 4px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3);
        }

        .hat-body-top {
            position: absolute;
            height: 35%;
            width: 50%;
            left: 25%;
            top: 18%;
            background: linear-gradient(
                to right,
                #4a5f5f,
                #505a5a,
                #4a5555,
                #6d7a7a,
                #8a9191,
                #9a9a8f,
                #7d8d8a
            );
            border-bottom: 2px solid #1a1a1a;
            border-bottom-left-radius: 15%;
            border-bottom-right-radius: 15%;
        }

        .hat-body-bottom {
            position: absolute;
            width: 50%;
            height: 30%;
            left: 25%;
            top: 50%;
            background: linear-gradient(
                to right,
                #7d1111,
                #6d0f0f,
                #4d0a0a,
                #a31717,
                #c02020,
                #d42a2a,
                #b83535
            );
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
        }

        .hat-rounded-bottom {
            position: absolute;
            width: 100%;
            height: 25%;
            top: 78%;
            background: linear-gradient(
                to right,
                #7d1111,
                #6d0f0f,
                #4d0a0a,
                #a31717,
                #c02020,
                #d42a2a,
                #b83535
            );
            border-bottom: 2px solid #1a1a1a;
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
        }

        .hat-brim {
            position: absolute;
            width: 115%;
            height: 20%;
            top: 72%;
            left: -7.5%;
            background: radial-gradient(
                ellipse at 35% 35%,
                #8a8a92,
                #9d9da5,
                #9a9aa2,
                #7d8d8d,
                #5a6a6a,
                #524a52,
                #7d7d78
            );
            border-radius: 50%;
            box-shadow: inset -1px -1px 2px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2);
        }

        .snowman-arm {
            position: absolute;
            width: 40px;
            height: 4px;
            background: #8B4513;
            top: 50px;
        }

        .arm-left {
            left: -15px;
            transform-origin: right center;
            animation: snowman-wave 3s ease-in-out infinite;
        }

        .arm-right {
            right: -15px;
            transform-origin: left center;
            animation: snowman-wave-right 3s ease-in-out infinite;
        }

        .snowman-arm::before,
        .snowman-arm::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 15px;
            background: #8B4513;
            top: -6px;
        }

        .snowman-arm::before {
            left: 8px;
            transform: rotate(-30deg);
        }

        .snowman-arm::after {
            left: 28px;
            transform: rotate(30deg);
        }

        #snowman-container {
            animation: snowman-sway 4s ease-in-out infinite;
        }

        #snowman-container:hover {
            filter: brightness(1.1);
        }

        .snowman-hidden {
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `;
    document.head.appendChild(style);

    snowmanContainer.innerHTML = `
        <div class="snowman-hat">
            <div class="hat-body-top"></div>
            <div class="hat-body-bottom">
                <div class="hat-rounded-bottom"></div>
            </div>
            <div class="hat-brim"></div>
        </div>
        <div class="snowman-body snowman-top">
            <div class="snowman-eye eye-left"></div>
            <div class="snowman-eye eye-right"></div>
            <div class="snowman-carrot"></div>
            <div class="snowman-mouth">
                <div class="mouth-piece"></div>
                <div class="mouth-piece"></div>
                <div class="mouth-piece"></div>
                <div class="mouth-piece"></div>
                <div class="mouth-piece"></div>
                <div class="mouth-piece"></div>
                <div class="mouth-piece"></div>
            </div>
        </div>
        <div class="snowman-body snowman-middle">
            <div class="snowman-button button-middle-1"></div>
            <div class="snowman-button button-middle-2"></div>
            <div class="snowman-button button-middle-3"></div>
        </div>
        <div class="snowman-body snowman-bottom">
        </div>
        <div class="snowman-arm arm-left"></div>
        <div class="snowman-arm arm-right"></div>
    `;

    snowmanContainer.addEventListener('click', () => {
        snowmanContainer.style.animation = 'none';
        setTimeout(() => {
            snowmanContainer.style.animation = 'snowman-sway 4s ease-in-out infinite';
        }, 500);
    });
   snowmanContainer.addEventListener('click', (e) => {
        const rect = snowmanContainer.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        spawnConfetti(cx, cy);
    });

    return snowmanContainer;
}

function createSpecialSnowflakes() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slow-fall {
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

        .special-snowflake {
            position: fixed;
            font-size: 30px;
            pointer-events: none;
            animation: slow-fall 15s linear infinite;
            z-index: 1;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }

        .snowflakes-hidden {
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `;
    document.head.appendChild(style);

    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.id = 'special-snowflakes-container';

    // Reduce special decorative snowflakes on mobile to avoid clutter/perf issues
    const isMobile = (typeof window !== 'undefined') && (
        (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent)
    );
    const specialCount = isMobile ? 4 : 8;
    for (let i = 0; i < specialCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'special-snowflake';
        snowflake.innerHTML = '<span class="snowflake-symbol">❄</span>';
        snowflake.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * -100}%;
            animation-delay: ${Math.random() * 5}s;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        `;
        snowflakesContainer.appendChild(snowflake);

        const symbol = snowflake.querySelector('.snowflake-symbol');
        if (symbol) {
            const spinDuration = Math.random() * 3 + 2;
            const spinDelay = Math.random() * 5;
            symbol.style.animation = `spin ${spinDuration}s linear infinite`;
            symbol.style.animationDelay = `${spinDelay}s`;
            symbol.style.animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse';
            symbol.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
    }

    document.body.appendChild(snowflakesContainer);
    return snowflakesContainer;
}

function spawnConfetti(x, y, count = 40) {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    container.style.cssText = `position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:9999;`;
    document.body.appendChild(container);

    if (!document.getElementById('confetti-styles')) {
        const s = document.createElement('style');
        s.id = 'confetti-styles';
        s.innerHTML = `
            @keyframes confetti-anim {
                to { transform: translate(var(--tx), var(--ty)) rotate(var(--rot)); opacity: 0; }
            }
            .confetti-piece {
                position: absolute;
                width: 8px;
                height: 12px;
                will-change: transform, opacity;
                transform-origin: center;
                border-radius: 2px;
                opacity: 1;
            }
        `;
        document.head.appendChild(s);
    }

    const colors = ['#ff2d55', '#ff9500', '#34c759', '#5ac8fa', '#ffcc00', '#af52de'];

    let maxDuration = 0;
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const w = Math.round(Math.random() * 8) + 6;
        const h = Math.round(Math.random() * 10) + 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = w + 'px';
        piece.style.height = h + 'px';
        piece.style.left = (x - w / 2) + 'px';
        piece.style.top = (y - h / 2) + 'px';
        piece.style.background = color;

        const angle = Math.random() * Math.PI * 2; 
        const speed = Math.random() * 500 + 100;
        const tx = Math.cos(angle) * speed;
        const ty = Math.sin(angle) * speed;

        const rotDeg = Math.random() * 720 - 360;
        const duration = Math.random() * 1200 + 800;
        if (duration > maxDuration) maxDuration = duration;

        piece.style.setProperty('--tx', tx + 'px');
        piece.style.setProperty('--ty', ty + 'px');
        piece.style.setProperty('--rot', rotDeg + 'deg');
        piece.style.animation = `confetti-anim ${duration}ms cubic-bezier(.2,.8,.2,1) forwards`;

        container.appendChild(piece);
        piece.animate([
            { transform: `translate(0,0) rotate(0deg)` },
            { transform: `translate(${tx * 0.4}px, ${ty * 0.4}px) rotate(${rotDeg / 2}deg)` },
            { transform: `translate(${tx}px, ${ty}px) rotate(${rotDeg}deg)` }
        ], { duration: duration, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });

        setTimeout(() => {
            if (piece && piece.parentNode) piece.parentNode.removeChild(piece);
        }, duration + 50);
    }

    setTimeout(() => {
        if (container && container.parentNode) container.parentNode.removeChild(container);
    }, Math.max(1200, maxDuration) + 200);
}

function setupKeyboardControls(snowmanContainer, snowflakesContainer) {
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Digit1') {
            snowflakesVisible = !snowflakesVisible;
            document.querySelectorAll('.special-snowflake').forEach(el => {
                el.classList.toggle('snowflakes-hidden', !snowflakesVisible);
            });
            const snowflakeContainer = document.getElementById('snowflake-container');
            if (snowflakeContainer) {
                snowflakeContainer.classList.toggle('snowflakes-hidden', !snowflakesVisible);
            }
            setCookie('decoration_snowflakes', snowflakesVisible);
            console.log(snowflakesVisible ? '%c❄️ Flocons activés' : '%c❄️ Flocons désactivés', 'color: #87CEEB; font-weight: bold;');
        }

        if (e.code === 'Digit3') {
            snowmanVisible = !snowmanVisible;
            if (snowmanContainer) {
                snowmanContainer.classList.toggle('snowman-hidden', !snowmanVisible);
            }
            setCookie('decoration_snowman', snowmanVisible);
            console.log(snowmanVisible ? '%c⛄ Bonhomme de neige activé' : '%c⛄ Bonhomme de neige désactivé', 'color: #FFFFFF; font-weight: bold; background: #333; padding: 2px 6px;');
        }
    });
}

function initNoelDecorations() {
    loadDecorationState();
    
    console.log('%c🎄 Décorations de Noël chargées! 🎄', 'color: #C41E3A; font-size: 20px; font-weight: bold;');
    console.log('%c⌨️  Contrôles clavier: 1 = Flocons | 3 = Bonhomme', 'color: #FFD700; font-weight: bold; background: #333; padding: 4px 8px;');

    const snowmanContainer = createSnowman();
    const snowflakesContainer = createSpecialSnowflakes();
    
    if (!snowflakesVisible) {
        document.querySelectorAll('.special-snowflake').forEach(el => {
            el.classList.add('snowflakes-hidden');
        });
        const snowflakeContainer = document.getElementById('snowflake-container');
        if (snowflakeContainer) {
            snowflakeContainer.classList.add('snowflakes-hidden');
        }
    }
    if (!snowmanVisible) {
        snowmanContainer.classList.add('snowman-hidden');
    }
    
    setupKeyboardControls(snowmanContainer, snowflakesContainer);
    
    console.log('%c✨ Joyeux Noël! ✨', 'color: #FFD700; font-size: 16px; font-weight: bold;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNoelDecorations);
} else {
    initNoelDecorations();
}

