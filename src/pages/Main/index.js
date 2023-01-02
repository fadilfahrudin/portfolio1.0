import React from "react";
import { Col, Row } from "react-bootstrap";
import { LogoReact } from "../../assets/icon";
import {
  Behance,
  Bootstrap,
  Dribbble,
  Figma,
  Laravel,
  UserHero,
} from "../../assets/img";
import { Button, Tool } from "../../components";
import "./index.css";

const Main = () => {
  return (
    <div className="mt-4  main-page">
      {/* Main Header */}
      <section id="mainHeader">
        <Row className="wrapper-about">
          <Col className="about">
            <p>
              Hi. I'm Fadil Fahrudin, I can translate something digital problem
              to pour inside application, like a web application or a mobile
              application comfortable for the eye and easy for using.
            </p>
            <div className="wrapper-btn">
              <Button title="Resume" />
            </div>
          </Col>
          <Col className="wrapper-userHero flex-end">
            <img src={UserHero} alt="fadilfahrudin" className="userHero" />
          </Col>
        </Row>
      </section>
      {/*End Main Header */}

      {/*  Tool  */}
      <section>
        <h5>Favorit teach stack for current:</h5>
        <div className="tools">
          <Tool src={LogoReact} />
          <Tool src={Laravel} />
          <Tool src={Bootstrap} />
          <Tool src={Figma} />
        </div>
      </section>
      {/* End Tool */}
    </div>
  );
};

export default Main;
