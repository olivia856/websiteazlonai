"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hook this up to your email/CRM provider of choice.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="gold-border-hover glass flex flex-col items-center rounded-2xl border border-[var(--border)] p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-[var(--gold-solid)]" />
        <h3 className="mt-4 font-display text-lg font-bold">
          Thanks — we got it!
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          We usually reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="gold-border-hover glass rounded-2xl border border-[var(--border)] p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-5">
        <Field label="Company" name="company" type="text" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          What do you want to automate?
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--gold-solid)]"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="btn-shimmer relative mt-6 w-full overflow-hidden rounded-full bg-gradient-to-r from-[var(--gold-1)] to-[var(--gold-2)] px-6 py-3 text-sm font-semibold text-black"
      >
        Send Message
      </motion.button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--gold-solid)]"
      />
    </div>
  );
}
