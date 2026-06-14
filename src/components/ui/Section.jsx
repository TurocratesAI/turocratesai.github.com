export default function Section({ id, tone = "sand", density = "default", className = "", children }) {
  const isInk = tone === "ink";
  const bg =
    tone === "paper" ? "bg-paper" :
    isInk ? "bg-obsidian text-ink" :
    "bg-sand";
  const pad =
    density === "tight"
      ? "py-10 md:py-14"
      : density === "loose"
      ? "py-16 md:py-24"
      : "py-12 md:py-20";
  return (
    <section id={id} className={`relative overflow-hidden ${bg} ${className}`}>
      {/* CTA bands get a warm copper glow + hairline edges to feel like a feature panel */}
      {isInk && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "radial-gradient(600px 280px at 50% 0%, rgba(231,169,142,0.14), transparent 70%)",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terra/40 to-transparent" />
        </>
      )}
      <div className={`relative max-w-container mx-auto px-6 md:px-10 ${pad}`}>
        {children}
      </div>
    </section>
  );
}
