export default function Section({ id, tone = "sand", density = "default", className = "", children }) {
  const bg =
    tone === "paper" ? "bg-paper" :
    tone === "ink" ? "bg-ink text-sand" :
    "bg-sand";
  const pad =
    density === "tight"
      ? "py-10 md:py-14"
      : density === "loose"
      ? "py-16 md:py-24"
      : "py-12 md:py-20";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className={`max-w-container mx-auto px-6 md:px-10 ${pad}`}>
        {children}
      </div>
    </section>
  );
}
