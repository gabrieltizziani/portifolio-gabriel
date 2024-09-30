document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao", {
        speed: 200,
        loop: true
    }).type(' Web', {delay: 900}).delete(3).type(' Fullstack', {delay: 900}).go()
})

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Adiciona um evento de clique no ícone do menu
menuIcon.addEventListener('click', () => {
    // Alterna a classe "menu-open" para abrir e fechar o menu
    menu.classList.toggle('menu-open');
});