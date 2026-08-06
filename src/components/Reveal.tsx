import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import "./Reveal.css";

type Watcher = { el: HTMLElement; onReveal: () => void };

const watchers = new Set<Watcher>();
let rafId = 0;

function tick() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  for (const w of watchers) {
    if (w.el.getBoundingClientRect().top < vh * 0.92) {
      watchers.delete(w);
      w.onReveal();
    }
  }
  rafId = watchers.size > 0 ? requestAnimationFrame(tick) : 0;
}

function watch(w: Watcher) {
  watchers.add(w);
  if (!rafId) rafId = requestAnimationFrame(tick);
}

function unwatch(w: Watcher) {
  watchers.delete(w);
}

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 40,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const watcher: Watcher = { el, onReveal: () => setVisible(true) };
    watch(watcher);
    return () => unwatch(watcher);
  }, []);

  const style = {
    transitionDelay: `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={["reveal", visible ? "reveal-visible" : "", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
