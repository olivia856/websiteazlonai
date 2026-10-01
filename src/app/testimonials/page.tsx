import type { Metadata } from "next";
import { TESTIMONIALS, USE_CASES, VIDEO_TESTIMONIALS } from "@/data/testimonials";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";

const hasTestimonials = TESTIMONIALS.length > 0;
const videos = VIDEO_TESTIMONIALS;

export const metadata: Metadata = {
  title: hasTestimonials ? "Testimonials" : "Use Cases",
  description: hasTestimonials
    ? "See what clients say about working with Azlon AI on custom AI agents and business automations."
    : "Examples of the AI agents and automations Azlon AI builds for growing businesses.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrbs />
        <AnimatedSection className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
            {hasTestimonials ? (
              <>
                What Our <span className="gold-text">Clients Say</span>
              </>
            ) : (
              <>
                What We <span className="gold-text">Build</span>
              </>
            )}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--muted)] lg:text-lg">
            {hasTestimonials
              ? "Real feedback from businesses we've helped automate."
              : "Example problems we solve with AI agents and automation, and how we solve them."}
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <StaggerGrid className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {hasTestimonials
            ? TESTIMONIALS.map((t, i) => (
                <StaggerItem key={`${t.name}-${i}`} className="mb-6 break-inside-avoid">
                  <TestimonialCard testimonial={t} className="" />
                </StaggerItem>
              ))
            : USE_CASES.map((u, i) => (
                <StaggerItem key={`${u.industry}-${i}`} className="mb-6 break-inside-avoid">
                  <UseCaseCard useCase={u} className="" />
                </StaggerItem>
              ))}
        </StaggerGrid>
      </section>

      {videos.length > 0 && (
        <section className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <AnimatedSection className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
                Video <span className="gold-text">Testimonials</span>
              </h2>
            </AnimatedSection>

            <StaggerGrid className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
              {videos.map((v) => (
                <StaggerItem key={v.src}>
                  <figure className="gold-border-hover glass overflow-hidden rounded-2xl border border-[var(--border)]">
                    <video
                      className="aspect-[9/16] w-full bg-black object-cover"
                      src={v.src}
                      poster={v.poster}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`Video testimonial from ${v.name}, ${v.company}`}
                    />
                    <figcaption className="px-5 py-4">
                      <p className="font-display font-semibold">{v.name}</p>
                      <p className="text-sm text-[var(--muted)]">
                        {v.company} · {v.country}
                      </p>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
