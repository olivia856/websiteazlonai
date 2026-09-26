import { TOOLS } from "@/data/site";

export function ToolsRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {TOOLS.map((tool) => (
        <span
          key={tool}
          className="text-sm font-semibold tracking-wide text-[var(--muted)] opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:text-[var(--gold-solid)]"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}
