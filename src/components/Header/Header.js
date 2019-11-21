import React, { Component } from "react";
import { ra_logo } from "../../Utils/Helpers";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Trail } from "react-spring/renderprops";

import "./Header.scss";
//TODO: Fix hover over transitions
export default class Header extends Component {
  render() {
    return (
      <ParallaxLayer offset={0} speed={0.5} factor={0.25}>
        <div className="header">
          <div className="logo-top">
            <div className="container">
              <img className="logo" src={ra_logo} alt="RA" />
            </div>
          </div>
          <Container>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/graphicdesign">Graphic Design</Nav.Link>
                  <Nav.Link href="/photography">Photography</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      </ParallaxLayer>
    );
  }
}
