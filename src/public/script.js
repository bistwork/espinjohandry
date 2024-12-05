document.addEventListener("DOMContentLoaded", () => {
    // Funcionalidad del menú hamburguesa
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const sideMenu = document.getElementById("sideMenu");
    const contactInfo = document.getElementById("contactInfo");
    const socialIcons = document.getElementById("socialIcons");
    const homeLink = document.getElementById("homeLink"); // Enlace Home

    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open");
        sideMenu.classList.toggle("open");

        // Ocultar los bloques cuando el menú hamburguesa está abierto
        contactInfo.classList.toggle("hidden");
        socialIcons.classList.toggle("hidden");
    });

    // Funcionalidad para redirigir al slider cuando se hace clic en "Home"
    homeLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        document.getElementById("slider").scrollIntoView({ behavior: "smooth" });

        // Cerrar el menú hamburguesa después de hacer clic en "Home"
        sideMenu.classList.remove("open");
        hamburgerMenu.classList.remove("open");

        // Asegurar que los bloques de contacto y redes sociales se muestren
        contactInfo.classList.remove("hidden");
        socialIcons.classList.remove("hidden");
    });

    // Efecto de máquina de escribir
    const typewriter = document.getElementById("typewriter");
    const texts = [
        "a Hacker",
        "an Intelligence Analyst",
        "a Bug Bounty Hunter"
    ];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typewriter.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriter.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        }
    }

    // Iniciar el efecto
    type();
});
