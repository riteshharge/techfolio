import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ritesh Harge</span> from{" "}
            <span className="purple">Maharashtra, India</span>.
            <br />
            I’m a passionate{" "}
            <span className="purple">MERN Stack Developer</span> with hands-on
            experience in building scalable and responsive full-stack web
            applications.
            <br />I completed a{" "}
            <span className="purple">6-month internship</span> at{" "}
            <span className="purple">
              ECS Software Technology Pvt. Ltd., Pune
            </span>
            , where I worked on{" "}
            <span className="purple">
              RESTful APIs, authentication systems, and performance optimization
            </span>{" "}
            for production-ready applications.
            <br />
            <br />I pursued my{" "}
            <span className="purple">
              B.Tech in Computer Engineering
            </span> from{" "}
            <span className="purple">
              Rajarambapu Institute of Technology, Sangli
            </span>
            .
            <br />
            <br />
            Outside of coding, I enjoy spending time on activities that keep me
            creative and motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and tech startups 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Solving Real-World Problems through Scalable Web Solutions"{" "}
          </p>
          <footer className="blockquote-footer">Ritesh Harge</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;


