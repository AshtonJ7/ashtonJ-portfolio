import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import '../styles/Resume.css';
import Button from "react-bootstrap/Button";
import pdf from "../Assets/Resume.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumePage() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      {/* Back to Home Link */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff", fontSize: "1.1rem" }}>
          ← Back to Home
        </Link>
      </div>

      {/* Resume PDF Display */}
      <Container fluid className="resume-section">
        <Row className="resume" style={{ justifyContent: "center" }}>
          <div className="pdf-container">
            <Document file={pdf}>
              <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </Row>

        {/* Download Button */}
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

export default ResumePage;