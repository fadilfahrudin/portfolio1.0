import React from "react";
import "./index.css";

const Tool = ({ src, href, ...rest }) => {
  return (
    <a href={href} {...rest} className="wrapper-tool">
      <img src={src} alt="icon" className="logoTools" />
    </a>
  );
};

export default Tool;
