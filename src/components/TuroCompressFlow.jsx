import { ScanLine, Archive, Database, Eye } from "lucide-react";

function Box({ icon: Icon, title, sub, tone = "paper" }) {
  const bgCls =
    tone === "terra" ? "bg-terra/10 border-terra/30 text-terraDeep" :
    tone === "moss" ? "bg-moss/10 border-moss/30 text-moss" :
    "bg-paper border-line text-ink";
  return (
    <div className={`border rounded-2xl px-4 py-4 md:px-5 md:py-5 shadow-soft ${bgCls} min-h-[108px] flex flex-col`}>
      <div className="flex items-center gap-2">
        <Icon size={18} />
        <div className="font-semibold text-[15px] leading-tight">{title}</div>
      </div>
      {sub && <div className="text-xs mt-2 opacity-80 leading-relaxed">{sub}</div>}
    </div>
  );
}

function HArrow({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-terra" aria-hidden>
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
        <path d="M0 6h32" stroke="currentColor" strokeWidth="1.6" />
        <path d="M28 1l8 5-8 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && <div className="text-[10px] uppercase tracking-wider text-inkSoft/70 font-medium">{label}</div>}
    </div>
  );
}

function VArrow({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-terra py-2" aria-hidden>
      <svg width="12" height="28" viewBox="0 0 12 28" fill="none">
        <path d="M6 0v20" stroke="currentColor" strokeWidth="1.6" />
        <path d="M1 16l5 8 5-8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && <div className="text-[10px] uppercase tracking-wider text-inkSoft/70 font-medium">{label}</div>}
    </div>
  );
}

// Cost curve: two polylines diverging over time.
// No numbers on the axes — just the shape.
function CostCurve() {
  const W = 560;
  const H = 220;
  const pad = 40;
  // "without" curve: accelerating (quadratic)
  const withoutPts = [];
  for (let x = 0; x <= 10; x++) {
    const nx = pad + (x / 10) * (W - pad * 2);
    const ny = H - pad - Math.pow(x / 10, 1.6) * (H - pad * 2);
    withoutPts.push(`${nx.toFixed(1)},${ny.toFixed(1)}`);
  }
  // "with" curve: flatter (sublinear)
  const withPts = [];
  for (let x = 0; x <= 10; x++) {
    const nx = pad + (x / 10) * (W - pad * 2);
    const ny = H - pad - Math.pow(x / 10, 1.2) * 0.5 * (H - pad * 2);
    withPts.push(`${nx.toFixed(1)},${ny.toFixed(1)}`);
  }

  return (
    <div className="bg-paper border border-line rounded-2xl p-5 md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div className="font-serif text-lg font-semibold">Archival cost as slide volume grows</div>
        <div className="flex items-center gap-4 text-xs text-inkSoft">
          <span className="flex items-center gap-2">
            <span className="inline-block h-[2px] w-5 bg-terraDeep" /> Without TuroCompress
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-[2px] w-5 bg-moss" /> With TuroCompress
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Cost vs slide volume — two curves, the TuroCompress curve stays flatter as volume grows">
        {/* axes */}
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#E7DCCB" strokeWidth="1" />
        <line x1={pad} y1={pad / 2} x2={pad} y2={H - pad} stroke="#E7DCCB" strokeWidth="1" />
        {/* curves */}
        <polyline points={withoutPts.join(" ")} fill="none" stroke="#A74E30" strokeWidth="2.25" strokeLinecap="round" />
        <polyline points={withPts.join(" ")} fill="none" stroke="#4F7A5A" strokeWidth="2.25" strokeLinecap="round" />
        {/* axis labels */}
        <text x={W / 2} y={H - 8} textAnchor="middle" fontSize="11" fill="#5A4436">Slides archived →</text>
        <text x={12} y={H / 2} textAnchor="middle" fontSize="11" fill="#5A4436" transform={`rotate(-90 12 ${H / 2})`}>Archival cost →</text>
      </svg>
      <p className="mt-4 text-sm text-inkSoft leading-relaxed">
        Half the bytes, half the archival bill. The gap widens as your volume grows.
      </p>
    </div>
  );
}

export default function TuroCompressFlow() {
  return (
    <div className="space-y-6">
      {/* Desktop pipeline */}
      <div className="hidden md:block bg-paper border border-line rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-[1fr_56px_1.1fr_56px_1fr] items-stretch gap-y-0">
          <Box
            icon={ScanLine}
            title="Any scanner"
            sub="Vendor-agnostic. Standard WSI outputs — .svs, .tif, .ndpi, .scn, .mrxs, .bif."
          />
          <HArrow label="WSI" />
          <Box
            icon={Archive}
            title="TuroCompress .turo encoder"
            sub="Modular, drop-in. Runs on-prem or as a service. Lossless of diagnostic content. PCT patent filed."
            tone="terra"
          />
          <HArrow label=".turo" />
          <Box
            icon={Database}
            title="Storage"
            sub="On-prem, cloud or cold archive. Up to 50%+ smaller at rest."
            tone="moss"
          />
        </div>
        {/* Read-back branch */}
        <div className="mt-6 grid grid-cols-[1fr_56px_1.1fr_56px_1fr] items-center">
          <div />
          <div />
          <div className="flex flex-col items-center">
            <VArrow label="read-back" />
            <div className="w-full">
              <Box
                icon={Eye}
                title="Viewer & AI decoder"
                sub="Same .turo file — no conversion step. Decoder is free for research and bundled with TuroPath."
              />
            </div>
          </div>
          <div />
          <div />
        </div>
      </div>

      {/* Mobile pipeline */}
      <div className="md:hidden bg-paper border border-line rounded-2xl p-5 space-y-3">
        <Box icon={ScanLine} title="Any scanner" sub="Vendor-agnostic. Standard WSI outputs." />
        <VArrow label="WSI" />
        <Box icon={Archive} title="TuroCompress .turo encoder" sub="Modular, drop-in. Lossless of diagnostic content. PCT patent filed." tone="terra" />
        <VArrow label=".turo" />
        <Box icon={Database} title="Storage" sub="On-prem, cloud or cold archive. Up to 50%+ smaller at rest." tone="moss" />
        <VArrow label="read-back" />
        <Box icon={Eye} title="Viewer & AI decoder" sub="Same .turo file — no conversion step." />
      </div>

      <CostCurve />
    </div>
  );
}
