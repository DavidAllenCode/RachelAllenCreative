import React, { Component } from "react";
import { ra_logo } from "../../Utils/Helpers";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="container">
            <img className="logo" src={ra_logo} alt="RA" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
