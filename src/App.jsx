import { useState } from "react";
// import SplitText from "./SplitText";

const NAV = ["Home", "Projects", "Resume", "Contact"];

const PROJECTS = [
  {
    name: "Apple Product Sales Dashboard",
    desc: "Interactive Apache Superset dashboard analyzing Apple product sales (2022–2024), with Linear Regression and Random Forest models to forecast revenue demand using pricing, discount, and customer rating features.",
    tags: ["Apache Superset", "Python", "SQL", "Scikit-Learn"],
    url: "https://github.com/isaac-rico/Analytics-Portfolio/tree/9d2d4b412fdc9d0182377b0567f6053c43f7eaff/Apple-Product-Analysis",
  },
  
  {
    name: "Olist E-Commerce Analysis",
    desc: "End-to-end data analytics pipeline of data from the Olist Brazilian e-commerce platform (2017–2018) using dbt, Snowflake, and Apache Superset",
    tags: ["dbt", "Snowflake", "SQL", "Apache Superset", "Business Intelligence"],
    url: "https://github.com/isaac-rico/Analytics-Portfolio/tree/602d6f3a511b834cce194507352c14867a8e8115/E-Commerce%20Analysis",
  },
  {
    name: "MockingBird Robotic Hand",
    desc: "Gesture-controlled robotic hand using a Raspberry Pi, PCA9685 servo controller, and real-time computer vision to replicate human hand movements via finger-angle socket transmission.",
    tags: ["Python", "MediaPipe", "OpenCV", "Raspberry Pi"],
    url: "https://github.com/isaac-rico",
  },
  {
    name: "FUSION Motion-Controlled Rover",
    desc: "Co-led a team of 8 to build a motion-controlled rover with embedded control systems, integrating flex sensors and a gyroscope with an Arduino for sensor-driven robotic movement.",
    tags: ["C/C++", "Arduino", "Embedded Systems", "Sensors"],
    url: "https://github.com/isaac-rico/Mano-Po-FEP-2024",
  },
];

const SKILLS = [
  "Python", "SQL", "Pandas", "Scikit-Learn",
  "Power BI", "Apache Superset", "PostgreSQL", "dbt",
  "Snowflake", "ETL", "Data Modeling", "Data Visualization",
  "Machine Learning", "Random Forest", "Regression", "FMEA",
  "C/C++", "Java", "JavaScript", "Git",
  "OpenCV", "MediaPipe", "Raspberry Pi", "Arduino",
];

const LIGHT = {
  bg: "#F9F8F5", bgCard: "#F9F8F5", bgHover: "#EEEDE9", bgTag: "#EEEDE9", bgStat: "#F9F8F5",
  border: "#080808", text: "#1A1A1A", textMuted: "#666", textFaint: "#999", textLabel: "#AAA",
  textTag: "#555", accent: "#1e333d", navActive: "#1A1A1A", btnPrimaryBg: "#1A1A1A",
  btnPrimaryText: "#F9F8F5", btnSecondaryText: "#1A1A1A", footerText: "#BBB", arrowColor: "#BBB",
};

const DARK = {
  bg: "#111110", bgCard: "#1A1A18", bgHover: "#222220", bgTag: "#252523", bgStat: "#1A1A18",
  border: "#2E2E2B", text: "#E8E7E3", textMuted: "#999", textFaint: "#d9d9d9", textLabel: "#555",
  textTag: "#AAA", accent: "#74c4e9", navActive: "#E8E7E3", btnPrimaryBg: "#E8E7E3",
  btnPrimaryText: "#111110", btnSecondaryText: "#E8E7E3", footerText: "#3A3A38", arrowColor: "#555",
};

