import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with React, Vite &amp; Three.js</span>
    </footer>
  );
}
