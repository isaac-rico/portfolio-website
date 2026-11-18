import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CONTACTS } from "../data/portfolio";

const linkedin = CONTACTS.find(contact => contact.label === "LinkedIn").href;

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const screenRef = useRef(null);
  const headingRef = useRef(null);
  const exitTween = useRef(null);
  const hasVisited = useRef(false);

  useLayoutEffect(() => {
    if (hasVisited.current) headingRef.current.focus({ preventScroll: true });

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(screenRef.current, { opacity: 0, y: 10, duration: 0.3, clearProps: "transform,opacity" });
    });
    return () => {
      exitTween.current?.kill();
      exitTween.current = null;
      media.revert();
    };
  }, [showAbout]);

  function changeScreen() {
    if (exitTween.current) return;
    hasVisited.current = true;
    const swap = () => setShowAbout(!showAbout);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swap();
      return;
    }

    exitTween.current = gsap.to(screenRef.current, {
      opacity: 0,
      y: showAbout ? 10 : -10,
      duration: 0.18,
      overwrite: "auto",
      onComplete: swap,
    });
  }

  return (
    <div>
      {showAbout ? (
        <section key="about" ref={screenRef} className="home-about" aria-labelledby="about-isaac">
          <div>
            <button type="button" className="home-back" onClick={changeScreen}>← Back to intro</button>
            <h2 id="about-isaac" className="explore-heading" ref={headingRef} tabIndex={-1}>
              A little more about me
            </h2>
            <details className="explore-disclosure">
              <summary>From circuits to data</summary>
              <p>I studied computer engineering at UC Irvine. I've built hardware that responds to human movement and dashboards that help teams understand how their operations run.</p>
              <a className="explore-link" href="#resume">Explore my experience →</a>
            </details>
            <details className="explore-disclosure">
              <summary>Current interests</summary>
              <p>Physical AI &amp; agentic use cases.</p>
              <p>If you'd like to discuss with me, <a className="explore-link" href={linkedin}>message me on LinkedIn</a>!</p>
            </details>
            <details className="explore-disclosure">
              <summary>Outside the work</summary>
              <p>I play golf and guitar, am a matcha connoisseur, a die hard bay area sports fan, and a rhythm game enthusiast (mainly osu! &amp; pump it up)!</p>
            </details>
          </div>
          <img className="home-portrait" src="profilepic.jpg" alt="Isaac Rico" width="200" height="300" loading="lazy" />
        </section>
      ) : (
        <section key="intro" ref={screenRef} className="home-intro" aria-labelledby="home-greeting">
          <h1 className="home-greeting" id="home-greeting" ref={headingRef} tabIndex={-1}>
            <span>Hello! I’m</span>
            Isaac Rico
          </h1>
          <button type="button" className="home-scroll" onClick={changeScreen}>
            Learn more
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path d="m5 9 7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </section>
      )}
    </div>
  );
}
