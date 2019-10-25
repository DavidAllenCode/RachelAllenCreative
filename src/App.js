import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Home/Home";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  ra_logo,
  parallax_landing,
  parallax_photography,
  parallax_design,
  portrait
} from "./Utils/Helpers";

function App() {
  return <Wrapper />;
}

export default App;
