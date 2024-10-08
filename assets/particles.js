particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#FF5733", "#33FF57", "#3357FF"] // Cores variadas
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.9,
            "random": false
        },
        "size": {
            "value": 5,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});
