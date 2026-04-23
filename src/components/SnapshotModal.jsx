import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

export default function SnapshotModal({ open, onClose, snapshot, algoName }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !snapshot) return null;

  const { type, src, title } = snapshot;
  const heading = title || `${algoName} — sample`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-8 bg-ink/80 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label={heading}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 mb-2 md:mb-3">
          <div className="text-sand/90 text-sm md:text-base font-medium truncate">
            {heading}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs md:text-sm text-sand/80 hover:text-sand px-2 py-1 rounded-md border border-sand/20 hover:border-sand/40"
            >
              Open <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="h-9 w-9 rounded-full bg-sand text-ink border border-line shadow-soft flex items-center justify-center hover:bg-terra hover:text-sand transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden border border-line shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] bg-sand">
          {type === "image" ? (
            <img
              src={src}
              alt={heading}
              className="w-full h-full object-contain bg-sand"
            />
          ) : (
            <iframe
              src={`${src}#view=FitH`}
              title={heading}
              className="w-full h-full bg-sand"
            />
          )}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
    </div>
  );
}
