// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Website Penyebab dan Penanggulangan Bencana Tsunami di Indonesia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {" "}
          {/* mr-auto to push items to the right */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {" "}
          {/* ml-auto to align items to the right */}
          <NavDropdown title="Artikel" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/artikel">
              Artikel 1
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/artikel">
              Artikel 2
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/berita">
            Berita
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
