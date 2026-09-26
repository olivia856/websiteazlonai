import type { Metadata } from "next";
import { CALENDLY_URL } from "@/data/site";
import { CTAButton } from "@/components/Button";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Azlon AI works: Discovery, Strategy Call, and Start Project — simple, transparent, fast.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrbs />
        <AnimatedSection className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
            How We Work: Simple, <span className="gold-text">Transparent, Fast</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--muted)] lg:text-lg">
            Three clear steps from your first message to a fully running AI
            system.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <ProcessTimeline />
      </section>

      <section className="border-t border-[var(--border)] py-24">
        <AnimatedSection className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
            Start with Step 1: <span className="gold-text">Book Your Discovery Call</span>
          </h2>
          <p className="mt-4 text-base text-[var(--muted)]">
            No pressure, no jargon — just a clear plan for automating your
            business.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href={CALENDLY_URL} external>
              Book Your Discovery Call
            </CTAButton>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
