import React from 'react';
import Particles from '@tsparticles/react';
import './Globe.css'; // Import your CSS

function Globe(){
    return (
        <div id="particles-js" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: {
                            value: 189,
                            density: { enable: true, value_area: 315.65905665290904 },
                        },
                        color: { value: "#4940dc" },
                        shape: {
                            type: "circle",
                            stroke: { width: 6, color: "#483fde" },
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: { enable: false },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: { enable: false },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#4456aa",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: true, mode: "repulse" },
                            onclick: { enable: true, mode: "push" },
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                            repulse: { distance: 200, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 },
                        },
                    },
                    retina_detect: true,
                }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            />
            <div className="count-particles">
                <span className="js-count-particles"></span>
            </div>
        </div>
    );
};

export default Globe;