import React from "react";
import "./AppNavbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg " className="nab-btm">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav extra-css">
          <Nav className="me-auto extra-css fw-semibold text-dark fs-6 ps-5">
            <Nav.Link href="#CarTyres">Car Tyres</Nav.Link>
            <Nav.Link href="#BikeTyres">Bike Tyres</Nav.Link>
            <Nav.Link href="#TyrePressure">Tyre Pressure</Nav.Link>
            <Nav.Link href="#CommercialTyres">Commercial Tyres</Nav.Link>
            <Nav.Link href="#Accessories">Accessories</Nav.Link>
            <Nav.Link href="#More">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span class="navbar-text fw-semibold text-dark">
          <h6>Login</h6>
        </span>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
