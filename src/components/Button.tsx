"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  icon?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon = true,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "text-black bg-gradient-to-r from-[var(--gold-1)] to-[var(--gold-2)] btn-shimmer shadow-[0_8px_30px_-8px_var(--glow)]"
      : "text-[var(--fg)] border border-[var(--border-strong)] hover:border-[var(--gold-solid)] btn-shimmer";

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
