import React from "react";
import { Context } from "../App";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Context.Consumer>
        {([log, logs, time]) => {
          return (
            <div className="box" onClick={logs}>
              Click here
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
};
export default Sidebar;
