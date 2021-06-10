import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';


const NavBar = (props) => {
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Sehoon Store</Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>              
              <Nav.Link href="/store">Store</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Hello</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              </Nav>              
          </Navbar.Collapse>    
        </Navbar>
      </div>
    );
};

export default NavBar;