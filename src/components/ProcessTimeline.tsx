"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PhoneCall, Rocket, Check } from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";

const ICONS = {
  search: Search,
  "phone-call": PhoneCall,
  rocket: Rocket,
};

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-[var(--border)] md:left-1/2 md:-translate-x-1/2">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-[var(--gold-1)] to-[var(--gold-2)]"
        />
      </div>

      <div className="flex flex-col gap-16">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = ICONS[step.icon];
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col gap-6 pl-16 md:pl-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } md:items-center`}
            >
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--gold-solid)] bg-[var(--bg)] font-display font-bold text-[var(--gold-solid)] md:left-1/2 md:-translate-x-1/2">
                {step.number}
              </div>

              <div className="md:w-1/2" />

              <div
                className={`gold-border-hover glass rounded-2xl border border-[var(--border)] p-6 md:w-1/2 ${
                  isEven ? "md:pl-10" : "md:pr-10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gold-1)]/20 to-[var(--gold-2)]/20">
                    <Icon className="h-5 w-5 text-[var(--gold-solid)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  What you get
                </p>
                <ul className="mt-2 space-y-1.5">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold-solid)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
