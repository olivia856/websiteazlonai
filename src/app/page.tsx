import { ArrowRight, Sparkles } from "lucide-react";
import { CALENDLY_URL, STATS } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PROCESS_STEPS } from "@/data/process";
import { TESTIMONIALS } from "@/data/testimonials";
import { CTAButton } from "@/components/Button";
import { HeroHeadline } from "@/components/HeroHeadline";
import { GradientOrbs } from "@/components/GradientOrbs";
import { ToolsRow } from "@/components/ToolsMarquee";
import { StatValue } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { CTASection } from "@/components/CTASection";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/AnimatedSection";
import Link from "next/link";
import { Search, PhoneCall, Rocket } from "lucide-react";

const processIcons = { search: Search, "phone-call": PhoneCall, rocket: Rocket };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <GradientOrbs />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 text-center lg:pt-28 lg:pb-28 lg:px-8">
          <AnimatedSection>
            <span className="glass mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--gold-solid)]">
              <Sparkles className="h-3.5 w-3.5" />
              AI Agents & Automation Agency
            </span>
          </AnimatedSection>

          <div className="mt-6">
            <HeroHeadline text="We Build AI Agents That Work While You Sleep" />
          </div>

          <AnimatedSection delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] lg:text-lg">
              Azlon AI designs custom AI agents and automations that save your
              team hours every week, capture more leads, and scale your
              operations without hiring more people.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={CALENDLY_URL} external>
                Book a Free Consultation
              </CTAButton>
              <CTAButton href="/services" variant="secondary">
                See Our Services
              </CTAButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Tools we work with
            </p>
            <div className="mt-5">
              <ToolsRow />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--border)]">
        <StaggerGrid className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <StatValue value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
            What We <span className="gold-text">Build</span>
          </h2>
          <p className="mt-4 text-base text-[var(--muted)]">
            From AI agents to full workflow automation, we build the systems
            that keep your business running around the clock.
          </p>
        </AnimatedSection>

        <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <AnimatedSection className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold-solid)]"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </section>

      {/* Process preview */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]/40">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
              How We <span className="gold-text">Work</span>
            </h2>
            <p className="mt-4 text-base text-[var(--muted)]">
              Simple, transparent, fast — from first call to launch.
            </p>
          </AnimatedSection>

          <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => {
              const Icon = processIcons[step.icon];
              return (
                <StaggerItem key={step.number}>
                  <div className="gold-border-hover glass h-full rounded-2xl border border-[var(--border)] p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-bold text-[var(--border-strong)]">
                        {step.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gold-1)]/20 to-[var(--gold-2)]/20">
                        <Icon className="h-5 w-5 text-[var(--gold-solid)]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>

          <AnimatedSection className="mt-12 flex justify-center">
            <Link
              href="/process"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold-solid)]"
            >
              See our full process
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="py-24">
        <AnimatedSection className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
            {TESTIMONIALS.length > 0 ? (
              <>
                What Our <span className="gold-text">Clients Say</span>
              </>
            ) : (
              <>
                What We <span className="gold-text">Build</span>
              </>
            )}
          </h2>
        </AnimatedSection>
        <div className="mt-14">
          <TestimonialMarquee />
        </div>
      </section>

      <CTASection />
    </>
  );
}
