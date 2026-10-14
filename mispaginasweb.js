document.addEventListener("DOMContentLoaded", () => {
    console.log("¡El menú de navegación está listo y funcionando!");

    // Ejemplo de interactividad: animar o hacer algo cuando pasen el mouse por las tarjetas
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "#38bdf8";
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "rgba(255, 255, 255, 0.1)";
        });
    });
});