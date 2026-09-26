"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS, CALENDLY_URL } from "@/data/site";
import { CTAButton } from "@/components/Button";
import { useTheme } from "@/lib/theme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[var(--border)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Azlon AI"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            Azlon <span className="gold-text">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              >
                <span className={active ? "text-[var(--fg)]" : ""}>
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[var(--gold-1)] to-[var(--gold-2)] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--gold-solid)] hover:text-[var(--fg)]"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <CTAButton href={CALENDLY_URL} external>
            Book a Call
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)]"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] glass lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[var(--bg-card)] text-[var(--fg)]"
                      : "text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                <CTAButton href={CALENDLY_URL} external className="w-full">
                  Book a Call
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
