import { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoModal({ open, onClose, src, title }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-ink/80 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10 h-10 w-10 rounded-full bg-sand text-ink border border-line shadow-soft flex items-center justify-center hover:bg-terra hover:text-sand transition-colors"
        >
          <X size={18} />
        </button>
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-line shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] bg-ink">
          <iframe
            src={src}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        {title && (
          <div className="mt-3 text-center text-xs md:text-sm text-sand/80">
            {title}
          </div>
        )}
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
    </div>
  );
}
