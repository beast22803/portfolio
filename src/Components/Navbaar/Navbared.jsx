import React, { useState } from "react";
import './Navbared.css';
import { Typewriter } from "react-simple-typewriter";

function Navbared({ Width }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="newsprint-header w-100 newsprint-bg">
      {/* Top Metadata Row */}
      <div className="header-meta d-flex justify-content-between align-items-center py-2 px-3 border-bottom border-dark font-mono text-uppercase">
        <span className="d-none d-md-inline text-xs tracking-wider">Griesheim, Hesse, Germany</span>
        <span className="text-xs tracking-wider text-center flex-grow-1 flex-md-grow-0">Digital Portfolio</span>
        <span className="text-xs tracking-wider text-end">{today}</span>
      </div>

      {/* Main Masthead / Logo */}
      <div className="header-masthead text-center py-4 border-bottom border-dark position-relative">
        <a href="#home" className="text-decoration-none text-dark">
          <h1 className="masthead-title font-serif m-0 tracking-tighter text-uppercase">
            The Daily Stack
          </h1>
        </a>
        <div className="masthead-slogan font-mono text-xs text-muted-600 mt-2">
          <span>{"// "}</span>
          <Typewriter 
            words={[
              "All the code that's fit to compile.",
              "Varshit Madisetti — Digital Portfolio.",
              "Full-Stack Developer & AI/ML Engineer."
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={toggleMenu} 
          className="mobile-nav-toggle d-block d-lg-none position-absolute"
          aria-label="Toggle Navigation"
          aria-expanded={menuOpen}
        >
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Navigation Menu Row */}
      <nav className={`header-nav border-bottom border-dark ${menuOpen ? "show" : ""} d-lg-block`}>
        <div className="nav-container d-flex flex-column flex-lg-row justify-content-center align-items-stretch">
          <a href="#expertise" className="nav-item font-sans text-uppercase text-xs tracking-widest text-decoration-none text-dark py-3 px-4 border-bottom border-lg-none border-dark" onClick={() => setMenuOpen(false)}>
            Expertise
          </a>
          <a href="#creation" className="nav-item font-sans text-uppercase text-xs tracking-widest text-decoration-none text-dark py-3 px-4 border-bottom border-lg-none border-dark" onClick={() => setMenuOpen(false)}>
            Creations
          </a>
          <a href="#experience" className="nav-item font-sans text-uppercase text-xs tracking-widest text-decoration-none text-dark py-3 px-4 border-bottom border-lg-none border-dark" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" className="nav-item font-sans text-uppercase text-xs tracking-widest text-decoration-none text-dark py-3 px-4 border-bottom border-lg-none border-dark" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbared;
