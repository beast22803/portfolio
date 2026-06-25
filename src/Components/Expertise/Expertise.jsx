import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Expertise.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";


function Expertise({ Width }) {
  return (
    <section id="expertise" className="expert-section py-5 border-bottom border-dark newsprint-bg">
      <div className="container-xl px-4">
        {/* Section Header */}
        <div className="text-center border-bottom border-dark pb-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-uppercase text-danger font-weight-bold mb-2 d-block">
            {"// SKILLS & FIELD EXPERTISE"}
          </span>
          <h2 className="expert-section-head font-serif text-uppercase tracking-tighter m-0">
            Field Expertise & Skills
          </h2>
        </div>

        {/* 3-Column Newspaper Grid */}
        <Row className="g-0 border border-dark">
          {/* Column 1 */}
          <Col lg={4} className="expert-col border-bottom border-lg-none border-dark-right">
            <div className="expert-card p-4 p-md-5 d-flex flex-column h-100 justify-content-between">
              <div>
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper border border-dark p-2 me-3 bg-white">
                    <HiOutlineDesktopComputer className="expert-icon text-dark" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">SECTION A</span>
                    <h3 className="expert-card-title font-serif text-uppercase m-0">Languages & AI</h3>
                  </div>
                </div>
                <p className="font-body text-justify leading-relaxed text-muted-600 mb-4">
                  Skilled in functional and object-oriented paradigms. Experienced in training, fine-tuning, and evaluating Vision Transformers (ViT) and CNN architectures in PyTorch, handling data preparation pipelines, and deploying LLM routing systems.
                </p>
              </div>
              <div className="mt-auto">
                <h5 className="font-mono text-xs tracking-wider text-uppercase border-top border-dark pt-3 mb-2">Technologies</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["Python", "Java", "C/C++", "JS/TS", "SQL", "PyTorch", "TensorFlow", "NumPy", "Pandas", "Matplotlib"].map((tech, idx) => (
                    <span key={idx} className="badge-mono font-mono text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Column 2 */}
          <Col lg={4} className="expert-col border-bottom border-lg-none border-dark-right">
            <div className="expert-card p-4 p-md-5 d-flex flex-column h-100 justify-content-between">
              <div>
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper border border-dark p-2 me-3 bg-white">
                    <FaReact className="expert-icon text-dark" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">SECTION B</span>
                    <h3 className="expert-card-title font-serif text-uppercase m-0">Frontend Systems</h3>
                  </div>
                </div>
                <p className="font-body text-justify leading-relaxed text-muted-600 mb-4">
                  Focused on building user-centric, high-performance web systems. Proficient in modern frontend frame architectures, including state management, routing, code splitting, lazy loading, and core web vitals optimization.
                </p>
              </div>
              <div className="mt-auto">
                <h5 className="font-mono text-xs tracking-wider text-uppercase border-top border-dark pt-3 mb-2">Technologies</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Angular", "Tailwind CSS", "Redux", "HTML5/CSS3", "Bootstrap"].map((tech, idx) => (
                    <span key={idx} className="badge-mono font-mono text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Column 3 */}
          <Col lg={4} className="expert-col">
            <div className="expert-card p-4 p-md-5 d-flex flex-column h-100 justify-content-between">
              <div>
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper border border-dark p-2 me-3 bg-white">
                    <FaNodeJs className="expert-icon text-dark" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">SECTION C</span>
                    <h3 className="expert-card-title font-serif text-uppercase m-0">Backend & DevOps</h3>
                  </div>
                </div>
                <p className="font-body text-justify leading-relaxed text-muted-600 mb-4">
                  Designing secure and optimized server architectures, RESTful APIs, and database schemes. Experienced in containerizing apps, writing comprehensive testing suites, and automating pipelines for reliable deployment.
                </p>
              </div>
              <div className="mt-auto">
                <h5 className="font-mono text-xs tracking-wider text-uppercase border-top border-dark pt-3 mb-2">Technologies</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git/GitLab", "Jest", "CI/CD"].map((tech, idx) => (
                    <span key={idx} className="badge-mono font-mono text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>


      </div>
    </section>
  );
}

export default Expertise;
