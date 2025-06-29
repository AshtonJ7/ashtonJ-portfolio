import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import '../styles/Projects.css';
import chapterChatter from '../Assets/chapter-chatter.png';
import speak from '../Assets/speak-my-words.png';
import note from '../Assets/note-taker.png';
import jate from '../Assets/JATE.png';
import msa from '../Assets/MSA.png';
import tech from '../Assets/tech-corner.png';

function Projects() {
  return (
    <section fluid className="project-section" id="projects">
      <Container>
        <h2 className="projects-heading">
           <strong> pro<span className="highlight-letter">J</span>ects</strong>
        </h2>
        <p>Feel free to browse through my most recent work.</p>

        <Row className="justify-content-center g-4">
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={chapterChatter}
              title="Chapter Chatter"
              description="A full stack web app allowing users to search and review books, create accounts, and manage reading lists. Built with Node, Express, MySQL, and Handlebars."
              ghLink="https://github.com/33hollie33/chapterchatter"
              demoLink="https://chapterchatter2-52d5bc95ce85.herokuapp.com/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={speak}
              title="Speak My Words"
              description="A word-definition search tool with Text-to-Speech functionality. Built using HTML, CSS, and JavaScript with API integration."
              ghLink="https://github.com/elleinadseer/speak-my-words"
              demoLink="https://elleinadseer.github.io/speak-my-words/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              title="Tech Corner"
              description="CMS-style blog site for developers to post and comment. Built with Handlebars, Sequelize, Express, and express-session for authentication."
              ghLink="https://github.com/AshtonJ7/Tech-Corner"
              demoLink="https://makenotes-03c8c8e35784.herokuapp.com/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={jate}
              title="Text Editor"
              description="A progressive web app text editor that works offline and syncs notes using IndexedDB. Built with JavaScript, Node.js, and Express."
              ghLink="https://github.com/AshtonJ7/text-editor/tree/main"
              demoLink="https://peaceful-stream-63675-161d7f225d28.herokuapp.com/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={msa}
              title="Marketing Solutions Agency"
              description="A simple, responsive business site built with HTML, TailwindCSS, PostCSS, and Webpack for a fictional marketing agency."
              ghLink="/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              title="Note Taker"
              description="Note-taking web app allowing users to write, save, and delete notes. Built using Node.js, Express, HTML, CSS, and JavaScript."
              ghLink="https://github.com/AshtonJ7/makenotes"
              demoLink="https://makenotes-03c8c8e35784.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
               <br></br>
               <br></br>
    </section>
  );
}

export default Projects;