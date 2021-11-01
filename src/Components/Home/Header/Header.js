import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import "animate.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          {/* <Navbar.Brand href="#home">City Hospital</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto d-flex fundation">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Aboutus">
                AboutUS
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
