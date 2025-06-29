import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import '../styles/Resume.css';
import Button from "react-bootstrap/Button";
import pdf from "../Assets/Resume.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function CV() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume" style={{ justifyContent: "center" }}>
  <div className="pdf-container">
<Document file={pdf}>
</Document>
  </div>
</Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
           className="CV"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default CV;
