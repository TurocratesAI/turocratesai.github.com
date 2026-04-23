import { ArrowUpRight, Newspaper } from "lucide-react";

export default function UpdateCard({ update }) {
  return (
    <article className="group bg-paper border border-line rounded-2xl overflow-hidden transition-all duration-300 hover:border-terra/40 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-16px_rgba(59,42,30,0.2)] h-full flex flex-col md:flex-row">
      <div className="md:w-2/5 md:shrink-0 aspect-[16/10] md:aspect-auto bg-sand border-b md:border-b-0 md:border-r border-line overflow-hidden flex items-center justify-center">
        {update.image ? (
          <img
            src={update.image}
            alt={update.imageAlt || update.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <Newspaper size={40} className="text-inkSoft/40" aria-hidden />
        )}
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col min-w-0">
        <div className="text-[10px] uppercase tracking-[0.2em] text-terra font-medium">
          {update.date}
        </div>
        <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight mt-2">
          {update.title}
        </h3>
        <p className="text-[13px] md:text-sm text-inkSoft mt-2 leading-relaxed flex-1">
          {update.body}
        </p>
        {update.cta && (
          <a
            href={update.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sea hover:text-terraDeep group/cta"
          >
            {update.cta.label}
            <ArrowUpRight size={15} className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
