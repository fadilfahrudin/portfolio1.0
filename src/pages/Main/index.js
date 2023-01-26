import React, { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { LogoReact } from "../../assets/icon";
import {
  AdminSb,
  Bootstrap,
  Figma,
  Gin,
  Laravel,
  QafApps,
  SBapps,
  UserHero,
} from "../../assets/img";
import { Button, Card, Gap, Tool } from "../../components";
import "./index.css";

const Main = () => {
  const [show, setShow] = useState(false);

  const first = () => {
    setShow(true);
  };

  const second = () => {
    return new Promise(() => {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    });
  };

  const button = async () => {
    const firstCondition = first();
    const secondCondition = await second();
    const result = firstCondition + secondCondition;

    setShow(result);
  };

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
          <Col className="wrapper-userHero flex-end" md="6">
            <img src={UserHero} alt="fadilfahrudin" className="userHero" />
          </Col>
        </Row>
      </section>
      {/*End Main Header */}

      {/*  Tool Tech Stack  */}
      <section id="tech-stack">
        <h3>My Favorite tech stack for current 👇</h3>
        <div className="tools">
          <Tool src={LogoReact} />
          <Tool src={Laravel} />
          <Tool src={Bootstrap} />
          <Tool src={Figma} />
        </div>
      </section>
      {/* End Tool */}

      {/* Card */}
      <section id="card">
        <div>
          <Row>
            <Col className="wrapper-card" md="6">
              <Card
                bgCard="#B9CEFC"
                titleCard="Semangat Bantu Apps"
                descriptionCard="Semangat Bantu Apps is mobile crowdfunding for donate  every social program."
                imgCard={SBapps}
                width={500}
              />
              <div className="tools-card">
                <Tool src={LogoReact} />
              </div>
            </Col>

            <Col className="wrapper-card" md="6">
              <Card
                bgCard="#ff6768"
                titleCard="Qaf (Qo)"
                descriptionCard="It is easy to learn basic Arabic for kids, so that's why Qaf is a good choice for your kids."
                imgCard={QafApps}
                width={600}
              />
              <div className="tools-card">
                <Tool src={Figma} />
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="wrapper-card" md="6">
              <Card
                bgCard="#f5c7f7"
                titleCard="Gerakan Infaq Nutrisi"
                descriptionCard="Web design for the Nutrition program given to orphans and the poor."
                imgCard={Gin}
                width={550}
              />
              <div className="tools-card">
                <Tool src={Figma} />
              </div>
            </Col>

            <Col className="wrapper-card" md="6">
              <Card
                bgCard="#fef0cd"
                titleCard="Management Semangat Bantu Apps"
                descriptionCard="Server side from Mobile Apps Semangat Bantu create with Laravel framework."
                imgCard={Laravel}
                width={470}
              />

              <div className="tools-card">
                <Tool src={Laravel} />
                <Gap height={5} />
                <Tool src={Bootstrap} />
              </div>
            </Col>
          </Row>

          {/* Alert */}
          <div>
            <Gap height={20} />
            <Alert show={show} variant="danger">
              <Alert.Heading>Oops</Alert.Heading>
              <p>
                Currently this is the only project that has been worked on...
              </p>
            </Alert>
          </div>
          {/* End Alert */}

          <div className="d-flex justify-content-center mt-4">
            <Button title="See more project..." onClick={button} />
          </div>
        </div>
      </section>
      {/* End card */}
      <hr className="style-hr" />
    </div>
  );
};

export default Main;
