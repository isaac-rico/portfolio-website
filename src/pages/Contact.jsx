import { CONTACTS } from "../data/portfolio";

export default function Contact() {
  return (
    <div style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
      <p className="section-label">Reach Out</p>
      <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "1.5rem", color: "var(--text)" }}>Contact</h2>
      <p style={{ fontSize: "0.82rem", color: "var(--textMuted)", lineHeight: 1.9, maxWidth: 420, marginBottom: "3rem" }}>
        Open to new opportunities in data analytics &amp; engineering, reliability engineering, software engineering, and physical AI. Feel free to reach out about roles, collaborations, or just to connect.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: `0.5px solid var(--border)`, maxWidth: 500 }}>
        {CONTACTS.map(item => {
          const Row = item.href ? "a" : "div";
          return (
          <Row
            key={item.label}
            href={item.href ?? undefined}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noreferrer" : undefined}
            style={{ background: "var(--bgCard)", padding: "1.2rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: item.href ? "pointer" : "default", transition: "background 0.15s" }}
            onMouseEnter={e => { if (item.href) e.currentTarget.style.background = "var(--bgHover)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--bgCard)"; }}
          >
            <div>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--textLabel)", marginBottom: "0.2rem" }}>{item.label}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text)" }}>{item.value}</div>
            </div>
            {item.href && <span style={{ fontSize: "0.75rem", color: "var(--arrowColor)" }}>↗</span>}
          </Row>
          );
        })}
      </div>
    </div>
  );
}
