import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Home/Home";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
