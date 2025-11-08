import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 fontSize={"48px"} />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt fontSize={"48px"} />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 fontSize={"48px"} />
        <div className="tech-icons-text">JavaScript (ES6+)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact fontSize={"48px"} />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"48px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux fontSize={"48px"} />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap fontSize={"48px"} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs fontSize={"48px"} />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"48px"} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"48px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase fontSize={"48px"} />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      {/* Tools & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt fontSize={"48px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"48px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize={"48px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws fontSize={"48px"} />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
