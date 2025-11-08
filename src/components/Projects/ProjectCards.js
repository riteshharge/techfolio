import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <Card className="project-card-view shadow-lg border-0">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} preview`}
        className="project-card-img"
      />
      <Card.Body>
        <Card.Title className="fw-bold text-center mb-3">{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <div className="d-flex justify-content-center mt-3 flex-wrap">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1"
            >
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!isBlog && demoLink && (
            <Button
              variant="secondary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
