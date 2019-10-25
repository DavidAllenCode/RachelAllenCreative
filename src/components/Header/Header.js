import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  ra_logo,
  parallax_landing,
  parallax_photography,
  parallax_design,
  portrait
} from "../../Utils/Helpers";
import "./Header.scss";
import Router from "../Router/Router";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="header">
            <div className="container">
              <img className="logo" src={ra_logo} alt="RA" />
            </div>
          </div>
        </ParallaxLayer>
      </React.Fragment>
    );
  }
}
