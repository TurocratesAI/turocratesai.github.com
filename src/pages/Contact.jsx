import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import ComplianceStrip from "../components/ComplianceStrip.jsx";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("301 Titan House, MP Vaidya Marg, Ghatkopar, Mumbai");

export default function Contact() {
  return (
    <>
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-14 md:pb-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Contact.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-inkSoft max-w-2xl mx-auto leading-relaxed">
            Pilots, PoCs, research collaborations, press — we reply to everything.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <Card className="p-7 flex flex-col items-center text-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-terra/10 text-terraDeep flex items-center justify-center">
              <Mail size={22} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-inkSoft/70 font-medium">Email</div>
            <a
              href="mailto:founders@turocrates.ai"
              className="font-serif text-lg md:text-xl font-semibold text-ink hover:text-terraDeep break-words"
            >
              founders@turocrates.ai
            </a>
          </Card>

          <Card className="p-7 flex flex-col items-center text-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-terra/10 text-terraDeep flex items-center justify-center">
              <Phone size={22} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-inkSoft/70 font-medium">Phone</div>
            <a
              href="tel:+919622040008"
              className="font-serif text-lg md:text-xl font-semibold text-ink hover:text-terraDeep"
            >
              +91 96220 40008
            </a>
          </Card>

          <Card className="p-7 flex flex-col items-center text-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-terra/10 text-terraDeep flex items-center justify-center">
              <MapPin size={22} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-inkSoft/70 font-medium">Office</div>
            <address className="not-italic font-serif text-lg font-semibold leading-snug">
              301 Titan House,<br />MP Vaidya Marg,<br />Ghatkopar, Mumbai
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sea hover:text-terraDeep"
            >
              View on Maps <ArrowUpRight size={14} />
            </a>
          </Card>
        </div>
      </Section>

      <Section>
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
