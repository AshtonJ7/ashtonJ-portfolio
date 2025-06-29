import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        <Row className="footer-row align-items-center">
          {/* Developer Credit */}
          <Col xs={12} md={4} className="footer-section footer-developer">
            <h3 className="footer-text">Developed by Ashton K.</h3>
          </Col>
          
          {/* Copyright */}
          <Col xs={12} md={4} className="footer-section footer-copyright">
            <h3 className="footer-text">Copyright © {year} AK</h3>
          </Col>
          
          {/* Social Icons */}
          <Col xs={12} md={4} className="footer-section footer-social">
            <div className="social-wrapper">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/AshtonJ7"
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ashton-kabote-473395269/"
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;