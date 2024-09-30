document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao", {
        speed: 200,
        loop: true
    }).type(' Web', {delay: 900}).delete(3).type(' Fullstack', {delay: 900}).go()
})