particlesJS("particles", {
    particles: {
        color: "#ed4c2e",
        shape: "circle",
        opacity: 1,
        size: 2.5,
        size_random: !0,
        nb: 100,
        line_linked: {
            enable_auto: !0,
            distance: 250,
            color: "#ed4c2e",
            opacity: .5,
            width: 1,
            condensed_mode: {
                enable: !1,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: !0,
            speed: 2.5
        }
    },
    interactivity: {
        enable: !0,
        mouse: {
            distance: 250
        },
        detect_on: "canvas",
        mode: "grab",
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                push_particles: {
                    enable: !0,
                    nb: 4
                }
            }
        }
    },
    retina_detect: !0
});