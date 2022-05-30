import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SmartCity Care Portal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
