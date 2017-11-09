import React from "react";

export const FormBtn = props =>
<div className = "text-center">
  <button {...props} className="btn btn-primary">
    {props.children}
  </button>
</div>;
