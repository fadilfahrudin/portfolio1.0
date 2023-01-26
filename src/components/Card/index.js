import React from "react";
import Tool from "../Tool";
import "./index.css";
const Card = ({
  bgCard,
  titleCard,
  descriptionCard,
  imgCard,
  toolCard,
  width,
}) => {
  return (
    <div
      className="wrapper-card"
      style={{
        backgroundColor: bgCard,
      }}
    >
      <div className="px-4 pt-4">
        <h1>{titleCard}</h1>
        <h4>{descriptionCard}</h4>
      </div>

      <img
        src={imgCard}
        alt="Project"
        // width={width}
        className="main-img-card"
      />

      {/* <div className="tools-card">
        <Tool src={[toolCard]} />
      </div> */}
    </div>
  );
};

export default Card;
