import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/data/site";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation call with Azlon AI or send us a message about what you'd like to automate.",
};

const socialIcons = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrbs />
        <AnimatedSection className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-24 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
            Let&apos;s Build Your <span className="gold-text">AI Workforce</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--muted)] lg:text-lg">
            Pick a time that works for you, or send us a quick message about
            what you&apos;d like to automate.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <AnimatedSection>
            <CalendlyEmbed />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col gap-6">
            <div className="gold-border-hover glass rounded-2xl border border-[var(--border)] p-6">
              <h3 className="font-display text-base font-bold">Get in touch</h3>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--gold-solid)]"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
              <div className="mt-5 flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--gold-solid)] hover:text-[var(--gold-solid)] hover:shadow-[0_0_20px_-4px_var(--glow)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2.5 text-xs text-[var(--muted)]">
                <Clock className="h-4 w-4 shrink-0 text-[var(--gold-solid)]" />
                We usually reply within 24 hours.
              </div>
            </div>

            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
