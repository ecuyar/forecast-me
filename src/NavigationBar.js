import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              src="/favicon-32x32.png"
              className="d-inline-block align-top"
              alt="Navbar Brand Icon"
            ></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/city">City</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="body">
        <Outlet />
      </Container>
    </div>
  );
}
export default NavigationBar;
