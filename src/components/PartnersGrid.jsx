import Card from "./ui/Card.jsx";
import { partners } from "../data/partners.js";

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {partners.map((p) => (
        <Card
          key={p.name}
          className="p-4 md:p-5 flex flex-col items-center justify-between text-center gap-3 h-full min-h-[150px]"
        >
          <div className="flex-1 flex items-center justify-center w-full">
            {p.logo ? (
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="max-h-14 md:max-h-16 w-auto max-w-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="font-serif text-lg md:text-xl font-semibold leading-tight text-terraDeep">
                {p.name}
              </div>
            )}
          </div>
          <div className="w-full">
            {p.logo && (
              <div className="font-medium text-[13px] md:text-sm leading-tight text-ink">
                {p.name}
              </div>
            )}
            <div className="text-[11px] md:text-xs text-inkSoft/70 mt-0.5">{p.city}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
