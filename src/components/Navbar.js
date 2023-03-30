import React from "react";
import logo from "../react-logo.png";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="logo" />
      <h3 className="main-title" >ReactFacts</h3>
      <h4 className="sub-title">React Course - Project 1</h4>
    </nav>
  );
}
