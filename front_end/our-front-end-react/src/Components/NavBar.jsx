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
                            <NavDropdown title={<span className="nav-dropdown-title"  style={{ color: 'rgba(45, 146, 59, 1)',fontSize: '1.2rem' }}>&#9776;</span>} id="navbarScrollingDropdown" align="end">
                                <NavDropdown.Item as={Link} to="/about" className="nav-item" style={{ color: 'rgba(149, 149, 149, 0.9)' }}>About</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Popular" style={{ color: 'rgba(149, 149, 149, 0.9)' }}>Popular</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Favorited" style={{ color: 'rgba(149, 149, 149, 0.9)' }}>Favorited</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/SignIn" style={{ color: 'rgba(149, 149, 149, 0.9)' }}>Login</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    
                </div>
            </Navbar>
        </header>
    );
}

export default NavBar;
