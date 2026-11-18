import { useState } from "react";
import { PROJECTS } from "../data/portfolio";

const categories = ["All", ...new Set(PROJECTS.map(project => project.category))];

export default function Projects() {
  const [category, setCategory] = useState("All");
  const projects = category === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === category);

  return (
    <div style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
      <p className="section-label">Work</p>
      <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "var(--text)" }}>Projects</h2>
      <p style={{ fontSize: "0.8rem", color: "var(--textFaint)", marginBottom: "3rem" }}>
        A selection of personal, school, and open-source projects. Full list on{" "}
        <a href="https://github.com/isaac-rico" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>GitHub ↗</a>
      </p>
      <div className="project-filters" role="group" aria-label="Filter projects by area">
        {categories.map(option => (
          <button
            type="button"
            key={option}
            className="project-filter"
            aria-pressed={category === option}
            onClick={() => setCategory(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="project-count" role="status">
        {projects.length} {projects.length === 1 ? "project" : "projects"}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "1px", background: "var(--border)", border: `0.5px solid var(--border)` }}>
        {projects.map(p => (
          <article key={p.name} style={{ background: "var(--bgCard)", padding: "1.75rem", display: "flex", flexDirection: "column", transition: "background 0.25s" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.6rem", color: "var(--text)" }}>{p.name}</h3>
            <div style={{ fontSize: "0.76rem", color: "var(--textMuted)", lineHeight: 1.75, marginBottom: "1.25rem", flex: 1 }}>{p.desc}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
              {p.tags.map(tag => (
                <span key={tag} style={{ fontSize: "0.62rem", padding: "0.2rem 0.5rem", background: "var(--bgTag)", color: "var(--textTag)", letterSpacing: "0.03em" }}>{tag}</span>
              ))}
            </div>
            <details className="explore-disclosure project-disclosure">
              <summary>How it works</summary>
              <p>{p.approach}</p>
            </details>
            <a href={p.url} target="_blank" rel="noreferrer" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
              View on GitHub ↗
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
