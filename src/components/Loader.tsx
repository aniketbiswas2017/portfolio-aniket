import { useEffect, useRef, useState } from "react";
import "./Loader.css";

const DURATION = 1800;
const EXIT_DURATION = 1000;

export default function Loader({ onDone, onLeaving }: { onDone: () => void; onLeaving: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      setCount(Math.round(progress * 100));

      if (progress >= 1) {
        setLeaving(true);
        onLeaving();
        document.body.style.overflow = "";
        setTimeout(onDone, EXIT_DURATION);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`loader${leaving ? " loader-leaving" : ""}`}>
      <div className="loader-panel" />
      {leaving ? <span className="loader-line" /> : <div className="loader-count">{count}</div>}
    </div>
  );
}
