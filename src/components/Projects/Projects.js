import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodify from "../../Assets/Projects/foodify.png";
import blog from "../../Assets/Projects/blog.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import interview from "../../Assets/Projects/interview.png";
import amazonai from "../../Assets/Projects/amazonai.png";
import StoreReviewX from "../../Assets/Projects/StoreReviewX.png";
import ChainPlinko from "../../Assets/Projects/ChainPlinko.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {" "}
          Highlighted <strong className="purple">Projects</strong>{" "}
        </h1>{" "}
        <p style={{ color: "white" }}>
          {" "}
          Solving Real-World Problems through Scalable Web Solutions{" "}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Foodify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodify}
              isBlog={false}
              title="Foodify"
              description="A full-stack food delivery app built with the MERN stack, featuring user authentication, menu browsing, order tracking, and Stripe payments. Includes a separate admin panel for managing menu items and orders, with Cloudinary for image storage and MongoDB Atlas for data management. Built with a clean, responsive UI for seamless user interaction."
              ghLink="https://github.com/riteshharge/Foodify-MERN"
              demoLink="https://foodify-mern.onrender.com"
            />
          </Col>

          {/* Remote Interview Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              isBlog={false}
              title="TalentIQ"
              description="An advanced remote interview platform featuring a VSCode-powered code editor, real-time video interviews, and secure code execution. Includes automated test evaluations, live chat, and interactive feedback for realistic interview sessions. Integrated with Clerk, Inngest, and CodeRabbit, and deployed on Render for scalability and performance."
              ghLink="https://github.com/riteshharge/TalentIQ"
              demoLink="" // live link under maintenance
            />
          </Col>

          {/* Amazon Product Listing with AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonai}
              isBlog={false}
              title="Amazon Product Listing with AI"
              description="A full-stack application that fetches Amazon product details using ASIN and generates AI-optimized versions of the listings using Gemini AI. Features include ASIN search history tracking, dual product cards (original vs. AI-optimized), and MySQL-based data storage. Built with React (Vite), Node.js, and Express."
              ghLink="https://github.com/riteshharge/OptimizeList-AI"
              demoLink="https://ai-powered-amazon-product-listing-xo2w.onrender.com"
            />
          </Col>

          {/* Feature-Rich Store Review App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StoreReviewX}
              isBlog={false}
              title="StoreReviewX – Full-Stack Role-Based Store Rating Platform"
              description="A full-stack role-based store rating platform built with React.js, Tailwind, Node.js, Express, and PostgreSQL. Features secure authentication with JWT, user signup, password updates, store searches, and rating submissions with edit support. Store owners get dashboards to view user ratings and average scores, while admins manage stores, users, and platform-wide analytics with sorting, filtering, and validation. Designed with a clean UI, responsive layouts, and best-practice backend architecture."
              ghLink="https://github.com/riteshharge/store-rating-app"
              demoLink="https://store-rating-application-nusg.onrender.com"
            />
          </Col>

          {/* ChainPlinko */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChainPlinko}
              isBlog={false}
              title="ChainPlinko – Provably Fair Cryptographic Gaming Engine"
              description="A provably fair Plinko-style game built with React, TypeScript, Node.js, Express, Prisma, and PostgreSQL. Implements a cryptographic HMAC-SHA256 commit–reveal system that ensures each round is independently verifiable. Features deterministic PRNG logic, reproducible outcomes, transparent verification via an in-app Verifier Modal and a standalone verify page, and smooth Canvas-driven animations engineered for fairness, accuracy, and full-stack reliability."
              ghLink="https://github.com/yourrepo/chainplinko"
              demoLink="https://fair-plinko-lab.onrender.com"
            />
          </Col>

          {/* Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Techfolio"
              description="A personal developer portfolio built with React.js and Bootstrap, showcasing my projects, skills, and professional experience. Features a clean, responsive, and visually engaging design with smooth navigation and interactive sections. Built to highlight technical expertise, problem-solving abilities, and front-end development skills."
              ghLink="https://github.com/riteshharge/techfolio"
              demoLink="https://techfolio-ritesh.vercel.app"
            />
          </Col>

          {/* Blog App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog App"
              description="A full-stack blogging application built with React.js, Node.js, Express.js, and MongoDB. Features JWT-based authentication, CRUD operations for blogs, comments, hashtags, and author mentions, with a clean, responsive, and interactive UI. Built to provide seamless content creation, management, and exploration"
              ghLink="https://github.com/riteshharge/Blog-MernStackDev-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
