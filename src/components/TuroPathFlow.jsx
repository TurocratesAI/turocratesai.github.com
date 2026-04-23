import { Fragment, useState, useCallback, useEffect } from "react";
import {
  CreditCard,
  FlaskConical,
  Layers,
  ScanLine,
  Brain,
  FileText,
  Users,
  Database,
} from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    label: "LIS Billing",
    kicker: "Intake",
    branches: ["LIS / HMIS / HIS", "HL7 v2 orders", "FHIR R4 ServiceRequest", "Patient barcoding"],
  },
  {
    icon: FlaskConical,
    label: "Grossing",
    kicker: "Prep",
    branches: ["Macro image capture", "Specimen barcoding", "Block tracking"],
  },
  {
    icon: Layers,
    label: "Slide Prep",
    kicker: "Bench",
    branches: ["Slide printer", "Barcode printer", "H&E / IHC panels"],
  },
  {
    icon: ScanLine,
    label: "Digitisation",
    kicker: "Scan",
    branches: [
      "Any scanner type",
      ".svs  .tif  .ndpi",
      ".scn  .mrxs  .bif",
      "DICOM WSI",
    ],
  },
  {
    icon: Brain,
    label: "AI diagnosis",
    kicker: "CDx",
    branches: ["Custom CDx calls", "Heatmap overlays", "Pathologist-in-the-loop"],
  },
  {
    icon: FileText,
    label: "Auto drafting",
    kicker: "Report",
    branches: ["Synoptic templates", "ICD-10 auto-coder", "PDF + structured export"],
  },
  {
    icon: Users,
    label: "Specialist",
    kicker: "Sign-off",
    branches: ["Role-based routing", "Sign-off workflow", "Case-level audit trail"],
  },
  {
    icon: Database,
    label: "Archival",
    kicker: "Storage",
    branches: [
      "Stored in compressed .turo format",
      ">50% size reduction at rest",
      "Lossless retrieval for review",
      "On-prem or cloud retention",
    ],
  },
];

function Node({ step, index, active, onActivate }) {
  const Icon = step.icon;
  return (
    <button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-expanded={active}
      className={[
        "group relative w-full text-left bg-paper border rounded-2xl px-4 py-4 md:py-5",
        "shadow-soft transition-all duration-300 ease-out",
        active
          ? "border-terra/60 -translate-y-0.5 shadow-[0_12px_32px_-16px_rgba(198,107,74,0.5)]"
          : "border-line hover:border-terra/30 active:border-terra/40",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div
          className={[
            "h-10 w-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
            active ? "bg-terra text-sand" : "bg-terra/10 text-terraDeep",
          ].join(" ")}
        >
          <Icon size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] uppercase tracking-[0.18em] text-inkSoft/60 font-medium">
            {String(index + 1).padStart(2, "0")} · {step.kicker}
          </div>
          <div className="font-semibold text-[15px] md:text-[16px] leading-tight mt-1">
            {step.label}
          </div>
        </div>
      </div>
    </button>
  );
}

function Arrow({ direction = "right" }) {
  const rotate = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90",
  }[direction];
  return (
    <div className={`flex items-center justify-center text-terra/50 ${rotate}`} aria-hidden>
      <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
        <path d="M0 5h18" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
        <path d="M15 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BranchPanel({ step }) {
  return (
    <div
      className="bg-sand border border-terra/25 rounded-2xl p-4 md:p-5 shadow-[0_8px_22px_-14px_rgba(59,42,30,0.3)]"
      role="region"
      aria-label={`${step.label} integrations`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] uppercase tracking-[0.22em] text-terra font-medium">
          Integrates with
        </span>
        <span className="h-px flex-1 bg-terra/20" aria-hidden />
        <span className="font-serif text-base font-semibold">{step.label}</span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
        {step.branches.map((b) => (
          <li
            key={b}
            className="text-[14px] text-ink/85 leading-snug flex items-start gap-2"
          >
            <span className="text-terra mt-[7px] shrink-0" aria-hidden>
              <svg width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r="2.5" fill="currentColor" /></svg>
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TuroPathFlow() {
  const [active, setActive] = useState(0);

  const handleActivate = useCallback((i) => setActive(i), []);

  // Auto-rotate gently on desktop so the page feels alive — pause once user interacts.
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, 3500);
    return () => clearInterval(id);
  }, [autoplay]);

  const step = steps[active];

  // Desktop layout: 4-wide snake grid (2 rows × 4) — 8 steps.
  const perRow = 4;
  const rows = [steps.slice(0, perRow), steps.slice(perRow, perRow * 2)];
  const activeRow = Math.floor(active / perRow);

  return (
    <div
      aria-label="TuroPath workflow — tap or hover each step to see its integrations"
      onMouseEnter={() => setAutoplay(false)}
      onTouchStart={() => setAutoplay(false)}
      className="relative"
    >
      {/* ─────── Desktop: 4-wide snake, 2 rows ─────── */}
      <div className="hidden md:block">
        <div className="space-y-4">
          {rows.map((row, rIdx) => {
            const reverse = rIdx % 2 === 1;
            const ordered = reverse ? [...row].reverse() : row;
            return (
              <Fragment key={rIdx}>
                <div className="grid grid-cols-[1fr_24px_1fr_24px_1fr_24px_1fr] items-stretch gap-x-0">
                  {ordered.map((s, cIdx) => {
                    const realIndex = reverse ? rIdx * perRow + (perRow - 1 - cIdx) : rIdx * perRow + cIdx;
                    return (
                      <Fragment key={realIndex}>
                        <div>
                          <Node
                            step={s}
                            index={realIndex}
                            active={active === realIndex}
                            onActivate={() => handleActivate(realIndex)}
                          />
                        </div>
                        {cIdx < perRow - 1 && (
                          <div className="flex items-center justify-center">
                            <Arrow direction={reverse ? "left" : "right"} />
                          </div>
                        )}
                      </Fragment>
                    );
                  })}
                </div>

                {/* Down arrow on the side where the snake turns */}
                {rIdx < rows.length - 1 && (
                  <div className="grid grid-cols-[1fr_24px_1fr_24px_1fr_24px_1fr]">
                    {reverse ? (
                      <>
                        <div className="flex justify-center"><Arrow direction="down" /></div>
                        <div /><div /><div /><div /><div /><div />
                      </>
                    ) : (
                      <>
                        <div /><div /><div /><div /><div /><div />
                        <div className="flex justify-center"><Arrow direction="down" /></div>
                      </>
                    )}
                  </div>
                )}

                {/* Branch panel drops in below the row that owns the active step */}
                {activeRow === rIdx && (
                  <div
                    key={`branch-${active}`}
                    className="pt-2 animate-[fadeUp_.35s_ease-out]"
                  >
                    <div className="max-w-2xl mx-auto">
                      <BranchPanel step={step} />
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* ─────── Mobile ─────── */}
      <div className="md:hidden space-y-3">
        {steps.map((s, i) => {
          const isOpen = active === i;
          return (
            <div key={i}>
              <Node
                step={s}
                index={i}
                active={isOpen}
                onActivate={() => setActive(isOpen ? -1 : i)}
              />
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <BranchPanel step={s} />
                </div>
              </div>
              {i < steps.length - 1 && !isOpen && (
                <div className="flex justify-center py-2">
                  <Arrow direction="down" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs md:text-sm text-inkSoft/70">
        Tap any step to see what it plugs into.
      </p>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
