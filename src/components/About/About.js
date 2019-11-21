import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import Contact from "../Contact/Contact";
import {
  about_pen,
  about_photo,
  about_design,
  about_portrait
} from "../../Utils/Helpers";
import "./About.scss";
import Footer from "../Footer/Footer";

export default class About extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <ParallaxLayer offset={0.3} speed={0}>
        <div className="about">
          <div className="row about-row">
            <div className="col-6 photo">
              <img className="w-100" src={about_portrait} alt="portrait" />
              <div className="img-overlay"></div>
            </div>
            <div className="col-5 about-me">
              <h1 className="title mb-4">About</h1>
              <p className="desc">
                Rachel Allen Creative originated from a passion for beautiful
                images and clean, functional design. I have been working in the
                creative arts since realizing as a high school sophomore that I
                could create the art I so enjoyed. While many years have passed
                since then, my drive to find and create new designs that move my
                soul and provide useful resources for my clients still grows.
              </p>
            </div>
          </div>
          <div className="skills text-center">
            <h2 className="head">Skills</h2>
            <h3 className="description">
              A FEW OF THE PROGRAMS I UTILIZE DAILY
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-4">
              <img src={about_pen} alt="Illustrator" />
              <p className="skill-title">ADOBE CREATIVE CLOUD - DESIGN</p>
              <p className="skill-sub">Illustrator | InDesign</p>
            </div>
            <div className="col-4">
              <img src={about_photo} alt="Photoshop" />
              <p className="skill-title">ADOBE CREATIVE CLOUD - PHOTOGRAPHY</p>
              <p className="skill-sub">Lightroom | Photoshop</p>
            </div>
            <div className="col-4">
              <img src={about_design} alt="Misc" />
              <p className="skill-title">MISCELLANEOUS</p>
              <p className="skill-sub">Microsoft Office | Google Suite</p>
            </div>
          </div>
          <div className="bottom text-center">
            <h4 className="git">Get in touch!</h4>
            <p className="git-sub">
              HAVE QUESTIONS? WANT TO CONNECT? I'D LOVE TO HEAR FROM YOU!
            </p>
          </div>
          <Contact />
        </div>
        <Footer />
      </ParallaxLayer>
    );
  }
}
