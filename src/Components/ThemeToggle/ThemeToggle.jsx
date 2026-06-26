import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn hard-shadow-hover"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="toggle-icon text-dark" style={{ color: "var(--fg-ink)" }} />
      ) : (
        <FaSun className="toggle-icon text-danger" style={{ color: "var(--accent-red)" }} />
      )}
    </button>
  );
}

export default ThemeToggle;
