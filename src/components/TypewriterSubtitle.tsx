import { useEffect, useState } from "react";
import { profile } from "../data/resume";

const descriptions = [
  "proficient in the latest web technologies and frameworks, continuously expanding my skill set to stay at the forefront of the industry.",
  "with hands-on experience building high-performance, scalable, responsive web solutions with seamless and intuitive user experiences.",
];

const TYPING_SPEED = 40;
const DELETING_SPEED = 30;
const WAIT_TIME = 20000;

export default function TypewriterSubtitle() {
  const [displayText, setDisplayText] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const currentDesc = descriptions[descIndex];

  useEffect(() => {
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
        setIsWaiting(false);
      }, WAIT_TIME);
      return () => clearTimeout(timer);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const targetText = currentDesc;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setDescIndex((i) => (i + 1) % descriptions.length);
        }
      } else {
        if (displayText.length < targetText.length) {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        } else {
          setIsWaiting(true);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, descIndex, currentDesc, isWaiting]);

  return (
    <p className="hero-subtitle">
      Hi, I'm <span className="name-highlight">{profile.name}</span>, a developer{" "}
      {displayText}
      <span className="cursor">|</span>
    </p>
  );
}
