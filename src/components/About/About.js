import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import Contact from "../Contact/Contact";

export default class About extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

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
            <h4 className="skills">Skills</h4>
            <p>A few of the programs I utilize daily</p>
            <div className="row">
              <div className="col-4">
                <img src="something" alt="Illustrator" />
                <p className="skill-title">Adobe creative cloud - design</p>
                <p className="skill-sub">Illustrator | InDesign</p>
              </div>
              <div className="col-4">
                <img src="something" alt="Photoshop" />
                <p className="skill-title">
                  Adobe creative cloud - photography
                </p>
                <p className="skill-sub">Lightroom | Photoshop</p>
              </div>
              <div className="col-4">
                <img src="something" alt="Misc" />
                <p className="skill-title">Miscellaneous</p>
                <p className="skill-sub">Microsoft Office | Google Suite</p>
              </div>
            </div>
            <h4 className="get-in-touch">Get in touch!</h4>
            <p className="git-sub">
              have questions? want to connect? i'd love to hear from you!
            </p>
            <Contact />
          </div>
        </ParallaxLayer>
      </div>
    );
  }
}
