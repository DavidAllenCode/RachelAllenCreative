import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { DesignRows } from "../../Utils/Helpers";
import "./GraphicDesign.scss";
import Footer from "../Footer/Footer";
export default class GraphicDesign extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <ParallaxLayer offset={0.3} speed={0.3}>
        <div className="graphic-design">
          <div className="title text-center">
            <h1>Graphic Design</h1>
          </div>
          {DesignRows}
        </div>
        <Footer />
      </ParallaxLayer>
    );
  }
}
