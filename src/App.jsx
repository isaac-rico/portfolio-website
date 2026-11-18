import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

const pages = { Home, Projects, Experiences, Contact };
const pageNames = Object.keys(pages);

function currentPage() {
  const hash = window.location.hash.slice(1).toLowerCase();
  if (hash === "resume") return "Experiences";
  return pageNames.find(name => name.toLowerCase() === hash) ?? "Home";
}

export default function App() {
  const [page, setPage] = useState(currentPage);
  const Page = pages[page];
  const mainRef = useRef(null);
  const previousPage = useRef(page);
  useLayoutEffect(() => {
    if (previousPage.current === page) return;
    previousPage.current = page;
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [page]);
  useEffect(() => {
    const navigate = () => setPage(currentPage());
    window.addEventListener("hashchange", navigate);
    navigate();
    return () => window.removeEventListener("hashchange", navigate);
  }, []);
  const [dark, setDark] = useState(true);
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
      <div style={{ minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--bg)",
                    color: "var(--text)",
                    transition: "background 0.25s, color 0.25s"
                  }}>

        {/* NAV */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem clamp(1.5rem, 5vw, 3rem)",
          borderBottom: `0.5px solid var(--border)`,
          position: "sticky",
          top: 0,
          background: "var(--bg)",
          zIndex: 10,
          transition: "background 0.25s"
        }}>
          <div style={{ display: "flex", gap: "clamp(1rem, 3vw, 2rem)", alignItems: "center", flexWrap: "wrap" }}>
            {pageNames.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} aria-current={page === n ? "page" : undefined} style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: page === n ? "var(--navActive)" : "var(--textFaint)", transition: "color 0.2s" }}>
                {n}
              </a>
            ))}
            {/* Toggle */}
            <button
              onClick={() => setDark(d => !d)}
              title={dark ? "Light mode" : "Dark mode"}
              style={{ width: 36, height: 20, borderRadius: 10, background: dark ? "var(--accent)" : "var(--border)", position: "relative", transition: "background 0.25s", flexShrink: 0 }}
            >
              <span style={{ position: "absolute", top: 3, left: dark ? 18 : 3, width: 14, height: 14, borderRadius: "50%", background: dark ? "#111110" : "#fff", transition: "left 0.22s", display: "block" }} />
            </button>
          </div>
        </nav>

        {/* MAIN */}
        <main ref={mainRef} tabIndex={-1} className="site-main">

          <Page />
        </main>

        <footer style={{ padding: "1.25rem 3rem", borderTop: `0.5px solid var(--border)`, textAlign: "center", fontSize: "0.65rem", color: "var(--footerText)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Isaac Rico
        </footer>
      </div>
  );
}
