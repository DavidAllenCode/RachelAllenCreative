import React, { Component } from "react";

export default class GraphicDesign extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div className="container">
        <h1>Graphic Design</h1>
        <div className="row">
          <div className="col-4">
            <img src="" alt="under construction" className="project-img" />
            <p className="img-desc">Missions Conference | design suite</p>
          </div>
          <div className="col-4">
            <img src="" alt="under construction" className="project-img" />
            <p className="img-desc">Missions Conference | design suite</p>
          </div>
          <div className="col-4">
            <img src="" alt="under construction" className="project-img" />
            <p className="img-desc">Missions Conference | design suite</p>
          </div>
        </div>
      </div>
    );
  }
}
