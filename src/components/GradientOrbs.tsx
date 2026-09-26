export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="orb-drift absolute -top-32 left-1/4 h-96 w-96 rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--gold-1) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb-drift-slow absolute top-1/3 right-0 h-80 w-80 rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--gold-2) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
