import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";

export function TestimonialMarquee() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="marquee-pause scrollbar-none overflow-hidden">
      <div className="animate-marquee flex w-max gap-6">
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
