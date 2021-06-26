import React, { useState } from "react";
// import Clock from "react-digital-clock";
import { Context } from "../App.js";
import logo from "../log.png";
const Header = () => {
  return (
    <div className="header">
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          <img src={logo} height="100px" width="100px"></img>
        </a>
        <div class="navbar-nav">
          <div class="nav-item">
            <Context.Consumer>
              {(time) => {
                return <p>Current time is: {time}</p>;
              }}
            </Context.Consumer>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
