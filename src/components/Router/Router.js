import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Parallax } from "react-spring/renderprops-addons";

import Home from "../Home/Home";
import About from "../About/About";
import GraphicDesign from "../GraphicDesign/GraphicDesign";
import Blog from "../Blog/Blog";
import Photography from "../Photography/Photography";
import Header from "../Header/Header";

import "./Router.scss";

export default class Router extends Component {
  getPages() {
    const loc = window.location.href;
    if (loc.includes("about")) {
      console.log("about");
      return 2.4;
    } else if (loc.includes("graphicdesign")) {
      return 3.5;
    } else if (loc.includes("photography")) {
      return 2.2;
    } else {
      return 7.3;
    }
  }

  render() {
    const titleEnd = " | Rachel Allen Creative";
    return (
      <Parallax
        className="router"
        pages={this.getPages()}
        ref={ref => (this.parallax = ref)}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <About title={"About" + titleEnd} />
            </Route>
            <Route path="/graphicdesign">
              <GraphicDesign title={"Graphic Design" + titleEnd} />
            </Route>
            <Route path="/blog">
              <Blog title={"Blog" + titleEnd} />
            </Route>
            <Route path="/photography">
              <Photography title={"Photography" + titleEnd} />
            </Route>
            <Route path="/gs-missions-conference">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/prayknox">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/love-your-neighbor">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/go-conference-2017">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/first-30-daze">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/fire-fall-today">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/united-camp">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/family-remix">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/west-hills-logo">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/united-wknd">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/the-fight">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/difference-maker">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/grecian-honeymoon">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/hopkins-shower-invite">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/concord-outdoors">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/solemn-assembly">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/real-grit">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/brunei">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/jakarta">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/malaysia">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/laos">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/lombok">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/loy-krathong">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/medan">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/thailand">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/behanhopkins-wedding">
              <div>UnderConstruction</div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Header />
        </BrowserRouter>
      </Parallax>
    );
  }
}
