import { useState } from "react";
import { EXPERIENCE, SKILLS } from "../data/portfolio";

function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const role = EXPERIENCE[activeIndex];
  const count = EXPERIENCE.length;

  function step(direction) {
    setActiveIndex(index => (index + direction + count) % count);
  }

  return (
    <section className="experience-carousel" aria-label="Work history" aria-roledescription="carousel">
      <div className="experience-toolbar experience-arrows">
        <div className="experience-controls">
          <button type="button" aria-label="Previous experience" onClick={() => step(-1)}>←</button>
          <button type="button" aria-label="Next experience" onClick={() => step(1)}>→</button>
        </div>
      </div>

      <article className="experience-card" key={role.title} aria-labelledby="experience-role">
        <p className="experience-company">{role.company}</p>
        <h3 id="experience-role">{role.title}</h3>
        <p className="experience-date">{role.date}</p>
        <ul>
          {role.desc.map(bullet => <li key={bullet}>{bullet}</li>)}
        </ul>
      </article>

      <div className="experience-toolbar experience-footer">
        <p role="status" aria-atomic="true">
          {activeIndex + 1} / {count}
          <span className="experience-announcement">, {role.title} at {role.company}</span>
        </p>
        <div className="experience-controls" role="group" aria-label="Choose an experience">
          {EXPERIENCE.map((entry, index) => (
            <button
              type="button"
              key={entry.title}
              aria-label={`${entry.title} at ${entry.company}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Experiences() {
  return (
    <div style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <p className="section-label">Background</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--text)" }}>Experiences</h2>
        </div>
        <a href="/resume.pdf" download={"Isaac_Rico_Resume.pdf"} style={{ fontSize: "0.72rem", letterSpacing: "0.08em", padding: "0.65rem 1.4rem", background: "transparent", color: "var(--btnSecondaryText)", border: `1px solid var(--border)`, alignSelf: "flex-end" }}>
          Download PDF ↓
        </a>
      </div>

      <ExperienceCarousel />

      <div style={{ marginBottom: "3rem" }}>
        <div className="section-divider">Education</div>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontFamily: "'Lora', serif", fontSize: "1rem", fontWeight: 500, color: "var(--text)" }}>B.S. in Computer Engineering</span>
            <span style={{ fontSize: "0.7rem", color: "var(--textFaint)" }}>Sept 2021 – June 2025 · Irvine, CA</span>
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--accent)", marginBottom: "0.5rem" }}>University of California, Irvine</div>
          <div style={{ fontSize: "0.78rem", color: "var(--textMuted)", lineHeight: 1.75 }}>Relevant coursework: Embedded Systems, Computer Networks, Operating Systems, Computer Architecture, Data Analysis, Machine Learning/AI, Digital Logic Design.</div>
        </div>
      </div>

      <section aria-labelledby="skills-heading">
        <h3 className="section-divider" id="skills-heading">Skills</h3>
        <div className="experience-skill-groups">
          {SKILLS.map(({ category, items }) => (
            <div key={category}>
              <h4>{category}</h4>
              <ul>
                {items.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
