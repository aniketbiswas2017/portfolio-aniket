import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const offset = window.innerHeight * 0.3;
      let current = "top";
      const ids = ["top", "about", "skills", "experience", "work", "contact"];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar${scrolled ? " scrolled" : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href="#top" className="brand">
        AB<span className={activeSection === "top" ? "dot-active" : ""}>.&nbsp;</span>
      </a>
      <nav className="nav-links">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={activeSection === l.href.slice(1) ? "active" : ""}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a href="/Aniket_Biswas_Resume.pdf" className="nav-cta" download>
        Resume
      </a>
    </motion.header>
  );
}
