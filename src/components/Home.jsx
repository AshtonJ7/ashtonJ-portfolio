import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Header.css';
import homeLogo from "../Assets/home-main.svg";
import Type from "./Type";
import HeaderButton from "./HeaderButton";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function Home() {
  return (
    <section fluid className="first-page home-wrapper" id="home">
      <Container className="introduction">
        <Row className="justify-content-center align-items-center g-4">
          <Col lg={6} md={7} sm={12} className="intro-text order-2 order-md-1">
            <h1 className="wave-name">
              Hi{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏽
              </span>
            </h1>

            <h1 className="cover-name">
              I'M
              <strong className="main-name"> ASH</strong>
              <strong className="header-color">TON</strong>
            </h1>

            <div className="typewriter-container">
              <Type />
            </div>
          </Col>

          <Col lg={4} md={5} sm={8} xs={10} className="text-center order-1 order-md-2">
            <div className="image-container">
              <img
                src={homeLogo}
                alt="home pic"
                className="cover img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <HeaderButton />
    </section>
  );
}
export default Home;