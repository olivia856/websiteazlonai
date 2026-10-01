import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({
  testimonial,
  className = "w-[320px] shrink-0",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`gold-border-hover glass flex flex-col rounded-2xl border border-[var(--border)] p-6 ${className}`}
    >
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[var(--gold-solid)] text-[var(--gold-solid)]" />
        ))}
      </div>
      {testimonial.service && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--gold-solid)]">
          {testimonial.service}
        </p>
      )}
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold-1)] to-[var(--gold-2)] text-sm font-bold text-black">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-[var(--muted)]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
