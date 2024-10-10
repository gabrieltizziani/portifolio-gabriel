//ESCRITA
document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao", {
        speed: 200,
        loop: true
    }).type(' Web', {delay: 900}).delete(3).type(' Fullstack', {delay: 900}).go()
})

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.3 // Define quando o efeito deve ser ativado (30% da seção visível)
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});