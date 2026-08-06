import Reveal from "./Reveal";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">
          <span className="name-highlight">10</span> years, <span className="name-highlight">6</span> teams, <span className="name-highlight">1</span> journey
        </h2>
      </Reveal>
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.period} delay={i * 0.04} className="timeline-item">
            <div className="timeline-marker">
              <span />
            </div>
            <div className="timeline-content">
              <div className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <div className="timeline-company">{job.company}</div>
                </div>
                <div className="timeline-period">{job.period}</div>
              </div>
              <div className="timeline-context">{job.context}</div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
