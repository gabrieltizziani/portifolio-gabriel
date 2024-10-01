//ESCRITA
document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao", {
        speed: 200,
        loop: true
    }).type(' Web', {delay: 900}).delete(3).type(' Fullstack', {delay: 900}).go()
})

//MENU
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Adiciona um evento de clique no ícone do menu
menuIcon.addEventListener('click', () => {
    // Alterna a classe "menu-open" para abrir e fechar o menu
    menu.classList.toggle('menu-open');
});

//ANIMAÇAO SCROLL
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // Quando 10% da seção estiver visível, a animação será ativada
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

