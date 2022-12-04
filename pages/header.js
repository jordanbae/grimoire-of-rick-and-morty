import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            className="title-logo"
            src="https://www.pinclipart.com/picdir/big/547-5479246_rick-and-morty-png-clipart.png"
            alt="Bootstrap"
            width="100"
            height="100"
          />
          <span className="title-label">The Rick and Morty Bible </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><span className="link-label">Home</span></Nav.Link>
            <Nav.Link href="/browse"><span className="link-label">Browse</span></Nav.Link>
            <Nav.Link href="/about"><span className="link-label">About</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
