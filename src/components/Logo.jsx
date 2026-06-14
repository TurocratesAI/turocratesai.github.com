// The new brand wordmark already contains "Turocrates.ai" + the copper rings,
// rendered light-on-transparent so it sits naturally on the obsidian theme.
export default function Logo({ className = "h-9" }) {
  return (
    <img
      src="/logos/turocrates-logo-full.png"
      alt="Turocrates.ai"
      className={`${className} w-auto select-none`}
      draggable={false}
    />
  );
}
