import { useEffect } from "react";

const IDS = ["top", "about", "skills", "experience", "work", "contact"];

export default function ScrollSpy() {
  useEffect(() => {
    let lastRun = 0;
    const THROTTLE_MS = 100;

    const update = () => {
      const offset = window.innerHeight * 0.3;
      let current = IDS[0];

      for (const id of IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }

      const newHash = current === "top" ? "" : `#${current}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search + newHash
        );
      }
    };

    const onScroll = () => {
      const now = Date.now();
      if (now - lastRun >= THROTTLE_MS) {
        lastRun = now;
        update();
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
