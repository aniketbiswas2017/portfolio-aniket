import Reveal from "./Reveal";
import { profile } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about-grid">
        <div>
          <Reveal>
            <div className="eyebrow">About</div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="about-text">{profile.summary}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="about-photo">
          <img src="/images/travel.jpg" alt={`${profile.name} on location`} />
        </Reveal>
      </div>
    </section>
  );
}
