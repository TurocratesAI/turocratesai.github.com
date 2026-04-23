import { useEffect, useState } from "react";

// Real anatomical outlines from healthicons (filled) + a couple of hand-drawn
// matches for lymph node and cervix. All SVGs use fill="currentColor" so they
// tint with the container's text color.
const FILES = {
  colon: "/organs/colon.svg",
  lung: "/organs/lung.svg",
  gallbladder: "/organs/gallbladder.svg",
  stomach: "/organs/stomach.svg",
  gi: "/organs/gi.svg",
  qc: "/organs/qc.svg",
  cervix: "/organs/cervix.svg",
  blood: "/organs/blood.svg",
  skin: "/organs/skin.svg",
  breast: "/organs/breast.svg",
  breast_ihc: "/organs/breast.svg",
  lymph: "/organs/lymph.svg",
};

// Tiny cache so the same SVG isn't fetched twice across cards.
const cache = new Map();

export default function OrganIcon({ name = "qc", className = "" }) {
  const href = FILES[name] || FILES.qc;
  const [markup, setMarkup] = useState(cache.get(href) || null);

  useEffect(() => {
    if (cache.has(href)) {
      setMarkup(cache.get(href));
      return;
    }
    let cancelled = false;
    fetch(href)
      .then((r) => r.ok ? r.text() : "")
      .then((t) => {
        // strip outer <svg> wrapper attrs we don't want — keep the inner paths only
        const inner = t.replace(/<\?xml[^>]*\?>/, "").trim();
        cache.set(href, inner);
        if (!cancelled) setMarkup(inner);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [href]);

  return (
    <span
      aria-hidden
      className={`inline-block w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:block ${className}`}
      dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
    />
  );
}
