import { useMemo, useState, useRef, useEffect } from "react";
import AlgoCard from "./AlgoCard.jsx";
import SnapshotModal from "./SnapshotModal.jsx";

// Simple site grouping so "Stomach / Colorectal / GI tract" etc. fold into sensible filters.
const groups = [
  { key: "all", label: "All" },
  { key: "Lung", match: ["Lung"] },
  {
    key: "GI",
    label: "GI & hepatobiliary",
    match: ["Colorectal", "Stomach", "GI tract", "Gallbladder", "Hepatobiliary"],
  },
  { key: "Gynae", label: "Gynae", match: ["Cervix"] },
  { key: "Skin", match: ["Skin"] },
  { key: "Haem", label: "Haematology", match: ["Blood", "Lymph node"] },
  { key: "QA", label: "Quality", match: ["Any tissue"] },
];

function inGroup(group, algo) {
  if (group.key === "all") return true;
  return group.match?.some((m) => algo.site.includes(m));
}

export default function AlgoFilter({ algorithms }) {
  const [active, setActive] = useState("all");
  const [openAlgo, setOpenAlgo] = useState(null);
  const scrollerRef = useRef(null);

  const filtered = useMemo(
    () => {
      const group = groups.find((g) => g.key === active) || groups[0];
      return algorithms.filter((a) => inGroup(group, a));
    },
    [active, algorithms]
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        groups.map((g) => [g.key, algorithms.filter((a) => inGroup(g, a)).length])
      ),
    [algorithms]
  );

  // Keep the active chip scrolled into view on mobile.
  useEffect(() => {
    const el = scrollerRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <div>
      <div
        ref={scrollerRef}
        className="flex gap-2 md:gap-2.5 overflow-x-auto scrollbar-none pb-3 -mx-6 px-6 md:-mx-10 md:px-10 mb-6 md:mb-8 md:justify-center"
        role="tablist"
        aria-label="Filter by tissue site"
      >
        {groups.map((g) => {
          const isActive = g.key === active;
          return (
            <button
              key={g.key}
              data-active={isActive}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(g.key)}
              className={[
                "shrink-0 inline-flex items-center gap-1.5 text-xs md:text-[13px] font-medium px-3.5 py-2 rounded-full border transition-colors",
                isActive
                  ? "bg-ink border-ink text-sand"
                  : "bg-paper border-line text-inkSoft hover:border-terra/40 hover:text-ink",
              ].join(" ")}
            >
              <span>{g.label || g.key}</span>
              <span
                className={[
                  "text-[10px] rounded-full px-1.5 leading-[1.4]",
                  isActive ? "bg-sand/15 text-sand" : "bg-sand text-inkSoft/70",
                ].join(" ")}
              >
                {counts[g.key]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
        {filtered.map((a) => (
          <AlgoCard key={a.slug} algo={a} onOpen={setOpenAlgo} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-sm text-inkSoft py-10">
          Nothing here yet — we're working on it.
        </div>
      )}

      <SnapshotModal
        open={!!openAlgo}
        onClose={() => setOpenAlgo(null)}
        snapshot={openAlgo?.snapshot}
        algoName={openAlgo?.name}
      />
    </div>
  );
}
