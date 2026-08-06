import { useEffect, useRef, useState, type ReactNode } from "react";

const MIN_OPACITY = 0.25;
const MIN_BRIGHTNESS = 0.5;

export default function ScrollFade({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const passed = Math.min(Math.max((vh - rect.bottom) / vh, 0), 1);
        setOpacity(1 - passed * (1 - MIN_OPACITY));
        setBrightness(1 - passed * (1 - MIN_BRIGHTNESS));
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity,
        filter: `brightness(${brightness})`,
        transition: "opacity 0.2s linear, filter 0.2s linear",
      }}
    >
      {children}
    </div>
  );
}
