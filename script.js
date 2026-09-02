// =============================================
// LOS DOS GALLOS
// Animaciones al hacer scroll
// =============================================

const elementosAnimados = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
});