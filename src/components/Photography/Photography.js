import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { PhotoRows } from "../../Utils/Helpers";
import "./Photography.scss";
import Footer from "../Footer/Footer";

export default class Photography extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    return (
      <ParallaxLayer offset={0.3} speed={0.3}>
        <div className="photography">
          <div className="title text-center">
            <h1>Photography</h1>
          </div>
          {PhotoRows}
        </div>
        <Footer />
      </ParallaxLayer>
    );
  }
}
