import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import "animate.css";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
const Header = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        className="d-flex align-items-center"
      >
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
              <Nav.Link>{user?.email && <p>{user?.displayName}</p>}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
