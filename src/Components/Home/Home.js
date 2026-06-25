import React from "react";
import './Home.css';

function Home({ sectionRef, refs, scrollToSection }) {
  return (
    <section ref={sectionRef} id="home" className="home-section py-5 newsprint-bg newsprint-texture border-bottom border-dark">
      <div className="container-xl px-4 mt-4">
        {/* Newspaper main headline */}
        <div className="row text-center text-md-start border-bottom border-dark pb-4">
          <div className="col-12">
            <span className="font-mono text-xs tracking-widest text-uppercase text-danger font-weight-bold mb-2 d-block">
              {"// BIOGRAPHY & PROFILE OVERVIEW"}
            </span>
            <h1 className="name-headline font-serif text-uppercase tracking-tighter m-0">
              Varshit Madisetti
            </h1>
            <p className="lead-subtitle font-sans text-uppercase text-xs tracking-widest mt-2 mb-0">
              Full-Stack Developer & AI/ML Engineer · Pursuing M.Sc. at TU Darmstadt
            </p>
          </div>
        </div>

        {/* Editorial Story Layout */}
        <div className="row mt-4 pt-2 gap-4 gap-md-0">
          {/* Column 1: Sidebar Stats (Left Side) */}
          <div className="col-12 col-md-4 col-lg-3 border-md-right border-dark pr-md-4 pb-4 pb-md-0">
            <div className="d-flex flex-column">
              <div className="sidebar-stats">
                <h5 className="font-sans text-xs tracking-widest text-uppercase border-bottom border-dark pb-2 mb-3">
                  Portfolio Highlights
                </h5>
                <ul className="list-unstyled font-mono text-xs pl-0">
                  <li className="mb-2"><strong>EXPERIENCE:</strong> 1.5+ Years Prof.</li>
                  <li className="mb-2"><strong>M.SC. FOCUS:</strong> Deep Learning, RL, CV</li>
                  <li className="mb-2"><strong>DATABASES:</strong> SQL, NoSQL</li>
                  <li className="mb-0"><strong>DEV STACK:</strong> React, Next.js, Node</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: Story Paragraphs (Right Side) */}
          <div className="col-12 col-md-8 col-lg-9 pl-md-4">
            <article className="story-content">
              <h2 className="story-title font-serif text-uppercase tracking-tight mb-3">
                Full-Stack Systems and Intelligent Models Combined
              </h2>
              <p className="drop-cap text-justify font-body leading-relaxed mb-4">
                Full-stack developer and AI/ML engineer with 1.5+ years of professional experience delivering production software and intelligent systems across the entire stack. Proficient in Angular, React, Next.js, Node.js, Python, and PyTorch, with hands-on experience across the full ML pipeline from data preparation to model evaluation and deployment.
              </p>
              <p className="text-justify font-body leading-relaxed mb-4">
                Varshit has delivered measurable results across diverse positions: reducing inventory misorders by 50%, accelerating page speeds by 40%, and designing anomaly pipelines with 87% threat detection accuracy. Comfortable using modern AI development tools — Cursor AI, Claude, OpenAI, and OpenRouter APIs — to move fast, test well, and build robust software.
              </p>
              <p className="text-justify font-body leading-relaxed mb-4">
                He is currently pursuing an M.Sc. in AI & Machine Learning at TU Darmstadt, aiming to specialize in Deep Learning, Reinforcement Learning, Computer Vision, and NLP. Varshit is seeking a Werkstudent (working student) role in software engineering or AI within Germany to continue shipping clean production code.
              </p>
              <div className="mt-4 pt-3 border-top border-dark d-flex flex-wrap gap-3">
                <a 
                  href="#contact" 
                  className="btn btn-outline-dark font-sans text-uppercase text-xs tracking-widest py-2 px-3 hard-shadow-hover"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(refs.contact);
                  }}
                >
                  Get In Touch
                </a>
                <a 
                  href="#creation" 
                  className="btn btn-dark font-sans text-uppercase text-xs tracking-widest py-2 px-3 bg-dark text-white hard-shadow-hover"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(refs.creations);
                  }}
                >
                  View Creations
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Stats Ticker Marquee */}
      <div className="ticker-wrap mt-5 bg-dark text-white py-2 border-top border-bottom border-dark overflow-hidden">
        <div className="newsprint-marquee">
          <div className="newsprint-marquee-content font-mono text-xs tracking-widest">
            ★ KEY METRIC: 50% REDUCTION IN STOCK OUT MISORDERS AT FRESH PRINTS ★ KEY METRIC: 40% FASTER PAGE LOADS SECURED ★ KEY METRIC: 87% DETECTION ACCURACY FOR ZERO-DAY ML PIPELINES ★ KEY METRIC: 72% SSIM ON IMAGE COLORISATION VISION TRANSFORMERS ★ ACADEMIC STANDING: M.SC. IN AI UNDERWAY AT TU DARMSTADT ★ 
            &nbsp;&nbsp;&nbsp;&nbsp;
            ★ KEY METRIC: 50% REDUCTION IN STOCK OUT MISORDERS AT FRESH PRINTS ★ KEY METRIC: 40% FASTER PAGE LOADS SECURED ★ KEY METRIC: 87% DETECTION ACCURACY FOR ZERO-DAY ML PIPELINES ★ KEY METRIC: 72% SSIM ON IMAGE COLORISATION VISION TRANSFORMERS ★ ACADEMIC STANDING: M.SC. IN AI UNDERWAY AT TU DARMSTADT ★ 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;