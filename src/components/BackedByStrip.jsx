const backers = [
  { name: "WTFund", note: "Nikhil Kamath", src: "/logos/wtfund.png" },
  { name: "T-Hub", note: "Government of Telangana", src: "/logos/thub.png" },
  { name: "SINE IIT Bombay", note: "IIT Bombay incubator", src: "/logos/sine.png" },
];

export default function BackedByStrip({ variant = "section" }) {
  if (variant === "footer") {
    return (
      <ul className="space-y-3">
        {backers.map((b) => (
          <li key={b.name} className="flex items-center gap-3">
            <div className="h-10 w-14 bg-sand rounded-md flex items-center justify-center p-1 shrink-0">
              <img src={b.src} alt={`${b.name} logo`} className="max-h-8 max-w-full object-contain" />
            </div>
            <div>
              <div className="font-medium text-sand text-sm">{b.name}</div>
              <div className="text-sand/60 text-xs">{b.note}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6 items-stretch">
      {backers.map((b) => (
        <div
          key={b.name}
          className="bg-paper border border-line rounded-2xl px-3 md:px-6 py-5 md:py-7 flex flex-col items-center justify-center text-center gap-3 min-h-[140px]"
        >
          <div className="h-12 md:h-14 flex items-center justify-center w-full">
            <img
              src={b.src}
              alt={`${b.name} logo`}
              className="max-h-full max-w-[75%] object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <div className="font-serif text-sm md:text-base font-semibold">{b.name}</div>
            <div className="text-[11px] md:text-xs text-inkSoft mt-0.5">{b.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
