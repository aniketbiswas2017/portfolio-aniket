import { useEffect, useState } from "react";
import "./Loader.css";

const DURATION = 1800;

export default function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / DURATION, 1);
      setCount(Math.round(progress * 100));

      if (progress >= 1) {
        clearInterval(interval);
        setLeaving(true);
        document.body.style.overflow = "";
        setTimeout(onDone, 650);
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`loader${leaving ? " loader-leaving" : ""}`}>
      <div className="loader-count">{count}</div>
    </div>
  );
}
