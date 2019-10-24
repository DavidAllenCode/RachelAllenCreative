import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Form, Col, Button, Text } from "react-bootstrap";
import {
  ra_logo,
  parallax_landing,
  parallax_photography,
  parallax_design,
  portrait
} from "../../Utils/Helpers";
import "./Home.scss";
export default class Home extends Component {
  render() {
    return (
      <Parallax className="home" pages={4} ref={ref => (this.parallax = ref)}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundImage: `url(${parallax_landing})`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="header">
            <div className="container">
              <img className="logo" src={ra_logo} alt="RA" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            backgroundImage: `url(${parallax_design})`,
            backgroundSize: "cover"
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.5}>
          <div className="bio">
            <div className="container">
              <div className="row">
                <div className="col-6 bio-list">
                  <ul>
                    <li>name | rachel</li>
                    <li>location | california</li>
                    <li>specialties | graphic design</li>
                    <li>photography | caligraphy</li>
                    <li>loves | cofee travel ut vols</li>
                  </ul>
                  <button className="about">MORE</button>
                </div>
                <div className="col-6 portrait-col">
                  <img className="portrait" src={portrait} alt="RA" />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.2}>
          <div className="container">
            <div className="row justify-content-center">
              <button className="design">DESIGN</button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            backgroundImage: `url(${parallax_photography})`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer offset={1.9} speed={0.5}>
          <div className="recent-projects">
            <div className="container">
              <h4 className="rp-title">Recent Projects.</h4>
              <div className="row">
                <div className="col-4">
                  <img className="project-img" src={portrait} alt="RA" />
                  <p className="rp-header">PRAYKNOX BRANDING</p>
                  <p className="rp-header">
                    Full design suite for the PrayKnox Prayer Movement,
                    including PrayKnox.org
                  </p>
                </div>
                <div className="col-4">
                  <img className="project-img" src={portrait} alt="RA" />
                  <p className="rp-header">PRAYKNOX BRANDING</p>
                  <p className="rp-header">
                    Full design suite for the PrayKnox Prayer Movement,
                    including PrayKnox.org
                  </p>
                </div>
                <div className="col-4">
                  <img className="project-img" src={portrait} alt="RA" />
                  <p className="rp-header">PRAYKNOX BRANDING</p>
                  <p className="rp-desc">
                    Full design suite for the PrayKnox Prayer Movement,
                    including PrayKnox.org
                  </p>
                </div>
              </div>
              <button className="design-portfolio">DESIGN PORTFOLIO</button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.2}>
          <div className="container">
            <div className="row justify-content-center">
              <button className="photography">PHOTOGRAPHY</button>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={0.5}>
          <div className="favorites">
            <div className="container">
              <h4 className="fav-title">A Few Favorites</h4>
              <div className="row">
                <div className="col-8">
                  <img className="fav-img" src={portrait} alt="RA" />
                </div>
                <div className="col-4">
                  <img className="fav-img" src={portrait} alt="RA" />
                  <img className="fav-img" src={portrait} alt="RA" />
                </div>
              </div>
              <button className="design-portfolio">
                PHOTOGRAPHY PORTFOLIO
              </button>
              <div className="row justify-content-center">
                <div className="col-6">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={0.5}>
          <div className="connect">
            <div className="container">
              <h4 className="c-title">Connect</h4>
              <p>RACHEL@RACHELALLENCREATIVE.COM</p>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your message here"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    );
  }
}