export default function App() {
  const [page, setPage] = useState("Home");
  const [dark, setDark] = useState(true);
  const c = dark ? DARK : LIGHT;

  const sectionLabel = { fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: c.accent, marginBottom: "0.75rem" };
  const divider = { fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: c.accent, marginBottom: "1.25rem", paddingBottom: "0.5rem", borderBottom: `0.5px solid ${c.border}` };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500&family=IBM+Plex+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'IBM Plex Mono', monospace; background: ${c.bg}; color: ${c.text}; }
        a { text-decoration: none; color: inherit; }
        button { font-family: 'IBM Plex Mono', monospace; cursor: pointer; border: none; background: none; }
      `}</style>

      <div style={{ minHeight: "100vh", 
                    display: "flex", 
                    flexDirection: "column", 
                    background: c.bg, 
                    color: c.text, 
                    transition: "background 0.25s, color 0.25s" 
                  }}>

        {/* NAV */}
        <nav style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "1rem clamp(1.5rem, 5vw, 3rem)", 
          borderBottom: `0.5px solid ${c.border}`, 
          position: "sticky", 
          top: 0, 
          background: c.bg, 
          zIndex: 10, 
          transition: "background 0.25s" 
        }}>
          <div style={{ display: "flex", gap: "clamp(1rem, 3vw, 2rem)", alignItems: "center", flexWrap: "wrap" }}>
            {NAV.map(n => (
              <button key={n} onClick={() => setPage(n)} style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: page === n ? c.navActive : c.textFaint, transition: "color 0.2s" }}>
                {n}
              </button>
            ))}
            {/* Toggle */}
            <button
              onClick={() => setDark(d => !d)}
              title={dark ? "Light mode" : "Dark mode"}
              style={{ width: 36, height: 20, borderRadius: 10, background: dark ? c.accent : c.border, position: "relative", transition: "background 0.25s", flexShrink: 0 }}
            > 
              <span style={{ position: "absolute", top: 3, left: dark ? 18 : 3, width: 14, height: 14, borderRadius: "50%", background: dark ? "#111110" : "#fff", transition: "left 0.22s", display: "block" }} />
            </button>
          </div>
        </nav>

        {/* MAIN */}
        <main style={{ flex: 1, padding: "0 3rem", maxWidth: 860, margin: "0 auto", width: "100%" }}>

          {/* HOME */}
          {page === "Home" && (
            <div style={{ paddingTop: "clamp(2rem, 10vh, 5rem)", paddingBottom: "5rem" }}>

              {/* Main Flex Wrapper */}
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                flexWrap: "wrap-reverse", 
                gap: "2rem", 
                marginBottom: "2rem"
              }}>

                {/* text */}
                <div style={{ flex: "1", minWidth: "300px" }}>
                  <p style={{ ...sectionLabel, marginBottom: "1.5rem" }}>Hello! I'm</p>
                  <h1 style={{ 
                    fontFamily: "'Lora', serif", 
                    fontSize: "clamp(3rem, 7vw, 5rem)", 
                    fontWeight: 400, 
                    lineHeight: 1.05, 
                    letterSpacing: "-0.03em", 
                    marginBottom: "2rem", 
                    color: c.text 
                  }}>
                    Isaac Rico
                  </h1>
                  <p style={{ 
                    fontSize: "0.9rem", 
                    color: c.textMuted, 
                    lineHeight: 1.9, 
                    maxWidth: 480, 
                    marginBottom: "3rem" 
                  }}>
                    Data and reliability analyst with experience building executive-facing dashboards and analytics
                    solutions for pharmaceutical manufacturing. Skilled in SQL, Python, machine learning, and data
                    visualization — translating operational data into insights that drive decisions.
                  </p>
                </div>
                
                {/* Picture */}
                <div style={{ flexShrink: 0 }}>
                  <img 
                    src="profilepic.jpg" // Place your file in the /public folder and update this name
                    alt="Isaac Rico"
                    style={{
                      width: "200px",
                      height: "300px",
                      // borderRadius: "50%",
                      objectFit: "cover",
                      border: `1px solid ${c.border}`,
                      padding: "8px",
                      background: c.bgCard
                    }}
                  />
                </div>
              </div>
                  
              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button onClick={() => setPage("Projects")} style={{ fontSize: "0.72rem", letterSpacing: "0.08em", padding: "0.65rem 1.4rem", background: c.btnPrimaryBg, color: c.btnPrimaryText, border: `1px solid ${c.btnPrimaryBg}`, transition: "background 0.25s, color 0.25s" }}>
                  View Projects →
                </button>
                <button onClick={() => setPage("Contact")} style={{ fontSize: "0.72rem", letterSpacing: "0.08em", padding: "0.65rem 1.4rem", background: "transparent", color: c.btnSecondaryText, border: `1px solid ${c.border}`, transition: "color 0.25s, border-color 0.25s" }}>
                  Get in Touch
                </button>
              </div>
                  
              {/* Stats Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: c.border, border: `0.5px solid ${c.border}`, marginTop: "6rem", maxWidth: 480, transition: "background 0.25s" }}>
                {[["2×", " Intern @ BioMarin Pharmaceutical Inc."], ["4+", "Projects Completed"], ["UCI", "Bachelor of Science in Computer Engineering"]].map(([n, l]) => (
                  <div key={l} style={{ background: c.bgStat, padding: "1.25rem", transition: "background 0.25s" }}>
                    <div style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: "0.25rem", color: c.text }}>{n}</div>
                    <div style={{ fontSize: "0.65rem", color: c.textFaint, letterSpacing: "0.05em" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {page === "Projects" && (
            <div style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
              <p style={sectionLabel}>Work</p>
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: c.text }}>Projects</h2>
              <p style={{ fontSize: "0.8rem", color: c.textFaint, marginBottom: "3rem" }}>
                A selection of personal, school, and open-source projects. Full list on{" "}
                <a href="https://github.com/isaac-rico" target="_blank" rel="noreferrer" style={{ color: c.accent, textDecoration: "underline" }}>GitHub ↗</a>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: c.border, border: `0.5px solid ${c.border}` }}>
                {PROJECTS.map(p => (
                  <div key={p.name} style={{ background: c.bgCard, padding: "1.75rem", display: "flex", flexDirection: "column", transition: "background 0.25s" }}>
                    <div style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.6rem", color: c.text }}>{p.name}</div>
                    <div style={{ fontSize: "0.76rem", color: c.textMuted, lineHeight: 1.75, marginBottom: "1.25rem", flex: 1 }}>{p.desc}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{ fontSize: "0.62rem", padding: "0.2rem 0.5rem", background: c.bgTag, color: c.textTag, letterSpacing: "0.03em" }}>{tag}</span>
                      ))}
                    </div>
                    <a href={p.url} target="_blank" rel="noreferrer" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent }}>
                      View on GitHub ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RESUME */}
          {page === "Resume" && (
            <div style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <p style={sectionLabel}>Background</p>
                  <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", color: c.text }}>Resume</h2>
                </div>
                <a href="/resume.pdf" download={"Isaac_Rico_Resume.pdf"} style={{ fontSize: "0.72rem", letterSpacing: "0.08em", padding: "0.65rem 1.4rem", background: "transparent", color: c.btnSecondaryText, border: `1px solid ${c.border}`, alignSelf: "flex-end" }}>
                  Download PDF ↓
                </a>
              </div>

              <div style={{ marginBottom: "3rem" }}>
                <div style={divider}>Experience</div>
                {[
                  { title: "Reliability Engineering Intern", company: "BioMarin Pharmaceutical Inc.", date: "June 2025 – Sept 2025 · Novato, CA", desc: "Engineered executive-facing Power BI dashboards integrating CMMS maintenance and equipment data, enabling real-time visibility into reliability KPIs — improving operational efficiency by 75% and reducing leadership analysis time by 50%." },
                  { title: "Asset Lifecycle Management Intern", company: "BioMarin Pharmaceutical Inc.", date: "June 2024 – Sept 2024 · Novato, CA", desc: "Developed a risk-based inventory analysis model using part turn-rate data and FMEA. Built a proof-of-concept NLP tool automating CMMS maintenance analysis and eliminating 25 hours of manual data entry per week." },
                  { title: "Product Management Intern", company: "Yuba Bicycles", date: "Aug 2023 – Mar 2024 · Remote", desc: "Collaborated with cross-functional teams to build a web application automating compatibility checks, reducing service response time by 30%." },
                ].map(e => (
                  <div key={e.title} style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "'Lora', serif", fontSize: "1rem", fontWeight: 500, color: c.text }}>{e.title}</span>
                      <span style={{ fontSize: "0.7rem", color: c.textFaint }}>{e.date}</span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: c.accent, marginBottom: "0.5rem" }}>{e.company}</div>
                    <div style={{ fontSize: "0.78rem", color: c.textMuted, lineHeight: 1.75 }}>{e.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "3rem" }}>
                <div style={divider}>Education</div>
                <div style={{ marginBottom: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "'Lora', serif", fontSize: "1rem", fontWeight: 500, color: c.text }}>B.S. in Computer Engineering</span>
                    <span style={{ fontSize: "0.7rem", color: c.textFaint }}>Sept 2021 – June 2025 · Irvine, CA</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: c.accent, marginBottom: "0.5rem" }}>University of California, Irvine</div>
                  <div style={{ fontSize: "0.78rem", color: c.textMuted, lineHeight: 1.75 }}>Relevant coursework: Embedded Systems, Computer Networks, Operating Systems, Computer Architecture, Data Analysis, Machine Learning/AI, Digital Logic Design.</div>
                </div>
              </div>

              <div>
                <div style={divider}>Skills</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {SKILLS.map(s => (
                    <span key={s} style={{ fontSize: "0.72rem", padding: "0.3rem 0.75rem", background: c.bgTag, color: c.textTag, letterSpacing: "0.02em" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CONTACT */}
          {page === "Contact" && (
            <div style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
              <p style={sectionLabel}>Reach Out</p>
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "1.5rem", color: c.text }}>Contact</h2>
              <p style={{ fontSize: "0.82rem", color: c.textMuted, lineHeight: 1.9, maxWidth: 420, marginBottom: "3rem" }}>
                Open to new opportunities in data analytics, reliability engineering, and ML. Feel free to reach out about roles, collaborations, or just to connect.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: c.border, border: `0.5px solid ${c.border}`, maxWidth: 500 }}>
                {[
                  { label: "Email", value: "isaacarnell.rico@gmail.com", href: "mailto:isaacarnell.rico@gmail.com" },
                  { label: "LinkedIn", value: "linkedin.com/in/isaac-rico", href: "https://linkedin.com/in/isaac-a-rico" },
                  { label: "GitHub", value: "github.com/isaac-rico", href: "https://github.com/isaac-rico" },
                  { label: "Location", value: "California, USA", href: null },
                ].map(item => (
                  <div
                    key={item.label}
                    onClick={() => item.href && window.open(item.href, "_blank")}
                    style={{ background: c.bgCard, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: item.href ? "pointer" : "default", transition: "background 0.15s" }}
                    onMouseEnter={e => { if (item.href) e.currentTarget.style.background = c.bgHover; }}
                    onMouseLeave={e => { e.currentTarget.style.background = c.bgCard; }}
                  >
                    <div>
                      <div style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: c.textLabel, marginBottom: "0.2rem" }}>{item.label}</div>
                      <div style={{ fontSize: "0.82rem", color: c.text }}>{item.value}</div>
                    </div>
                    {item.href && <span style={{ fontSize: "0.75rem", color: c.arrowColor }}>↗</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        <footer style={{ padding: "1.25rem 3rem", borderTop: `0.5px solid ${c.border}`, textAlign: "center", fontSize: "0.65rem", color: c.footerText, letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Isaac Rico
        </footer>
      </div>
    </>
  );
}