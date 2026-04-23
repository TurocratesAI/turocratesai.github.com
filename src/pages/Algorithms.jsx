import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import AlgoFilter from "../components/AlgoFilter.jsx";
import OrganIcon from "../components/OrganIcon.jsx";
import Ki67Diagram from "../components/Ki67Diagram.jsx";
import PathClawCallout from "../components/PathClawCallout.jsx";
import TuroChatComingSoon from "../components/TuroChatComingSoon.jsx";
import { algorithms, phoneAlgo } from "../data/algorithms.js";

export default function Algorithms() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.02] max-w-3xl mx-auto tracking-tight">
            AI for cancer diagnostics.
          </h1>
          <p className="mt-4 text-[17px] md:text-xl text-inkSoft max-w-2xl mx-auto leading-relaxed">
            Foundation-model and multiple-instance-learning pipelines trained on
            Indian and international data, validated on held-out cohorts.
          </p>
        </div>
      </section>

      {/* Library */}
      <Section tone="paper" density="default">
        <SectionHeading
          align="center"
          eyebrow="The library"
          title="A growing library of validated models."
          intro="Every card is production-trained on routine H&E, IHC or blood-smear inputs."
        />
        <AlgoFilter algorithms={algorithms} />
        <p className="mt-8 text-center text-xs md:text-sm text-inkSoft/70 max-w-2xl mx-auto">
          All algorithms are for Research Use Only (RUO) at this time.
          Regulatory clearance pathways (CE-IVDR, FDA 510(k) / De Novo, CDSCO) are in flight.
        </p>
      </Section>

      {/* Resource-agnostic — quantification from the phone, as a single cohesive card */}
      <Section density="default">
        <SectionHeading
          align="center"
          eyebrow="Resource-agnostic"
          title="Quantification from your phone."
          intro="Point the phone at your microscope eyepiece — or upload a scanner ROI — and get clinically-reportable Ki67, ER, PR or HER2 percent-positive counts. The same pipeline, whether you have a scanner or not."
        />

        <div className="relative bg-paper border border-line rounded-3xl overflow-hidden">
          {/* Header band — algorithm identity */}
          <div className="px-5 md:px-8 pt-6 md:pt-8 pb-5 md:pb-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 border-b border-line/80 bg-sand/40">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="h-14 w-14 rounded-2xl bg-terra/10 text-terraDeep p-3 shrink-0 ring-1 ring-terra/15">
                <OrganIcon name={phoneAlgo.organ} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-inkSoft/60 font-medium">
                  {phoneAlgo.site}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold leading-tight mt-1">
                  {phoneAlgo.name}
                </h3>
                <dl className="mt-3 text-sm grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-inkSoft/60 font-medium">Input</dt>
                    <dd className="text-ink leading-snug">{phoneAlgo.input}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-inkSoft/60 font-medium">Output</dt>
                    <dd className="text-ink leading-snug">{phoneAlgo.output}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="shrink-0">
              <Button href="https://turoquant.vercel.app/" external variant="primary">
                Try the live demo <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          {/* Diagram band */}
          <div className="px-5 md:px-8 py-6 md:py-8 relative">
            <div className="text-[10px] uppercase tracking-[0.2em] text-terra font-medium mb-4">
              Pipeline
            </div>
            <Ki67Diagram />
          </div>
        </div>
      </Section>

      {/* Single PoC CTA */}
      <Section tone="ink" density="tight">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            Reach out for a demo or PoC.
          </h2>
          <p className="text-sand/80 mt-3 leading-relaxed">
            We're open to research collaboration too — cohorts, pre-prints and joint
            grants. Tell us what you're working on.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              href="mailto:founders@turocrates.ai?subject=Demo%20or%20PoC"
              className="bg-terra text-sand hover:bg-terraDeep"
            >
              <Mail size={18} /> Email us
            </Button>
            <Button
              href="tel:+919622040008"
              variant="outline"
              className="border-sand text-sand hover:bg-sand hover:text-ink"
            >
              <Phone size={18} /> Call us
            </Button>
          </div>
        </div>
      </Section>

      {/* PathClaw + TuroChat */}
      <Section tone="paper" density="default">
        <PathClawCallout />
        <div className="mt-5">
          <TuroChatComingSoon />
        </div>
      </Section>
    </>
  );
}
