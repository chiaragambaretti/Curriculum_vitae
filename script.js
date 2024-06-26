document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('animated-title');
    const letters = title.textContent.split('');
    title.textContent = '';
    
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        title.appendChild(span);
        
        setTimeout(() => {
            span.classList.add('visible');
        }, 100 * index);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-left');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight) {
                section.classList.add('visible');
            }
        });
    }

    // Controlla lo scroll e aggiorna lo stato delle sezioni visibili inizialmente
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Controlla anche al caricamento iniziale della pagina
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-right');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight) {
                section.classList.add('visible');
            }
        });
    }

    // Controlla lo scroll e aggiorna lo stato delle sezioni visibili inizialmente
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Controlla anche al caricamento iniziale della pagina
});