import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import {
  parallax_landing,
  parallax_photography,
  parallax_design,
  portrait,
  rp_firefall,
  rp_go,
  rp_prayknox,
  rp_unitedcamp,
  rp_westhills,
  rp_summer17,
  FavoriteRows,
  FavoriteRow
} from "../../Utils/Helpers";
import "./Home.scss";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <ParallaxLayer
          offset={0}
          speed={-0.1}
          factor={3}
          style={{
            backgroundImage: `url(${parallax_landing})`,
            backgroundSize: "100%"
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={-0.1}
          factor={3}
          style={{
            backgroundImage: `url(${parallax_design})`,
            backgroundSize: "100%"
          }}
        />
        <ParallaxLayer
          offset={2.4}
          speed={-0.1}
          style={{
            backgroundImage: `url(${parallax_photography})`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer offset={1.5} speed={-0.2}>
          <div className="container">
            <div className="row justify-content-center">
              <a href="/graphicdesign" className="design btn btn-white">
                DESIGN
              </a>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.5}>
          <div className="bio">
            <div className="container">
              <div className="row">
                <div className="col-4 bio-list">
                  <ul>
                    <li>name | rachel</li>
                    <li>location | california</li>
                    <li>specialties | graphic design</li>
                    <li>photography | caligraphy</li>
                    <li>loves | cofee travel ut vols</li>
                  </ul>
                  <div className="about-btn">
                    <a href="/about" className="about btn btn-black">
                      MORE
                    </a>
                  </div>
                </div>
                <div className="col-8 portrait-col">
                  <img className="portrait" src={portrait} alt="RA" />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.5}>
          <div className="recent-projects">
            <div className="container">
              <div className="title-div">
                <h4 className="rp-title">Recent Projects.</h4>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="project-img" src={rp_prayknox} alt="RA" />
                  <div className="caption">
                    <p className="rp-header">PRAYKNOX BRANDING</p>
                    <p className="rp-desc">
                      Full design suite for the PrayKnox Prayer Movement,
                      including PrayKnox.org.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img className="project-img" src={rp_go} alt="RA" />
                  <div className="caption">
                    <p className="rp-header">GO CONFERENCE</p>
                    <p className="rp-desc">
                      Full design suite for First Baptist Concord's Outreach
                      Conference.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img className="project-img" src={rp_unitedcamp} alt="RA" />
                  <div className="caption">
                    <p className="rp-header">UNITED CAMP CAMPAIGN</p>
                    <p className="rp-desc">
                      Full design suite for Concord Students Summer Camp portion
                      of their UNITED events campaign.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="project-img" src={rp_firefall} alt="RA" />
                  <div className="caption">
                    <p className="rp-header">FIRE FALL TODAY ALBUM ARTWORK</p>
                    <p className="rp-desc">
                      Album artwork and promotional materials for the Fire Fall
                      Today EP.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img className="project-img" src={rp_summer17} alt="RA" />
                  <div className="caption">
                    <p className="rp-header">C|S SUMMER CALENDAR</p>
                    <p className="rp-desc">
                      Summer events calendar for Concord Students.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="crop">
                    <img className="project-img" src={rp_westhills} alt="RA" />
                  </div>
                  <div className="caption">
                    <p className="rp-header">WEST HILLS LOGO</p>
                    <p className="rp-desc">
                      Branding for the second campus of First Baptist Concord.
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-div">
                <a
                  href="graphicdesign"
                  className="design-portfolio btn btn-black"
                >
                  DESIGN PORTFOLIO
                </a>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-8">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={-0.2}>
          <div className="container">
            <div className="row justify-content-center">
              <a href="/photography" className="photography btn btn-white">
                PHOTOGRAPHY
              </a>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} factor={5.2}>
          <div className="favorites">
            <h4 className="fav-title">A Few Favorites</h4>
            {FavoriteRows}
            <div className="link-div">
              <a href="/photography" className="btn btn-black design-portfolio">
                PHOTOGRAPHY PORTFOLIO
              </a>
            </div>
            <div className="row justify-content-center pb-4">
              <div className="col-8">
                <hr />
              </div>
            </div>
          </div>
          <div className="connect">
            <div className="container">
              <h4 className="c-title">CONNECT</h4>
              <p className="c-desc">RACHEL@RACHELALLENCREATIVE.COM</p>
              <Contact />
            </div>
          </div>
          <Footer />
        </ParallaxLayer>
      </div>
    );
  }
}
