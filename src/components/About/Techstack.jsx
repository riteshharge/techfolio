import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiRender,
  SiGithub,
  SiPostman,
  SiNpm,
  SiWebpack,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Client-side */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 fontSize="48px" />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt fontSize="48px" />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 fontSize="48px" />
        <div className="tech-icons-text">JavaScript (ES6+)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact fontSize="48px" />
        <div className="tech-icons-text">React.jsx</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux fontSize="48px" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss fontSize="48px" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap fontSize="48px" />
        <div className="tech-icons-text">Bootstrap 5</div>
      </Col>

      {/* Server-side */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs fontSize="48px" />
        <div className="tech-icons-text">Node.jsx</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize="48px" />
        <div className="tech-icons-text">Express.jsx</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens fontSize="48px" />
        <div className="tech-icons-text">JWT Auth</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize="48px" />
        <div className="tech-icons-text">REST APIs</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize="48px" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongoose fontSize="48px" />
        <div className="tech-icons-text">Mongoose</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize="48px" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel fontSize="48px" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender fontSize="48px" />
        <div className="tech-icons-text">Render</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify fontSize="48px" />
        <div className="tech-icons-text">Netlify</div>
      </Col>

      {/* Version control */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt fontSize="48px" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize="48px" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize="48px" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm fontSize="48px" />
        <div className="tech-icons-text">npm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack fontSize="48px" />
        <div className="tech-icons-text">Webpack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite fontSize="48px" />
        <div className="tech-icons-text">Vite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma fontSize="48px" />
        <div className="tech-icons-text">Figma</div>
      </Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <FaJava fontSize="48px" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython fontSize="48px" />
        <div className="tech-icons-text">Python</div>
      </Col>
    </Row>
  );
}

export default Techstack;
