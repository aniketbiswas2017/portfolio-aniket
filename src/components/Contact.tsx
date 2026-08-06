import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Reveal>
        <div className="eyebrow">Contact</div>
        <ScrambleText as="h2" className="section-title" text="Let's build something." />
        <p className="contact-desc">
          Open to senior Angular / full-stack roles and interesting AI-adjacent
          projects. Reach out any way that's easiest for you.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="contact-links">
        <a href={`mailto:${profile.email}`} className="contact-link">
          <span className="contact-link-label">Email</span>
          <span>{profile.email}</span>
        </a>
        <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="contact-link">
          <span className="contact-link-label">Phone</span>
          <span>{profile.phone}</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link-label">LinkedIn</span>
          <span>in/aniket-biswas</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link-label">GitHub</span>
          <span>@aniketbiswas2017</span>
        </a>
      </Reveal>
    </section>
  );
}
