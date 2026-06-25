export const experiences = [
  {
    role: "Full Stack Engineer",
    company: "Fresh Prints",
    duration: "JULY 2025 - APRIL 2026",
    location: "Remote",
    link: "https://freshprints.com/",
    description:
      "Rebuilt the internal sales dashboard end to end — including the Orders and To-Dos pages — owning the Angular (TypeScript) front-end and the Node.js/Express back-end APIs, eliminating stale inventory states and reducing out-of-stock misorders by 50%. Identified database bottlenecks, optimized complex queries, and deployed replacement endpoints. Reduced production bugs by 35% using comprehensive Jest testing and collaboration in Agile sprints.",
    techStack: ["Angular", "TypeScript", "Node.js", "Express.js", "Jest", "Agile"],
    image: `${process.env.PUBLIC_URL}/images/FP.jpeg`
  },
  {
    role: "Full Stack Developer Intern",
    company: "Fresh Prints",
    duration: "JANUARY 2025 - JUNE 2025",
    location: "Remote",
    link: "https://freshprints.com/",
    description:
      "Built a high-performance Next.js/TypeScript marketing page end to end, achieving 95+ Lighthouse scores and 40% faster page loads through strategic code splitting, lazy loading, and image compression. Resolved critical production bugs during peak traffic periods with minimal downtime, maintaining 99.5% platform uptime, and contributed to internal ML visualisation tooling.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lighthouse", "ML Tooling"],
    image: `${process.env.PUBLIC_URL}/images/FP.jpeg`
  },
  {
    role: "ML Research Intern",
    company: "CyberGuard360",
    duration: "APRIL 2023 - DECEMBER 2023",
    location: "Hyderabad, India",
    link: "https://cyberguard360.com/",
    description:
      "Designed and built an end-to-end anomaly-detection pipeline in Python — including data cleaning, feature normalisation, and stratified cross-validation — achieving 87% detection accuracy (ROC-AUC 0.94) and 18% fewer false positives. Automated risk-assessment workflows with intelligent question-linking logic, reducing manual effort by 30% and generating structured, actionable security insights.",
    techStack: ["Python", "Machine Learning", "Data Pipelines", "Security Auditing", "Automation"],
    image: `${process.env.PUBLIC_URL}/images/CG360.jpeg`
  },
  {
    role: "Full Stack Developer Intern",
    company: "Owonto",
    duration: "APRIL 2023 - JULY 2023",
    location: "Bengaluru, India",
    link: "https://www.linkedin.com/company/owonto/",
    description:
      "Architected and shipped a responsive full-stack web application, owning both front-end UI and back-end systems; built secure authentication workflows and optimised user experience across desktop and mobile devices.",
    techStack: ["ReactJS", "MUI", "Redux", "Node.js", "MySQL", "UX Optimization"],
    image: `${process.env.PUBLIC_URL}/images/Owonto.jpeg`
  }
];