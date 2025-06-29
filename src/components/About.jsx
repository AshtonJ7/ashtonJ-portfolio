import React from 'react';
import '../styles/About.css';
import { Container, Row, Col } from "react-bootstrap";
import Globe from "./Globe";
import Location from "./Location";
import OrbitingSkills from "./orbitSkills";
import AboutButton from "./AboutButton";

function About() {
  return (
    <section className="home-about-section" id="about">
      <Container fluid className="about-container">
        {/* First Row - About Me & Location */}
        <Row className="justify-content-center align-items-stretch g-3 g-md-4 mb-4 mb-md-5">
          {/* About Me Section */}
          <Col xs={12} lg={6} xl={5} className="about-me-col">
            <div className="about-me-content">
              <h1 className="heading-name">
                <strong className="about-name">about</strong>
                <strong className="about-color"> me</strong>
              </h1>
              <div className="about-text-wrapper">
                <p className="home-about-body">
                  Passionate front-end developer with a creative flair and a deep love for crafting engaging and user-friendly web experiences. With a strong foundation in <strong>HTML, CSS, and JavaScript</strong>, I transform ideas into beautifully designed and highly functional websites.
                </p>
              </div>
            </div>
          </Col>

          {/* Location & Globe Section */}
          <Col xs={12} lg={6} xl={5} className="globe-col">
            <div className="globe-content">
              <div className="location-wrapper">
                <Location />
              </div>
              <div className="globe-container">
                <p className="subtext">
                  Based in Cyber space and open to remote work worldwide
                </p>
                <div className="globe-wrapper">
                  <Globe />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Second Row - Contact & Tech Stack */}
        <Row className="justify-content-center align-items-stretch g-3 g-md-4">
          {/* Contact Me Section */}
          <Col xs={12} lg={6} xl={5} className="contact-col">
            <div className="contact-content">
              <p className="home-about-contact">
                Thank you for taking the time to view my portfolio. Feel free to have a look at some of my previous work below.
                If you have any questions or would like to discuss a project, please don't hesitate to get in touch!
              </p>
              <div className="button-wrapper">
                <AboutButton />
              </div>
            </div>
          </Col>

          {/* Tech Stack Section */}
          <Col xs={12} lg={6} xl={5} className="tech-col">
            <div className="tech-content">
              <div className="tech-header">
                <h1 className="tech-name">Tech Stack</h1>
                <p className="tech-subtext">
                  I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
                </p>
              </div>
              <div className="orbiting-skills-wrapper">
                <OrbitingSkills />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;