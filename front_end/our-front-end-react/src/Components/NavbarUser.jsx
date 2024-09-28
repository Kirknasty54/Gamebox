import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function NavBarUser() {
    return (
    
        <Navbar expand="sm" bg="dark" data-bs-theme = "dark" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">GameBox</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              <Nav.Link href="/">Home</Nav.Link>

                <Nav.Link href="/about">About</Nav.Link>
            
                <NavDropdown title="My List" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Popular">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="/Favorited">
                    Favorited
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AddItem">
                    Add Item
                  </NavDropdown.Item>
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

              <Nav.Link 
              href="/Profile" 
              className='ms-3 fload-end circle-link'> 
              <NavDropdown title="User" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Popular">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="/Favorited">
                    Favorited
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AddItem">
                    Add Item
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBarUser;