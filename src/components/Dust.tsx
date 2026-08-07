import { useMemo, type CSSProperties } from "react";
import "./Dust.css";

const COUNT = 28;

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function Dust() {
  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(1.5, 3.5),
        duration: rand(18, 34),
        delay: rand(-34, 0),
        drift: rand(-40, 40),
        opacity: rand(0.15, 0.45),
      })),
    []
  );

  return (
    <div className="dust" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="dust-mote"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
