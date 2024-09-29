import React, { useEffect, useRef } from 'react';
import Particles from '@tsparticles/react';

function Globe() {
    const svgRef = useRef(null);

    useEffect(() => {
        // Initialize any SVG animation or interaction logic here
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <Particles
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: 1,
                    },
                    particles: {
                        number: {
                            value: 150, // More particles for a fuller effect
                        },
                        size: {
                            value: { min: 3, max: 7 }, // Varying sizes for depth
                        },
                        move: {
                            enable: true,
                            speed: 3, // Faster movement
                            direction: "none",
                            random: true,
                            straight: false,
                            outMode: "out",
                        },
                        line_linked: {
                            enable: true,
                            distance: 120,
                            color: '#ffffff',
                            opacity: 0.5,
                            width: 2,
                        },
                        opacity: {
                            value: 0.7, // Slightly more transparent
                            random: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse', // Particles repel on hover
                            },
                            onclick: {
                                enable: true,
                                mode: 'push', // Add more particles on click
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                links: {
                                    opacity: 1,
                                },
                            },
                            repulse: {
                                distance: 150, // Increased repulsion distance
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 5, // More particles on click
                            },
                        },
                    },
                    retina_detect: true, // For high-DPI screens
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
            <svg
                ref={svgRef}
                height="100%"
                viewBox="-1 -1 802 402"
                width="100%"
                style={{ position: 'relative', zIndex: 2 }}
            >
                <circle cx="400" cy="400" fill="lightblue" r="400" />
                <path
                    d="M 400 800 A -400 400 0 0 0 400 0"
                    fill="none"
                    stroke="url(#globe-gradient)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
                {/* Additional SVG paths for grid lines and nodes can be added here */}
            </svg>
        </div>
    );
}

export default Globe;
