import { CALENDLY_URL } from "@/data/site";
import { CTAButton } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";

export function CTASection({
  heading = "Ready to automate your business?",
  subheading = "Book a free consultation and we'll map out exactly which AI agents will save your team the most time.",
  buttonLabel = "Book Your Free Call",
}: {
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)]">
      <GradientOrbs />
      <AnimatedSection className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--muted)]">
          {subheading}
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href={CALENDLY_URL} external>
            {buttonLabel}
          </CTAButton>
        </div>
      </AnimatedSection>
    </section>
  );
}
