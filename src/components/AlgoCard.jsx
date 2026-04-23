import OrganIcon from "./OrganIcon.jsx";

export default function AlgoCard({ algo }) {
  return (
    <article
      className="group relative bg-paper border border-line rounded-2xl p-5 sm:p-6 flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-terra/40 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-16px_rgba(59,42,30,0.25)]"
    >
      {/* Watermark organ silhouette */}
      <div
        aria-hidden
        className="absolute -right-4 -bottom-4 w-28 h-28 text-terra/[0.08] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-terra/[0.14]"
      >
        <OrganIcon name={algo.organ} />
      </div>

      {/* Top meta row */}
      <div className="text-[10px] uppercase tracking-[0.18em] text-inkSoft/60 font-medium">
        {algo.site}
      </div>

      {/* Organ icon + title */}
      <div className="flex items-start gap-3 mt-4">
        <div className="h-11 w-11 rounded-xl bg-terra/10 text-terraDeep p-2.5 shrink-0 ring-1 ring-terra/15">
          <OrganIcon name={algo.organ} />
        </div>
        <h3 className="font-serif text-[18px] leading-tight font-semibold pt-0.5">
          {algo.name}
        </h3>
      </div>

      {/* Spec lines */}
      <dl className="mt-5 pt-5 border-t border-line/70 space-y-3 text-sm relative">
        <div className="grid grid-cols-[56px_1fr] gap-3">
          <dt className="text-[10px] uppercase tracking-[0.16em] text-inkSoft/60 font-medium pt-[2px]">In</dt>
          <dd className="text-ink leading-snug">{algo.input}</dd>
        </div>
        <div className="grid grid-cols-[56px_1fr] gap-3">
          <dt className="text-[10px] uppercase tracking-[0.16em] text-inkSoft/60 font-medium pt-[2px]">Out</dt>
          <dd className="text-ink leading-snug">{algo.output}</dd>
        </div>
      </dl>
    </article>
  );
}
