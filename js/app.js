function revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // margen para iniciar la animación antes de que aparezca por completo

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Ejecutar al hacer scroll
window.addEventListener('scroll', revealElements);

// Llamar al cargar la página (por si algunos elementos ya están en pantalla)
revealElements();
