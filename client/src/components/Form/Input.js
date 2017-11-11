import React from "react";

export const Input = props =>
  <div className="form-group">
    <input className="form-control input-large" style={{ textAlign: "center"}}{...props} />
  </div>;
