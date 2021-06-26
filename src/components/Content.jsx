import React, { useContext } from "react";
import { Context } from "../App.js";
const Content = () => {
  const [logs] = useContext(Context);
  return (
    <div className="content">
      {logs.map((log, index) => (
        <p>&nbsp;You Clicked at {logs[logs.length - index - 1]}</p>
      ))}
    </div>
  );
};
export default Content;
