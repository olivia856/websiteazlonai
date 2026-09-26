"use client";

import { motion } from "framer-motion";

export function HeroHeadline({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          className={`inline-block ${
            word === "Sleep" ? "gold-text" : ""
          }`}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </h1>
  );
}
