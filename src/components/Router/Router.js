import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "../Home/Home";
import About from "../About/About";
import GraphicDesign from "../GraphicDesign/GraphicDesign";
import Blog from "../Blog/Blog";
import Photography from "../Photography/Photography";
import Header from "../Header/Header";

import "./Router.scss";

export default class Router extends Component {
  getPages() {
    const loc = window.location.href;
    if (loc.includes("about")) {
      console.log("about");
      return 1.5;
    } else if (loc.includes("graphic-design")) {
      return 3;
    } else {
      return 7.3;
    }
  }

  render() {
    const titleEnd = " | Rachel Allen Creative";
    return (
      <Parallax
        className="router"
        pages={this.getPages()}
        ref={ref => (this.parallax = ref)}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <About title={"About" + titleEnd} />
            </Route>
            <Route path="/graphicdesign">
              <GraphicDesign title={"Graphic Design" + titleEnd} />
            </Route>
            <Route path="/blog">
              <Blog title={"Blog" + titleEnd} />
            </Route>
            <Route path="/photography">
              <Photography title={"Photography" + titleEnd} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <ParallaxLayer offset={0} speed={0.5}>
            <Header />
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
          </ParallaxLayer>
        </BrowserRouter>
      </Parallax>
    );
  }
}
