export default function Pill({ children, tone = "default", className = "" }) {
  const tones = {
    default: "bg-sand border-line text-inkSoft",
    ink: "bg-ink text-sand border-ink",
    terra: "bg-terra/10 text-terraDeep border-terra/20",
    moss: "bg-moss/10 text-moss border-moss/20",
    sea: "bg-sea/10 text-sea border-sea/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
