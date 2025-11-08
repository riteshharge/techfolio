import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">MERN Stack Developer</b>{" "}
              focused on building fast, scalable, and user-friendly web
              applications.
              <br />
              <br />
              During my{" "}
              <b className="purple">
                6-month internship at ECS Software Technology Pvt. Ltd., Pune
              </b>
              , I designed and optimized RESTful APIs, implemented secure
              authentication systems, and enhanced frontend–backend performance.{" "}
              I also{" "}
              <b className="purple">
                collaborated closely with senior developers
              </b>{" "}
              in code reviews, debugging, and feature planning — which helped me
              strengthen my problem-solving skills and understand real-world
              software development practices.
              <br />
              <br />
              I’m proficient in{" "}
              <b className="purple">
                JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, and
                MySQL
              </b>
              . I enjoy developing complete web solutions that combine solid
              logic with clean, maintainable design.
              <br />
              <br />
              My interests lie in{" "}
              <b className="purple">
                full-stack development, performance optimization, and cloud
                deployment
              </b>
              . I’m always eager to learn and apply modern technologies that
              make web solutions more efficient and scalable.
              <br />
              <br />I primarily work with <b className="purple">
                React.js
              </b> and <b className="purple">Node.js</b>, and I’m currently
              exploring <b className="purple">Next.js</b> to create dynamic,
              production-grade applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Ritesh Harge Avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
