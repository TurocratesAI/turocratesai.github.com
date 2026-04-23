export default function Logo({ className = "h-8", inverted = false }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logos/turocrates-mark.png"
        alt=""
        aria-hidden
        className={`h-full w-auto ${inverted ? "invert" : ""}`}
      />
      <span className={`font-serif text-lg font-semibold tracking-tight ${inverted ? "text-sand" : ""}`}>
        turo<span className={`font-normal ${inverted ? "text-sand/70" : "text-inkSoft"}`}>crates.ai</span>
      </span>
    </div>
  );
}
