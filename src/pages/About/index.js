import React from "react";
import "./index.css";
import { UserHero } from "../../assets/img";
import { CardExperience, Gap } from "../../components";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="mt-5 about-page">
      <Container>
        <section id="about-me">
          <div className="d-flex justify-content-center">
            <img src={UserHero} alt="Hero" className="my-photo" />
          </div>
          <Gap height={60} />
          <div>
            <h1>Hey there!👋</h1>
            <p>
              <b> I am Fadillah Fahrudin, as a Front-end Developer.</b> My
              friend or other people can call me Fadil. :v I am 25 years old. I
              graduated from the University of Pamulang major in Informatic of
              technic,
            </p>
            <p>
              I have a solid experience in several programming languages such as
              HTML, CSS, JavaScript, and litle basic of PHP language. I am also
              very familiar love with this frameworks such as Bootstrap and
              React. In addition, I also understand the basic concepts such as
              responsive design, UI/UX design and i can make mobile application
              with React Native.
            </p>
            <p>
              The first time I became interested in programming languages was
              when I was in junior high school and at that time I watched the
              movie Who Iam I so that way I wanted to be a hacker heheh :v so I
              started to find out how to know language program until when I was
              a bachelor's degree student at University of Pamulang (2017) I
              chose major informatics of technic and the first language that I
              knew was C++ until in the fourth semester I found a YouTube
              channel that provides education regarding basic languages such as
              HTML CSS PHP and Javascript.
            </p>
            <p>
              My first project was at that time creating a static web portfolio
              using HTML CSS and javascript. and while studying in 2022, for the
              first time I worked in the web developer section to build a social
              website for the Gerakan Infaq Nutrisi, starting from UI design
              using Figma and than to coding using the Laravel framework. but
              this project has not been resumed until now from my office.
            </p>
            <p>
              Until my final undergraduate exams, I created an Android-based
              crowdfunding application using React. Previously, I wasn't very
              familiar with React, so i looked it up and went to bootcamp in the
              Build with Angga class about making an Android Food Market
              application using React Native as the front-end and Laravel as the
              back-end. and from here I like the concept of React, utilise base
              of component.
            </p>
            <p>
              Until I found out about React and started to get acquainted with
              React JS, which turned out to be a concept not much different from
              React Native. and I started to fall in love with React Framework.
            </p>
            <p>
              So that way I continue to find out and continue to explore this
              framework and hone my javascript language even sharper.
            </p>
          </div>
        </section>

        <section id="wrapper-CardExperience">
          <h2 className="text-center">Work Experience</h2>
          <hr />
          <Row className="justify-content-md-center">
            <Col xl="4">
              <CardExperience
                jobdesk="Web Developer"
                location="Semangatbantu.com"
                duration="Jan 2022 - Jan 2023"
              />
            </Col>
            <Col xl="4">
              <CardExperience
                jobdesk="Comunity Network"
                location="Semangatbantu.com"
                duration="Jul 2021 - Dec 2022"
              />
            </Col>
            <Col xl="4">
              <CardExperience
                jobdesk="Content Createor & Social Media Specialist"
                location="Laju Peduli"
                duration="Jun 2019 - Dec 2019"
              />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default About;
