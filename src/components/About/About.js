import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <ParallaxLayer offset={0} speed={0}>
          <div className="container">
            <div className="row">
              <div className="col-6 photo"></div>
              <div className="col-6 about-me">
                <p>
                  Rachel Allen Creative originated from a passion for beautiful
                  images and clean, functional design. I have been working in
                  the creative arts since realizing as a high school sophomore
                  that I could create the art I so enjoyed. While many years
                  have passed since then, my drive to find and create new
                  designs that move my soul and provide useful resources for my
                  clients still grows.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </div>
    );
  }
}
