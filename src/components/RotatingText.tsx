import { useEffect, useState } from "react";
import ScrambleText from "./ScrambleText";

export default function RotatingText({
  texts,
  interval = 20000,
  className,
}: {
  texts: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <ScrambleText
      text={texts[index]}
      as="span"
      className={className}
    />
  );
}
