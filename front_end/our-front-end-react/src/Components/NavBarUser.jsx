import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarUser.css';
import { Navigate, useNavigate } from 'react-router-dom';
function NavBarUser() {
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    navigate('/')
  };
  const RandomNumber = Math.floor(Math.random() * 5) + 1;
  return (
    <>
      <Navbar expand="sm" bg="dark" data-bs-theme="light" className="bg-body-tertiary fs-6 shadow-lg py-2" text>
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src="./logo.png" alt="GameBox Logo" className="navbar-logo" />
            GameBox
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="My List" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/Favorited">Favorited</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {/* Profile Dropdown with User Image */}
            <NavDropdown
              id="profileDropdown"
              drop="down"
              align="end"
              className="ms-3"
              title={<img src={`./D${RandomNumber}.png`} alt="User Avatar" className="user-avatar" />}
            >
              <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBarUser;
