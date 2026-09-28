import type { Metadata } from "next";
import { Star } from "lucide-react";
import { TESTIMONIALS, USE_CASES, VIDEO_TESTIMONIALS } from "@/data/testimonials";
import { CTASection } from "@/components/CTASection";
import { UseCaseCard } from "@/components/UseCaseCard";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";

const hasTestimonials = TESTIMONIALS.length > 0;
const videos = VIDEO_TESTIMONIALS.filter((v) => v.youtubeId);

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
            ? TESTIMONIALS.map((t, i) => {
                const initials = t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2);
                return (
                  <StaggerItem key={`${t.name}-${i}`} className="mb-6 break-inside-avoid">
                    <div className="gold-border-hover glass rounded-2xl border border-[var(--border)] p-6">
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="h-4 w-4 fill-[var(--gold-solid)] text-[var(--gold-solid)]"
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold-1)] to-[var(--gold-2)] text-sm font-bold text-black">
                          {initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{t.name}</p>
                          <p className="text-xs text-[var(--muted)]">
                            {t.role}, {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })
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

            <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2">
              {videos.map((v) => (
                <StaggerItem key={v.youtubeId}>
                  <div className="gold-border-hover glass aspect-video overflow-hidden rounded-2xl border border-[var(--border)]">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
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
