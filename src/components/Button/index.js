import React from "react";
import "./index.css";

const Button = ({ title = "button title", ...rest }) => {
  return (
    <button type="button" className="btn-resume" {...rest}>
      {title}
    </button>
  );
};

export default Button;
