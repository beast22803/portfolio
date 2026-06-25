import "./Contact.css";
import { Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact({ Width, sectionRef }) {
  return (
    <section ref={sectionRef} id="contact" className="contact-section py-5 newsprint-bg">
      <div className="container-xl px-4">
        {/* Section Header */}
        <div className="text-center border-bottom border-dark pb-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-uppercase text-danger font-weight-bold mb-2 d-block">
            {"// GET IN TOUCH & CORRESPONDENCE"}
          </span>
          <h2 className="contact-section-head font-serif text-uppercase tracking-tighter m-0">
            Professional Inquiries & Contact
          </h2>
        </div>

        <Row className="g-5">
          {/* Left Column: Contact Text */}
          <Col lg={5} className="border-lg-right border-dark pe-lg-5 mb-4 mb-lg-0">
            <div>
              <h3 className="font-serif text-uppercase tracking-tight mb-3" style={{ fontWeight: "800", fontSize: "1.75rem" }}>
                Let's Connect
              </h3>
              <p className="font-body text-justify text-muted-600 mb-4" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                If you find my projects intriguing, have an opening for a working student position, or wish to collaborate on AI and Full-Stack systems, please feel free to reach out.
              </p>
            </div>
          </Col>

          {/* Right Column: Contact Details ("Classified Ads") */}
          <Col lg={7} className="ps-lg-5 d-flex flex-column justify-content-between">
            {/* Classified Ads Block */}
            <div className="row g-3">
              {/* Email */}
              <div className="col-12">
                <a href="mailto:varshit.madi@gmail.com" className="classified-ad d-flex align-items-center border border-dark p-3 text-dark text-decoration-none bg-white hard-shadow-hover">
                  <div className="ad-icon-wrapper border-right border-dark pe-3 me-3 d-flex align-items-center justify-content-center">
                    <FaEnvelope className="text-danger" style={{ fontSize: "1.2rem" }} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">Email Address</span>
                    <strong className="font-sans text-sm tracking-wide">varshit.madi@gmail.com</strong>
                  </div>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="col-12 col-md-4">
                <a href="https://www.linkedin.com/in/varshitmadisetti/" target="_blank" rel="noopener noreferrer" className="classified-ad d-flex align-items-center border border-dark p-3 text-dark text-decoration-none bg-white h-100 hard-shadow-hover">
                  <div className="ad-icon-wrapper border-right border-dark pe-3 me-3 d-flex align-items-center justify-content-center">
                    <FaLinkedinIn className="text-danger" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">LinkedIn</span>
                    <strong className="font-sans text-xs tracking-wide">varshitmadisetti</strong>
                  </div>
                </a>
              </div>

              {/* GitHub */}
              <div className="col-12 col-md-4">
                <a href="https://github.com/beast22803" target="_blank" rel="noopener noreferrer" className="classified-ad d-flex align-items-center border border-dark p-3 text-dark text-decoration-none bg-white h-100 hard-shadow-hover">
                  <div className="ad-icon-wrapper border-right border-dark pe-3 me-3 d-flex align-items-center justify-content-center">
                    <FaGithub className="text-danger" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">GitHub</span>
                    <strong className="font-sans text-xs tracking-wide">beast22803</strong>
                  </div>
                </a>
              </div>

              {/* Instagram */}
              <div className="col-12 col-md-4">
                <a href="https://www.instagram.com/beast22803/" target="_blank" rel="noopener noreferrer" className="classified-ad d-flex align-items-center border border-dark p-3 text-dark text-decoration-none bg-white h-100 hard-shadow-hover">
                  <div className="ad-icon-wrapper border-right border-dark pe-3 me-3 d-flex align-items-center justify-content-center">
                    <FaInstagram className="text-danger" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted d-block uppercase tracking-wider">Instagram</span>
                    <strong className="font-sans text-xs tracking-wide">beast22803</strong>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer info at the absolute bottom of the paper */}
        <div className="border-top-4 border-dark mt-5 pt-4 text-center">
          <p className="font-mono text-xs text-uppercase tracking-widest mb-1">
            Varshit Madisetti Portfolio — Griesheim, Hesse, Germany
          </p>
          <p className="font-mono text-xs text-muted-500 m-0">
            © 2026 Varshit Madisetti. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
