import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Ritesh_Harge_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", margin: "20px 0" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        {/* Resume PDF Viewer */}
        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading="Loading Resume..."
          >
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
          </Document>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", margin: "20px 0" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </section>
  );
}

export default ResumeNew;
