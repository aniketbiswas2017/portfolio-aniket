import { motion, type Variants } from "framer-motion";
import { stats, profile } from "../data/resume";
import RotatingSkills from "./RotatingSkills";
import RotatingText from "./RotatingText";
import TypewriterSubtitle from "./TypewriterSubtitle";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="eyebrow">
            <RotatingSkills />
          </motion.div>
          <motion.h1 variants={item} className="hero-title">
            Front End Developer
            <RotatingText
              texts={["Full-Stack Developer", "Angular Developer", "React Developer"]}
              interval={10000}
              className="hero-title-sub"
            />
          </motion.h1>
          <motion.div variants={item}>
            <TypewriterSubtitle />
          </motion.div>
          <motion.div variants={item} className="hero-actions">
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>
          <motion.div variants={item} className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-portrait-glow" />
          <img src="/images/portrait.jpg" alt={profile.name} />
        </motion.div>
      </div>
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span />
      </motion.div>
    </section>
  );
}
