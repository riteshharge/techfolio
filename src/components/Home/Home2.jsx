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
              Hi, I’m <b className="purple">Ritesh Harge</b> — a{" "}
              <b className="purple">MERN Full Stack Developer</b> skilled in
              building scalable, user-friendly web applications with React.jsx ,
              Node.jsx , Express.jsx , MongoDB, and MySQL.
              <br />
              <br />
              During my{" "}
              <b className="purple">
                6-month internship at ECS Software Technology Pvt. Ltd., Pune
              </b>
              , I designed and optimized RESTful APIs, implemented secure
              authentication systems, and enhanced frontend–backend performance.
              I also collaborated on full-stack projects, gaining practical
              experience in designing, developing, deploying and maintaining web
              applications.
              <br />
              <br />I have hands-on experience in designing user-friendly
              workflows, implementing secure authentication, and{" "}
              <b className="purple">
                deploying production-ready full-stack applications to the cloud
              </b>{" "}
              on platforms like Render, Vercel, and Netlify.
              <br />
              <br />
              Actively seeking a full-stack developer role to contribute my
              technical expertise and continuously enhance my skills and
              knowledge.
              <br />
              <br />I primarily work with <b className="purple">
                React.jsx
              </b>{" "}
              and <b className="purple">Node.jsx</b>, and I’m currently
              exploring <b className="purple">Next.jsx</b> to create dynamic,
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
