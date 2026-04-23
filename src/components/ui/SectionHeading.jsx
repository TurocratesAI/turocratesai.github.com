export default function SectionHeading({ eyebrow, title, intro, align = "center" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`mb-8 md:mb-12 max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-terra font-medium mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-[1.15] tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-[17px] text-inkSoft leading-relaxed">{intro}</p>
      )}
    </header>
  );
}
