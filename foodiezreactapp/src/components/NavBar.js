import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import React from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

import logo from "../images/logo.png";

function NavBar() {
  return (
    <Navbar
      className="navbar navbar-dark bg-dark navbar-default navbar-static-top"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Link to="/">
          <a class="navbar-brand">
            <img
              src={logo}
              width="50"
              height="50"
              class="d-inline-block align-top"
              alt=""
            />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link>
              <Link to="/categories"> Categories</Link>
            </Nav.Link>
            <Nav.Link> About Us</Nav.Link>
            <NavDropdown title="Other" id="collasible-nav-dropdown">
              <NavDropdown.Item>Highest Rated</NavDropdown.Item>
              <NavDropdown.Item>FAQs</NavDropdown.Item>
              <NavDropdown.Item>Social Media</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="nav-buttons">
              {authStore.user ? (
                <>
                  <p className="hello-user">
                    Hello <span>{authStore.user.username} </span>
                    <Button
                      variant="outline-warning"
                      onClick={authStore.signout}
                    >
                      Logout
                    </Button>
                  </p>
                </>
              ) : (
                <div className="btn-toolbar gap-3">
                  <li class="nav-item ">
                    <SignUpModal />
                  </li>
                  <li>
                    <SignInModal />
                  </li>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
