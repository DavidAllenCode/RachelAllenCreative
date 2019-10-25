import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "../Home/Home";
import About from "../About/About";
import GraphicDesign from "../GraphicDesign/GraphicDesign";
import Blog from "../Blog/Blog";
import Photography from "../Photography/Photography";

export default function Router() {
  return (
    <div className="router">
      <ParallaxLayer offset={0.2} speed={0.5}>
        <BrowserRouter>
          <Container>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/graphicdesign">Graphic Design</Nav.Link>
                  <Nav.Link href="/photograph">Photography</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/graphicdesign">Graphic Design</Link>
              </li>
              <li>
                <Link to="/photography">Photography</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav> */}

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/graphicdesign">
              <GraphicDesign />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/photography">
              <Photography />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ParallaxLayer>
    </div>
  );
}
