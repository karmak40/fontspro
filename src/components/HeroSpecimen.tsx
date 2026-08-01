"use client";

import { useEffect, useState } from "react";
import { TEXT_STYLES } from "@/lib/textStyles";

const PHRASE = "fancy text";
const SEQUENCE = ["bold", "script", "fraktur", "circled", "sans-bold-italic", "double-struck"];
const STYLE_BY_ID = new Map(TEXT_STYLES.map((style) => [style.id, style]));

export default function HeroSpecimen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SEQUENCE.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const style = STYLE_BY_ID.get(SEQUENCE[index])!;

  return (
    <span
      key={index}
      className="inline-block min-w-[9ch] animate-[specimen-fade_0.4s_ease] text-accent motion-reduce:animate-none"
    >
      {style.transform(PHRASE)}
    </span>
  );
}
