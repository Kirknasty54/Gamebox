import React, { useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-custom');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
            <img src="./logo.png" alt="GameBox Logo" style={{ height: '40px', marginRight: '10px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>GameBox</span>
          </Navbar.Brand>

          <Nav className="d-flex" style={{ display: 'inline', gap: '5px', justifyContent: 'end', marginTop: '0px' }}>
            <NavDropdown
              className="custom-dropdown"
              title={<span className="nav-dropdown-title" style={{ color: 'white', fontSize: '1.2rem' }}>&#9776;</span>}
              id="navbarScrollingDropdown"
              align="end"
            >
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: 'none' }}>
                <NavDropdown.Item as={Link} to="/about" className="nav-item">About</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Popular">Popular</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Favorited">Favorited</NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/Login" style={{ color: '#007BFF' }}>Login</NavDropdown.Item>
              </div>
            </NavDropdown>

          </Nav>
        </div>
      </Navbar>
    </header>
  );
}

export default NavBar;
