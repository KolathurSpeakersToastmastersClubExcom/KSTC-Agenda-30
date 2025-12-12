// Create fire particles with enhanced effects
function createFireParticle() {
    const particle = document.createElement('div');
    particle.className = 'fire-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.setProperty('--drift', (Math.random() - 0.5) * 300 + 'px');
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (4 + Math.random() * 2) + 's';

    const colors = [
        'radial-gradient(circle, #ff6b35, #f7931e)',
        'radial-gradient(circle, #f7931e, #ffbe0b)',
        'radial-gradient(circle, #ff006e, #ff5e00)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 6000);
}

// Continuous particles
setInterval(createFireParticle, 150);

// Initial burst
for (let i = 0; i < 30; i++) setTimeout(createFireParticle, i * 80);

// Burst bubbles in center
function createBurstEffect() {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const colors = ['#ff6b35', '#f7931e', '#ffbe0b', '#ff006e', '#ff5e00', '#fb5607', '#ff9500', '#ff3d00'];

    // Big bubbles
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * (Math.PI / 180);
        const distance = 100 + Math.random() * 150;
        const bubble = document.createElement('div');
        bubble.className = 'fire-bubble';

        const size = 15 + Math.random() * 25;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = centerX + 'px';
        bubble.style.top = centerY + 'px';
        bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        bubble.style.setProperty('--bx', endX + 'px');
        bubble.style.setProperty('--by', endY + 'px');
        bubble.style.animationDelay = Math.random() * 0.3 + 's';

        document.body.appendChild(bubble);
        setTimeout(() => bubble.remove(), 3500);
    }

    // Sparks
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.className = 'fire-burst';
        spark.style.left = centerX + 'px';
        spark.style.top = centerY + 'px';
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        spark.style.width = (5 + Math.random() * 10) + 'px';
        spark.style.height = spark.style.width;

        const sparkX = (Math.random() - 0.5) * 300;
        const sparkY = (Math.random() - 0.5) * 300;

        spark.style.setProperty('--x', sparkX + 'px');
        spark.style.setProperty('--y', sparkY + 'px');
        spark.style.animationDelay = Math.random() * 0.2 + 's';

        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 2500);
    }
}

// Burst every 4 seconds
setInterval(createBurstEffect, 4000);

// Initial burst after load
setTimeout(createBurstEffect, 1000);

// Sparkles on scroll
window.addEventListener('scroll', () => {
    if (Math.random() > 0.8) createFireParticle();
});
