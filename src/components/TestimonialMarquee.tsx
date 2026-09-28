import { TESTIMONIALS, USE_CASES } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";
import { UseCaseCard } from "@/components/UseCaseCard";

export function TestimonialMarquee() {
  const cards =
    TESTIMONIALS.length > 0
      ? TESTIMONIALS.map((t, i) => <TestimonialCard key={`t-${i}`} testimonial={t} />)
      : USE_CASES.map((u, i) => <UseCaseCard key={`u-${i}`} useCase={u} />);
  const doubled = [...cards, ...cards.map((c, i) => ({ ...c, key: `dup-${i}` }))];

  return (
    <div className="marquee-pause scrollbar-none overflow-hidden">
      <div className="animate-marquee flex w-max gap-6">{doubled}</div>
    </div>
  );
}
