import { ArrowRight, ArrowUpRight, Calculator, PlayCircle } from "lucide-react";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import TuroPathFlow from "../components/TuroPathFlow.jsx";
import TuroCompressFlow from "../components/TuroCompressFlow.jsx";

export default function TuroPath() {
  return (
    <>
      {/* Hero — tight */}
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.02] max-w-3xl mx-auto tracking-tight">
            TuroPath.
          </h1>
          <p className="mt-4 text-[17px] md:text-xl text-inkSoft max-w-3xl mx-auto leading-relaxed">
            The infrastructure layer for the precision-care lab. Vendor-neutral,
            scanner-agnostic, HL7- and FHIR-compliant — the entire pathology workflow
            from specimen receipt to signed report.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="https://reliancelabs.turocrates.ai/" external>
              Open the demo <ArrowUpRight size={18} />
            </Button>
            <Button to="/contact" variant="outline">
              Request a pilot
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive workflow */}
      <Section tone="paper" density="default">
        <SectionHeading
          align="center"
          eyebrow="Workflow"
          title="Eight steps. Every one is an integration point."
          intro="Hover or tap a step to see what it plugs into."
        />
        <TuroPathFlow />
      </Section>

      {/* TuroCompress */}
      <Section id="turocompress" density="default">
        <SectionHeading
          align="center"
          eyebrow="TuroCompress"
          title="Drop-in compression between your scanner and your storage."
          intro="Our proprietary .turo format reduces whole-slide image size by more than half with no loss of diagnostic content. PCT patent filed. Offered as a managed service — send us your archive, get back a smaller one."
        />
        <TuroCompressFlow />

        <Card className="mt-8 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 justify-between">
          <div className="max-w-2xl">
            <h3 className="font-serif text-lg md:text-xl font-semibold">Offered as a service.</h3>
            <p className="text-sm md:text-base text-inkSoft mt-2 leading-relaxed">
              Point your scanner output or existing archive at our endpoint; we return
              .turo files ready to store. Decoder is free for research and bundled
              with TuroPath.
            </p>
          </div>
          <Button
            href="mailto:founders@turocrates.ai?subject=TuroCompress"
            variant="primary"
            className="shrink-0"
          >
            Talk to us <ArrowRight size={18} />
          </Button>
        </Card>
      </Section>

      {/* Try it */}
      <Section tone="paper" density="tight">
        <SectionHeading
          align="center"
          eyebrow="Try TuroPath for yourself"
          title="See it, or size it."
        />
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          <Card className="p-6 md:p-7 flex flex-col h-full gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-sea/10 text-sea flex items-center justify-center shrink-0">
                <PlayCircle size={22} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-terra font-medium">
                Live demo
              </div>
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight">
                Walk through a real deployment.
              </h3>
              <p className="text-sm text-inkSoft mt-2 leading-relaxed">
                A working TuroPath environment — synoptic reporting, digital slides, AI
                read-backs — open in your browser.
              </p>
            </div>
            <Button
              href="https://reliancelabs.turocrates.ai/"
              external
              variant="primary"
              className="mt-auto self-start"
            >
              Open the demo <ArrowUpRight size={18} />
            </Button>
          </Card>

          <Card className="p-6 md:p-7 flex flex-col h-full gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-moss/10 text-moss flex items-center justify-center shrink-0">
                <Calculator size={22} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-terra font-medium">
                ROI calculator
              </div>
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight">
                Calculate ROI for your lab.
              </h3>
              <p className="text-sm text-inkSoft mt-2 leading-relaxed">
                Maps TuroPath to savings in courier, IHC, OR time and archival — tailored
                to your volume.
              </p>
            </div>
            <Button
              href="https://roi.turocrates.ai/"
              external
              variant="outline"
              className="mt-auto self-start"
            >
              Open the calculator <ArrowUpRight size={18} />
            </Button>
          </Card>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="ink" density="tight">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            Bring TuroPath to your lab.
          </h2>
          <p className="text-sand/80 mt-3 leading-relaxed">
            We'll walk you through integration, compliance paperwork, and a pilot
            scoped to your volume.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              href="mailto:founders@turocrates.ai?subject=TuroPath%20pilot"
              className="bg-terra text-sand hover:bg-terraDeep"
            >
              Request a pilot <ArrowRight size={18} />
            </Button>
            <Button to="/contact" variant="outline" className="border-sand text-sand hover:bg-sand hover:text-ink">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
