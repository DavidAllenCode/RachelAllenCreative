import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Form, Col, Button, Text } from "react-bootstrap";
import Router from "../Router/Router";

import {
  ra_logo,
  parallax_landing,
  parallax_photography,
  parallax_design,
  portrait
} from "../../Utils/Helpers";
import Header from "../Header/Header";

export default class Wrapper extends Component {
  render() {
    return (
      <Parallax
        className="wrapper"
        pages={4}
        ref={ref => (this.parallax = ref)}
      >
        <Header />
        <Router />
      </Parallax>
    );
  }
}
