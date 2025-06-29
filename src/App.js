import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResumePage from "./components/ResumePage";
import './styles/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Element } from "react-scroll";

function App() {
  return (
    <Router basename="/ashtonJ-portfolio">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
                <Element name="footer">
                  <Footer />
                </Element>
            </>
          }
        />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}
export default App;