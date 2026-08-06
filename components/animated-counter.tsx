"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

function parseTarget(raw: string) {
  const match = raw.match(/[\d,.]+/);
  const numeric = match ? parseFloat(match[0].replace(/,/g, "")) : 0;
  const hasComma = match ? match[0].includes(",") : false;
  const decimals = match && match[0].includes(".") ? match[0].split(".")[1].length : 0;
  const prefix = match ? raw.slice(0, match.index) : "";
  const suffix = match ? raw.slice((match.index ?? 0) + match[0].length) : raw;
  return { numeric, hasComma, decimals, prefix, suffix };
}

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const { numeric, hasComma, decimals, prefix, suffix } = parseTarget(value);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const fixed = v.toFixed(decimals);
        setDisplay(hasComma ? Number(fixed).toLocaleString() : fixed);
      },
    });
    return () => controls.stop();
  }, [inView, numeric, hasComma, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
