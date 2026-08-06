import { useEffect, useState, useMemo } from "react";
import ScrambleText from "./ScrambleText";
import { skills } from "../data/resume";

export default function RotatingSkills() {
  const [index, setIndex] = useState(0);

  const skillCombos = useMemo(() => {
    const allSkills = skills.flatMap((tier) => tier.items);
    const combos: string[] = [];

    for (let i = 0; i < Math.min(20, Math.floor(allSkills.length / 3)); i++) {
      const start = (i * 3) % allSkills.length;
      const three = [
        allSkills[start],
        allSkills[(start + 1) % allSkills.length],
        allSkills[(start + 2) % allSkills.length],
      ].join(" · ");
      combos.push(three);
    }

    return combos.length > 0 ? combos : ["Angular · TypeScript · Full-Stack"];
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % skillCombos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [skillCombos.length]);

  return <ScrambleText text={skillCombos[index]} />;
}
