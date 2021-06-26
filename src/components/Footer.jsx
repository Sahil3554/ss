import React from "react";
import { Context } from "../App.js";
const Footer = () => {
  return (
    <div className="footer">
      <Context.Consumer>
        {([log, logs]) => {
          return <h3>You Clicked {log.length} times</h3>;
        }}
      </Context.Consumer>
    </div>
  );
};
export default Footer;
