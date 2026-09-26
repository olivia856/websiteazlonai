import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";
import { TEAM } from "@/data/team";
import { CTASection } from "@/components/CTASection";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/AnimatedSection";
import { GradientOrbs } from "@/components/GradientOrbs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Azlon AI — building intelligent AI systems so businesses can focus on growth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrbs />
        <AnimatedSection className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
            Our <span className="gold-text">Mission</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] lg:text-lg">
            At Azlon AI, we help businesses replace repetitive work with
            intelligent AI systems, so teams can focus on growth.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
            Meet the <span className="gold-text">Team</span>
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="gold-border-hover glass flex h-full flex-col items-center rounded-2xl border border-[var(--border)] p-8 text-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[var(--gold-solid)]/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--gold-solid)]">
                  {member.title}
                </p>
                <div className="mt-5 flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--gold-solid)] hover:text-[var(--gold-solid)] hover:shadow-[0_0_20px_-4px_var(--glow)]"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--gold-solid)] hover:text-[var(--gold-solid)] hover:shadow-[0_0_20px_-4px_var(--glow)]"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                  )}
                  {member.youtube && (
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on YouTube`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--gold-solid)] hover:text-[var(--gold-solid)] hover:shadow-[0_0_20px_-4px_var(--glow)]"
                    >
                      <YouTubeIcon className="h-4 w-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--gold-solid)] hover:text-[var(--gold-solid)] hover:shadow-[0_0_20px_-4px_var(--glow)]"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CTASection />
    </>
  );
}
