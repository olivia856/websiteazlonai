"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { CALENDLY_URL } from "@/data/site";

export function FloatingCallButton() {
  return (
    <motion.a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-1)] to-[var(--gold-2)] px-4 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_var(--glow)] lg:hidden"
      aria-label="Book a Call"
    >
      <PhoneCall className="h-4 w-4" />
      Book a Call
    </motion.a>
  );
}
