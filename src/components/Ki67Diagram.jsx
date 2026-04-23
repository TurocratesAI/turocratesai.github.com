import { Smartphone, Sparkles, Gauge, Microscope } from "lucide-react";

const steps = [
  { icon: Microscope, label: "Microscope slide", sub: "Ki67, ER, PR or HER2 IHC" },
  { icon: Smartphone, label: "Phone at eyepiece", sub: "or scanner ROI" },
  { icon: Sparkles, label: "AI segmentation", sub: "tumour vs. stroma, pos/neg nuclei" },
  { icon: Gauge, label: "Percent-positive", sub: "clinically-reportable output" },
];

export default function Ki67Diagram() {
  return (
    <div className="relative">
      {/* subtle hair-line grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #3B2A1E 1px, transparent 1px), linear-gradient(to bottom, #3B2A1E 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Desktop horizontal flow */}
      <ol className="relative hidden md:grid grid-cols-4 gap-3">
        {steps.map((s, i) => (
          <li key={i} className="relative">
            <div className="bg-paper border border-line rounded-xl p-4 h-full flex flex-col items-start gap-3">
              <div className="flex items-center justify-between w-full">
                <div className="h-9 w-9 rounded-lg bg-terra/10 text-terraDeep flex items-center justify-center">
                  <s.icon size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-inkSoft/50 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <div className="font-semibold text-[14px] leading-tight">{s.label}</div>
                <div className="text-[12px] text-inkSoft mt-1 leading-snug">{s.sub}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="absolute top-1/2 -right-2 -translate-y-1/2 text-terra/60 z-10"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M0 5h10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
                  <path d="M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* Mobile vertical flow */}
      <ol className="md:hidden space-y-3 relative">
        {steps.map((s, i) => (
          <li key={i}>
            <div className="bg-paper border border-line rounded-xl p-4 flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-terra/10 text-terraDeep flex items-center justify-center shrink-0">
                <s.icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-[14px] leading-tight">{s.label}</div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-inkSoft/50 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-[12px] text-inkSoft mt-1 leading-snug">{s.sub}</div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
