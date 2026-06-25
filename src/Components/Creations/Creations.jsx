import React from "react";
import "./Creations.css";
import { Row, Col } from "react-bootstrap";
import CreationCard from "./CreationCard";

const coltran = `${process.env.PUBLIC_URL}/images/coltran.jpg`;
const zeroday = `${process.env.PUBLIC_URL}/images/zeroday.png`;
const crowd = `${process.env.PUBLIC_URL}/images/crowd.png`;
const jobanalyser = `${process.env.PUBLIC_URL}/images/jobanalyser.png`;

function Creations() {
  const primaryProjects = [
    {
      image: jobanalyser,
      title: "JobAnalyser — AI Job Assistant",
      category: "Web & AI",
      description: "Full-stack AI application (Next.js + FastAPI + SQLAlchemy) with a LangGraph self-improvement loop that generates, critiques, and refines cover letters against job descriptions. Supports OpenRouter and Ollama, with ATS scoring and application tracking.",
      githubLink: "https://github.com/beast22803/ai-job-application-assistant"
    },
    {
      image: coltran,
      title: "Colorisation Transformer",
      category: "Machine Learning",
      description: "Implemented a Vision Transformer (ViT) model in PyTorch to colourise grayscale images; achieved 72% SSIM through custom perceptual + L1 loss functions, data augmentation, and attention heatmap visualisation.",
      githubLink: "https://github.com/beast22803/Colorization-Transformer"
    },
    {
      image: zeroday,
      title: "Zero-Day Attack Detection",
      category: "Machine Learning",
      description: "ML pipeline for network intrusion detection achieving 87% precision, 91% recall, and 0.89 F1-score; reduced false positives by 18% via ROC-AUC threshold optimization and confusion matrix analysis.",
      githubLink: "https://github.com/beast22803/zero_day_attacks"
    },
    {
      image: crowd,
      title: "CrowdQuest Q&A Platform",
      category: "Web Development",
      description: "MERN-stack Q&A platform with JWT-based authentication, role-based access control, and optimised backend REST APIs with improved database query performance.",
      githubLink: "https://github.com/beast22803/Project-CrowdQuest"
    }
  ];

  const secondaryProjects = [
    {
      title: "Face and Eye Detection",
      category: "Machine Learning",
      description: "Computer vision project implementing real-time face and eye tracking using Haar cascades and custom filter cascades.",
      githubLink: "https://github.com/beast22803/Face-and-Eye-Detection"
    },
    {
      title: "Todo List Redux App",
      category: "Web Development",
      description: "Clean state management showcase using React, Redux toolkit, and localized state persistence.",
      githubLink: "https://github.com/beast22803/Todo-Redux-App"
    },
    {
      title: "Blog Website",
      category: "Web Development",
      description: "A blogging engine built withNode.js/Express, supporting markdown rendering and file-based article databases.",
      githubLink: "https://github.com/beast22803/Blog-Website"
    }
  ];

  return (
    <section id="creation" className="proj-section py-5 border-bottom border-dark newsprint-bg">
      <div className="container-xl px-4">
        {/* Section Header */}
        <div className="text-center border-bottom border-dark pb-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-uppercase text-danger font-weight-bold mb-2 d-block">
            {"// SELECTED CREATIONS & PROJECTS"}
          </span>
          <h2 className="proj-section-head font-serif text-uppercase tracking-tighter m-0">
            Selected Creations
          </h2>
        </div>

        {/* Primary Projects Grid */}
        <Row className="g-4 mb-5">
          {primaryProjects.map((project, index) => (
            <Col key={index} xs={12} md={6}>
              <CreationCard
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                githubLink={project.githubLink}
              />
            </Col>
          ))}
        </Row>

        {/* Section Divider */}
        <div className="py-4 text-center font-serif text-2xl text-muted tracking-[1em] border-top border-dark mt-5 pt-5">
          ✦ ✦ ✦
        </div>

        {/* Secondary Projects Section */}
        <div className="mt-4">
          <h4 className="font-sans text-xs tracking-widest text-uppercase border-bottom border-dark pb-2 mb-4">
            Supplementary Creations & Repositories
          </h4>
          <Row className="g-4">
            {secondaryProjects.map((project, index) => (
              <Col key={index} xs={12} md={4}>
                <div className="secondary-project-card border border-dark p-4 bg-white h-100 d-flex flex-column justify-content-between hard-shadow-hover">
                  <div>
                    <span className="font-mono text-xs text-danger tracking-wider uppercase d-block mb-1">{project.category}</span>
                    <h5 className="font-serif text-uppercase tracking-tight mb-2" style={{ fontWeight: "700" }}>{project.title}</h5>
                    <p className="font-body text-justify text-muted-600 mb-3" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{project.description}</p>
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-dark font-weight-bold text-decoration-none border-top border-dark pt-2 mt-2 d-block hover-red"
                  >
                    Source Code ↗
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}

export default Creations;
