import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";

const links = [
  { to: "/", label: "About", end: true },
  { to: "/turopath", label: "TuroPath" },
  { to: "/turoeducate", label: "TuroEducate" },
  { to: "/algorithms", label: "AI" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-sand/90 backdrop-blur border-b border-line">
      <div className="max-w-container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Turocrates.ai home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-terraDeep" : "text-ink hover:text-terraDeep"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-sand">
          <div className="max-w-container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${
                    isActive ? "text-terraDeep" : "text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
