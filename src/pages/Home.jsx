import { ArrowRight, Microscope, GraduationCap, Brain } from "lucide-react";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import TeamTile from "../components/TeamTile.jsx";
import UpdateCard from "../components/UpdateCard.jsx";
import ComplianceStrip from "../components/ComplianceStrip.jsx";
import BackedByStrip from "../components/BackedByStrip.jsx";
import { coreTeam, advisors } from "../data/team.js";
import { updates } from "../data/updates.js";

const offerings = [
  {
    icon: Microscope,
    title: "TuroPath",
    blurb:
      "The lab operating system. Open, vendor-neutral, scanner-agnostic — from specimen receipt to signed report.",
    to: "/turopath",
  },
  {
    icon: GraduationCap,
    title: "TuroEducate",
    blurb:
      "A digital pathology teaching platform for institutions and individual pathologists.",
    to: "/turoeducate",
  },
  {
    icon: Brain,
    title: "AI Algorithms",
    blurb:
      "A library of validated models for cancer diagnostics — from H&E to IHC to blood smears.",
    to: "/algorithms",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight mx-auto max-w-4xl">
            OS of precision diagnostics.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-inkSoft leading-relaxed max-w-2xl mx-auto">
            Infrastructure and AI for precision care, built in India for the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <Button to="/turopath">
              See TuroPath <ArrowRight size={18} />
            </Button>
            <Button to="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* What we do — 3 pillars */}
      <Section tone="paper">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Three surfaces, one infrastructure stack."
          intro="We build the rails so precision diagnostics work from any lab, at any scale. Everything below interoperates."
        />
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {offerings.map((o) => (
            <Card
              key={o.title}
              className="p-7 flex flex-col items-center text-center gap-4 h-full hover:border-terra/40 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-terra/10 text-terraDeep flex items-center justify-center">
                <o.icon size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold">{o.title}</h3>
              <p className="text-sm md:text-[15px] text-inkSoft leading-relaxed flex-1">{o.blurb}</p>
              <Button to={o.to} variant="link" className="text-sm">
                Learn more <ArrowRight size={15} />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Team"
          title="Built by clinicians, engineers and researchers."
        />
        {/* Core team — 3-up */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {coreTeam.map((m) => (
            <TeamTile key={m.name} member={m} />
          ))}
        </div>

        {/* Advisors — centred pair */}
        <div className="mt-10 md:mt-12">
          <div className="text-xs uppercase tracking-[0.18em] text-terra font-medium text-center mb-6">
            Advisors
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {advisors.map((m) => (
              <TeamTile key={m.name} member={m} variant="centered" />
            ))}
          </div>
        </div>
      </Section>

      {/* Backed by + Make in India */}
      <Section tone="paper">
        <SectionHeading
          align="center"
          eyebrow="Backed by"
          title="Backed by institutions we respect."
        />
        <div className="max-w-4xl mx-auto">
          <BackedByStrip />
        </div>
        <div className="mt-12 flex flex-col items-center gap-3">
          <img
            src="/logos/make-in-india.png"
            alt="Make in India"
            className="h-16 w-auto"
            loading="lazy"
          />
          <div className="text-xs uppercase tracking-[0.18em] text-inkSoft/70 font-medium">
            Made in India for the world
          </div>
        </div>
      </Section>

      {/* Updates */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="What's new"
          title="Updates."
          intro="Events, press and releases. Reach out if you'll be at any of these."
        />
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {updates.map((u) => (
            <UpdateCard key={u.title} update={u} />
          ))}
        </div>
      </Section>

      {/* Compliance */}
      <Section tone="paper">
        <SectionHeading
          align="center"
          eyebrow="Compliance"
          title="Clinical-grade from day one."
        />
        <div className="max-w-4xl mx-auto">
          <ComplianceStrip />
        </div>
      </Section>
    </>
  );
}
