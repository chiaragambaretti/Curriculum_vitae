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