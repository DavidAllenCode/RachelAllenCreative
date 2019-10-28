import React, { Component } from "react";

export default class Blog extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    return (
      <div>
        <p>Placeholder</p>
      </div>
    );
  }
}
