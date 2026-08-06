import type { CSSProperties, ReactNode } from "react";
import "./Reveal.css";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style: CSSProperties = { animationDelay: `${delay}s` };

  return (
    <div className={["reveal", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
