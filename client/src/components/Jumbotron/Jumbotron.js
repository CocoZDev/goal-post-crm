import React from "react";
import "../../styles/Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div className="jumbotron text-center">
    {children}
  </div>;

export default Jumbotron;
