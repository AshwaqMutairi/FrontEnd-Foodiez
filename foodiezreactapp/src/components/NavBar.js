import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/categories">
          <Navbar.Brand>FOODIEZ</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
