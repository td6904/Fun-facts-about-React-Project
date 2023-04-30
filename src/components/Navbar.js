import React from "react";
import logo from "../react-logo.png";

export default function Navbar(props) {
  return (
    <div className={props.darkMode ? "dark" : ""}>
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <h3 className="main-title">ReactFacts</h3>

        <div className="toggler">
          <p className="toggler-light">Light</p>
          <label className="toggler-slider">
            <input type="checkbox" onClick={props.toggleDarkMode}/>
            <div className="toggler-slider-circle"></div>
          </label>
          <p className="toggler-dark">Dark</p>
        </div>
      </nav>
    </div>
  );
}
