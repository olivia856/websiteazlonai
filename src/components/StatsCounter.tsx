"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      setDisplay(Math.floor(v));
    });
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref}>{display}</span>;
}

export function StatValue({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  return (
    <span className="font-display text-4xl font-bold gold-text lg:text-5xl">
      <CountUp value={value} />
      {suffix}
    </span>
  );
}
