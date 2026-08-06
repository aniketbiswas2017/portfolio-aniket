import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <div className="eyebrow">Skills</div>
        <ScrambleText as="h2" className="section-title" text="What I build with" />
      </Reveal>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.tier} delay={i * 0.05} className="skill-group">
            <div className="skill-tier">{group.tier}</div>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
