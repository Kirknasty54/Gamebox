import React, { useState, useEffect } from 'react';

function Theme() {
  const [theme, setTheme] = useState('dark'); // Initial theme set to dark
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    window.location.reload(); // Reload the page to apply the new theme
  };

  const applyThemeStyles = (currentTheme) => {
    const darkThemeStyles = {
      backgroundColor: '#333',
      color: '#fff',
    };

    const lightThemeStyles = {
      backgroundColor: '#fff',
      color: '#000',
    };

    let bodyStyle;

    if (currentTheme === 'auto') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      bodyStyle = prefersDark ? darkThemeStyles : lightThemeStyles;
    } else {
      bodyStyle = currentTheme === 'dark' ? darkThemeStyles : lightThemeStyles;
    }

    Object.keys(bodyStyle).forEach(key => {
      document.body.style[key] = bodyStyle[key];
    });
  };

  useEffect(() => {
    // Check for saved theme in local storage on initial load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    applyThemeStyles(savedTheme);
  }, []);

  return (
    <div className="theme-dropdown" style={styles.container}>
      <button
        className="btn theme-toggle"
        onClick={() => setIsOpen(prev => !prev)} // Toggle dropdown on button click
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
        <span className="visually-hidden">Toggle theme</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu" style={styles.dropdown}>
          <li>
            <button onClick={() => handleThemeChange('light')} style={styles.button}>
              ☀️ Light
            </button>
          </li>
          <li>
            <button onClick={() => handleThemeChange('dark')} style={styles.button}>
              🌙 Dark
            </button>
          </li>
          <li>
            <button onClick={() => handleThemeChange('auto')} style={styles.button}>
              ⚙️ Auto
            </button>
          </li>
        </ul>
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
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '5px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    padding: '10px',
    listStyleType: 'none',
  },
  button: {
    background: 'none',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    textAlign: 'left',
  },
};

export default Theme;
