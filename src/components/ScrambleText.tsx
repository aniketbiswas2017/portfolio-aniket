import { useRef, useState, createElement } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const DURATION_MS = 500;
const TICK_MS = 35;

type Tag = "span" | "h1" | "h2" | "h3" | "h4";

export default function ScrambleText({
  text,
  as = "span",
  className,
}: {
  text: string;
  as?: Tag;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const intervalId = useRef(0);

  const scramble = () => {
    clearInterval(intervalId.current);
    const start = Date.now();

    intervalId.current = window.setInterval(() => {
      const progress = Math.min((Date.now() - start) / DURATION_MS, 1);
      const revealedCount = Math.floor(progress * text.length);

      if (progress >= 1) {
        clearInterval(intervalId.current);
        setDisplay(text);
        return;
      }

      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < revealedCount) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(next);
    }, TICK_MS);
  };

  return createElement(as, { className, onMouseEnter: scramble }, display);
}
