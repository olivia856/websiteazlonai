import type { UseCase } from "@/data/testimonials";

export function UseCaseCard({
  useCase,
  className = "w-[320px] shrink-0",
}: {
  useCase: UseCase;
  className?: string;
}) {
  return (
    <div
      className={`gold-border-hover glass flex flex-col rounded-2xl border border-[var(--border)] p-6 ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-solid)]">
          {useCase.industry}
        </span>
        <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--muted)]">
          Example use case
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold">For a {useCase.who.toLowerCase()}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        <span className="font-medium text-[var(--fg)]">Problem: </span>
        {useCase.problem}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        <span className="font-medium text-[var(--fg)]">What we build: </span>
        {useCase.solution}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {useCase.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
