import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom AI agents, lead generation automation, cold outreach, workflow automation, AI chatbots and CRM automation built by Azlon AI.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrbs />
        <AnimatedSection className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
            What We <span className="gold-text">Build</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[var(--muted)] lg:text-lg">
            Custom AI agents and automations, engineered around your
            business — not a one-size-fits-all template.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mt-12">
          <FAQAccordion />
        </AnimatedSection>
      </section>

      <CTASection
        heading="Not sure which service fits?"
        subheading="Book a free call and we'll recommend the right AI agents and automations for your business."
        buttonLabel="Book a Free Consultation"
      />
    </>
  );
}
