import React from "react";

function CreationCard({ image, title, category, description, githubLink }) {
  const handleButtonClick = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <div className="project-card border border-dark bg-white p-4 h-100 d-flex flex-column justify-content-between hard-shadow-hover">
      <div>
        {/* Project Thumbnail Image */}
        <div className="project-img-wrapper border border-dark overflow-hidden mb-3 position-relative" onClick={handleButtonClick} style={{ cursor: "pointer" }}>
          <img 
            src={image} 
            alt={title} 
            className="w-100 editorial-img" 
            style={{ height: "180px", objectFit: "cover" }}
          />
        </div>

        {/* Project Meta */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="font-mono text-xs text-danger tracking-wider uppercase">{category}</span>
        </div>

        {/* Project Title */}
        <h3 className="font-serif text-uppercase tracking-tight mb-3" style={{ fontSize: "1.35rem", fontWeight: "800" }}>
          {title}
        </h3>

        {/* Project Description */}
        <p className="font-body text-justify text-muted-600 mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
          {description}
        </p>
      </div>

      {/* Button */}
      <button 
        onClick={handleButtonClick}
        className="btn btn-outline-dark font-sans text-uppercase text-xs tracking-widest py-2 px-3 w-100"
      >
        View Source ↗
      </button>
    </div>
  );
}

export default CreationCard;
