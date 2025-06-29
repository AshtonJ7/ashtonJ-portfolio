import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons'

function ContactForm() {
  const [state, handleSubmit] = useForm("mleynydl");
  if (state.succeeded) {
      return <p className = "success">Message sent!</p>;
  }
  return (
    <section className="contact-page" id="contact">
        <div data-aos="zoom-in-up" data-aos-once="true" className="contact-form">
          <>
    <div className="contact-head-div text-center mx-auto">
    <h1 id="Contact" className="contact-head">contact me</h1>
        </div>
     </>
    <div className="container">
        <div className="git-cont row">
     <div className="col-12 col-sm-6 half">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name </label>
      <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
      <label htmlFor="email"> Email Address </label>
      <input id="email" type="email"  name="email"  required> 
      </input>  <ValidationError 
        prefix="Email"  field="email" errors={state.errors}  />
       <label htmlFor="message"> Message</label>
      <textarea id="message"  name="message" required/>
      <ValidationError   prefix="Message"  field="message" errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    <div className="col-12 col-sm-6 half">
                    <p className="lead">
                    Feel free to contact me by submitting the form below and I will get back to you as soon as possible
                    </p>
                    <Container id = "contact">
      <Container>
        <Row>
        <Col md={12} className="contact-social">
        <ul className="contact-social-links">
              <li className="social-icons">
<SocialIcon url="https://www.linkedin.com/in/ashton-kabote-473395269" network="linkedin"/>

              </li>
              <li className="social-icons">
 <SocialIcon url="https://github.com/AshtonJ7" network="github" />


              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
                    </div>
            </div>
            </div>
        </div>
        </section>  
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;
