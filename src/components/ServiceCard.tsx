"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  Mail,
  Workflow,
  MessageCircle,
  Database,
  Check,
} from "lucide-react";
import { CALENDLY_URL } from "@/data/site";
import type { Service } from "@/data/services";

const ICONS = {
  bot: Bot,
  zap: Zap,
  mail: Mail,
  workflow: Workflow,
  "message-circle": MessageCircle,
  database: Database,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="gold-border-hover glass flex h-full flex-col rounded-2xl border border-[var(--border)] p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gold-1)]/20 to-[var(--gold-2)]/20">
        <Icon className="h-6 w-6 text-[var(--gold-solid)]" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        {service.description}
      </p>
      <ul className="mt-4 space-y-2">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2 text-sm text-[var(--muted)]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold-solid)]" />
            {outcome}
          </li>
        ))}
      </ul>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold-solid)]"
      >
        Discuss this
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </motion.div>
  );
}
