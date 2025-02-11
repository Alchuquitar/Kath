document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const messages = [
        "Eres la razón de mi felicidad 💖",
        "Cada día contigo es un regalo 🎁",
        "Tu sonrisa ilumina mi vida ✨",
        "El amor que siento por ti es infinito 💫",
        "Y finalmente... ¿Quieres ser mi San Valentín? 💌"
    ];

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('flip')) return;

            const back = card.querySelector('.back');
            back.textContent = messages[index];

            card.classList.add('flip');
            
            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("¡Feliz día de San Valentín! ❤️");
                }, 800);
            }
        });
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.querySelector('.heart-rain').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 300);
});
