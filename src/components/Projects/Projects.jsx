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
import Chatify from "../../Assets/Projects/Chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* ---------- FIXED HEADINGS ---------- */}
        <h1 className="project-heading">
          Highlighted <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Solving Real-World Problems through Scalable Web Solutions
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Foodify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodify}
              isBlog={false}
              title="Foodify - Food Delivery Application"
              description="A full-stack food ordering platform built with the MERN stack featuring JWT authentication, dynamic menus, cart functionality, order tracking, and Stripe payments. Includes a responsive admin dashboard for managing menus listings and orders. Backend provides optimized REST APIs, and the UI uses reusable components for a smooth user experience."
              ghLink="https://github.com/riteshharge/Foodify-MERN"
              Live_App="https://foodify-mern.onrender.com"
            />
          </Col>

          {/* Chatify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatify}
              isBlog={false}
              title="Chatify - Real-Time Chat Application"
              description="A real-time chat application built with the MERN stack featuring custom JWT authentication, 1:1 messaging via Socket.io, online/offline presence, typing indicators, and Cloudinary-powered image sharing. Includes a secure backend with 9 REST APIs using Arcjet protection and a responsive frontend with reusable React components for smooth interaction."
              ghLink="https://github.com/riteshharge/Chatify"
              Live_App="https://chatify-real-time-chat.onrender.com"
            />
          </Col>

          {/* Amazon Product Listing with AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonai}
              isBlog={false}
              title="Amazon Product Listing with AI"
              description="An AI-powered tool that fetches Amazon product details via ASIN and generates SEO-optimized listings using Gemini AI. Features include ASIN search history, dual product cards showing original vs AI-enhanced content, and MySQL-backed data storage. Built with a Vite React frontend and a high-performance Express backend for seamless use."
              ghLink="https://github.com/riteshharge/OptimizeList-AI"
              Live_App="https://ai-powered-amazon-product-listing-xo2w.onrender.com"
            />
          </Col>

          {/* Feature-Rich Store Review App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StoreReviewX}
              isBlog={false}
              title="StoreReviewX – Role-Based Store Rating Platform"
              description="A full-stack role-based store rating platform built with React, Tailwind, Node.js, Express, and PostgreSQL. Includes JWT auth, user signup, password updates, store search, and rating submissions with edit support. Store owners get rating dashboards, while admins manage stores, users, and analytic insights across the platform."
              ghLink="https://github.com/riteshharge/store-rating-app"
              Live_App="https://store-rating-application-nusg.onrender.com"
            />
          </Col>

          {/* ChainPlinko */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChainPlinko}
              isBlog={false}
              title="ChainPlinko – Provably Fair Cryptographic Gaming Engine"
              description="A provably fair Plinko-style game built with React, TypeScript, Node.js, Express, Prisma, and PostgreSQL. It implements an HMAC-SHA256 commit-reveal system ensuring every round is independently verifiable. Features deterministic PRNG logic, transparent checking through an in-app Verifier Modal, and smooth Canvas animations designed for fairness and accuracy."
              ghLink="https://github.com/riteshharge/fair-plinkohttps://github.com/riteshharge/fair-plinko"
              Live_App="https://fair-plinko-lab.onrender.com"
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
              Live_App="https://techfolio-ritesh.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
