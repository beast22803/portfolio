import React from "react";
import "./Experience.css";
import { Row, Col } from "react-bootstrap";
import { experiences } from "./data";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

function Experience({ Width, sectionRef }) {
  return (
    <section ref={sectionRef} id="experience" className="experi-section py-5 border-bottom border-dark newsprint-bg">
      <div className="container-xl px-4">
        {/* Section Header */}
        <div className="text-center border-bottom border-dark pb-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-uppercase text-danger font-weight-bold mb-2 d-block">
            {"// RECORD OF PROFESSIONAL & ACADEMIC STANDING"}
          </span>
          <h2 className="experi-section-head font-serif text-uppercase tracking-tighter m-0">
            Work Experience & Education
          </h2>
        </div>

        <Row className="g-5">
          {/* Left Column: Work Experience (8-col on desktop) */}
          <Col lg={8} className="pe-lg-5 border-lg-right border-dark">
            <h4 className="font-sans text-xs tracking-widest text-uppercase border-bottom border-dark pb-2 mb-4">
              Chronological Work Record
            </h4>
            <div className="work-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className={`work-item ${index !== experiences.length - 1 ? "border-bottom border-dark pb-4 mb-4" : ""}`}>
                  {/* Job Header */}
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2">
                    <h3 className="font-serif text-uppercase tracking-tight m-0" style={{ fontSize: "1.25rem", fontWeight: "800" }}>
                      {exp.role} <span className="text-danger">@</span> {exp.company}
                    </h3>
                    <span className="font-mono text-xs text-muted-600 font-weight-bold mt-1 mt-md-0">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Metadata Row */}
                  <div className="d-flex flex-wrap gap-3 font-mono text-xs text-muted-500 mb-3">
                    <span className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-1 text-danger" /> {exp.location}
                    </span>
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none d-flex align-items-center hover-red-text">
                      <FaExternalLinkAlt className="me-1 text-danger" style={{ fontSize: "0.7rem" }} /> {new URL(exp.link).hostname}
                    </a>
                  </div>

                  {/* Description */}
                  <p className="font-body text-justify text-muted-600 mb-3" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {exp.description}
                  </p>

                  {/* Technologies used */}
                  <div className="d-flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="font-mono text-xs bg-light border border-dark px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Column: Education & Supplements (4-col on desktop) */}
          <Col lg={4} className="ps-lg-4">
            {/* Education Section */}
            <div className="mb-5">
              <h4 className="font-sans text-xs tracking-widest text-uppercase border-bottom border-dark pb-2 mb-4">
                Academic Qualifications
              </h4>
              <div className="education-list font-sans">
                {/* Degree 1 */}
                <div className="education-item mb-4 pb-4 border-bottom border-dashed border-dark">
                  <span className="font-mono text-xs text-danger tracking-wider uppercase d-block mb-1">04/2026 — Present</span>
                  <h5 className="font-serif text-uppercase tracking-tight m-0" style={{ fontSize: "1.1rem", fontWeight: "700" }}>
                    M.Sc. AI & Machine Learning
                  </h5>
                  <p className="font-sans text-xs text-muted-600 mb-2">TU Darmstadt, Germany</p>
                  <p className="font-body text-justify text-xs text-muted-600 mb-0">
                    <strong>Focus:</strong> Deep Learning, Reinforcement Learning, Computer Vision, and NLP.
                  </p>
                </div>

                {/* Degree 2 */}
                <div className="education-item">
                  <span className="font-mono text-xs text-danger tracking-wider uppercase d-block mb-1">2021 — 2025</span>
                  <h5 className="font-serif text-uppercase tracking-tight m-0" style={{ fontSize: "1.1rem", fontWeight: "700" }}>
                    B.Tech Computer Science
                  </h5>
                  <p className="font-sans text-xs text-muted-600 mb-2">Osmania University, India</p>
                  <p className="font-body text-justify text-xs text-muted-600 mb-0">
                    <strong>GPA:</strong> 8.26 / 10.0 <br />
                    <strong>Thesis:</strong> Transformer-Based Text Translation using custom attention models.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="mb-5">
              <h4 className="font-sans text-xs tracking-widest text-uppercase border-bottom border-dark pb-2 mb-4">
                Language Capacities
              </h4>
              <table className="table table-sm table-borderless font-mono text-xs mb-0">
                <tbody>
                  <tr>
                    <td className="ps-0 font-weight-bold text-uppercase" style={{ width: "40%" }}>English</td>
                    <td className="text-muted-600">— C1 (Full Professional)</td>
                  </tr>
                  <tr>
                    <td className="ps-0 font-weight-bold text-uppercase">German</td>
                    <td className="text-muted-600">— A2 (Limited Working)</td>
                  </tr>
                  <tr>
                    <td className="ps-0 font-weight-bold text-uppercase">Telugu</td>
                    <td className="text-muted-600">— Native</td>
                  </tr>
                  <tr>
                    <td className="ps-0 font-weight-bold text-uppercase">Hindi</td>
                    <td className="text-muted-600">— Professional Working</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Certifications Section */}
            <div>
              <h4 className="font-sans text-xs tracking-widest text-uppercase border-bottom border-dark pb-2 mb-4">
                Certifications
              </h4>
              <ul className="list-unstyled pl-0 font-body text-xs text-muted-600">
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-danger me-2">✦</span>
                  <span>Web Development Specialist Certification</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-danger me-2">✦</span>
                  <span>Advanced Programming in Java — NPTEL</span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="text-danger me-2">✦</span>
                  <span>Python: The Joy of Computing — IIT Madras</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Experience;
