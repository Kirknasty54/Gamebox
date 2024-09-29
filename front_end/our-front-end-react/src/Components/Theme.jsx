import React, { useState, useEffect } from 'react';

function Theme() {
    const [theme, setTheme] = useState('dark');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        document.body.className = selectedTheme === 'dark' ? 'dark-theme' : 'light-theme'; // Set body class based on theme
        setIsModalOpen(false); // Close modal after selection
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme'; // Apply theme on load
    }, []);

    return (
        <div style={styles.container}>
            <button
                className="btn theme-toggle"
                onClick={() => setIsModalOpen(true)}
                aria-label="Toggle theme"
                style={styles.button}
            >
                {theme === 'dark' ? '🌙' : '☀️'}
                <span className="visually-hidden">Toggle theme</span>
            </button>

            {isModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h3>Choose a Theme</h3>
                        <button onClick={() => handleThemeChange('light')} style={styles.themeButton}>
                            ☀️ Light
                        </button>
                        <button onClick={() => handleThemeChange('dark')} style={styles.themeButton}>
                            🌙 Dark
                        </button>
                        <button onClick={() => handleThemeChange('auto')} style={styles.themeButton}>
                            ⚙️ Auto
                        </button>
                        <button onClick={() => setIsModalOpen(false)} style={styles.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
    },
    button: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        fontSize: '24px',
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
    },
    modalContent: {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
    },
    themeButton: {
        margin: '10px',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
    },
    closeButton: {
        marginTop: '20px',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#dc3545',
        color: '#fff',
    },
};

export default Theme;
