import { CONTACTS } from "../data/portfolio";

const linkedin = CONTACTS.find(contact => contact.label === "LinkedIn").href;

export default function Home() {
  return (
    <div className="home-sequence">
      <section className="home-intro" aria-labelledby="home-greeting">
        <h1 className="home-greeting" id="home-greeting">
          <span>Hello! I’m</span>
          Isaac Rico
        </h1>
        <div className="home-scroll" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="m5 9 7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </section>
      <section className="home-about" aria-labelledby="about-isaac">
        <div>
          <h2 id="about-isaac" className="explore-heading">
            A little more about me
          </h2>
          <details className="explore-disclosure">
            <summary>From circuits to data</summary>
            <p>I studied computer engineering at UC Irvine. I've built hardware that responds to human movement and dashboards that help teams understand how their operations run.</p>
            <a className="explore-link" href="#experiences">Explore my experience →</a>
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
    </div>
  );
}
