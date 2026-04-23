const marks = [
  { title: "ISO 27001", src: "/logos/iso27001.svg", tone: "terra" },
  { title: "CDSCO", src: "/logos/cdsco.svg", tone: "moss" },
  { title: "HIPAA", src: "/logos/hipaa.svg", tone: "sea" },
  { title: "HL7 v2", src: "/logos/hl7.svg", tone: "ink" },
  { title: "FHIR R4", src: "/logos/fhir.svg", tone: "terra" },
];

export default function ComplianceStrip({ variant = "section" }) {
  if (variant === "footer") {
    return (
      <ul className="grid grid-cols-2 gap-2.5">
        {marks.map((m) => (
          <li key={m.title} className="flex items-center gap-2.5 min-w-0">
            <div className="h-9 w-9 bg-sand rounded-md flex items-center justify-center p-1 shrink-0">
              <img src={m.src} alt="" aria-hidden className="max-h-full max-w-full object-contain" />
            </div>
            <span className="font-medium text-sand text-[13px] leading-tight truncate">{m.title}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
      {marks.map((m) => (
        <div
          key={m.title}
          className="bg-paper border border-line rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center gap-2 aspect-[4/3]"
        >
          <div className="flex-1 w-full flex items-center justify-center min-h-0">
            <img
              src={m.src}
              alt={`${m.title} mark`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="font-serif text-[13px] md:text-sm font-semibold leading-tight">
            {m.title}
          </div>
        </div>
      ))}
    </div>
  );
}
