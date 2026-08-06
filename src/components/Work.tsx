import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import { projects, awards, education } from "../data/resume";

export default function Work() {
  return (
    <section id="work" className="section">
      <Reveal>
        <div className="eyebrow">Projects &amp; Recognition</div>
        <ScrambleText as="h2" className="section-title" text="Selected work" />
      </Reveal>
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <div className="project-card-head">
                <h3>{p.name}</h3>
                <svg
                  className="project-card-icon"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </div>
              <p>{p.detail}</p>
              <div className="project-card-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="lower-grid">
        <Reveal className="awards-block">
          <h4>Awards &amp; certifications</h4>
          <ul>
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.06} className="education-block">
          <h4>Education</h4>
          <ul>
            {education.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong>
                <span>{e.school}</span>
                <span className="edu-period">{e.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
