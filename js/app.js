//ESCRITA
document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao", {
        speed: 200,
        loop: true
    }).type(' Web', {delay: 900}).delete(3).type(' Fullstack', {delay: 900}).go()
})


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

