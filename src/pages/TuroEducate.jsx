import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Pencil,
  BookOpen,
  Route,
  ListChecks,
  Users,
  Library,
  ShieldCheck,
  Play,
} from "lucide-react";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import VideoModal from "../components/VideoModal.jsx";

const DEMO_VIDEO =
  "https://drive.google.com/file/d/1zh0gHCM2XsDi-CcTifKphhHBwk9LpXbw/preview";

const features = [
  {
    icon: Eye,
    title: "Gigapixel WSI viewer",
    body: "Deep-zoom viewer tuned for pathology. Fast tile streaming from cloud or on-prem.",
  },
  {
    icon: Pencil,
    title: "Annotation tools",
    body: "AI-assisted tools for easier annotations, plus rectangle, ellipse, line, arrow, freehand and point primitives.",
  },
  {
    icon: BookOpen,
    title: "Clinical case builder",
    body: "Clinical history, gross description, microscopic description, differential, final diagnosis, teaching points and references — in one place.",
  },
  {
    icon: Route,
    title: "Guided slide tours",
    body: "Ordered waypoints with narration. Teach from the slide, not around it.",
  },
  {
    icon: ListChecks,
    title: "Quizzes anchored to slides",
    body: "Multiple-choice questions linked to specific regions of a slide. Track student performance over time.",
  },
  {
    icon: Users,
    title: "Classrooms and collections",
    body: "Instructor-managed rosters. Curated case groupings for residents, fellows and self-learners.",
  },
  {
    icon: Library,
    title: "Three-tier libraries",
    body: "Platform library (global curated cases), institutional library (org-exclusive), and shared-with-me (peer shares).",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    body: "Institution admins, instructors and students — with per-user storage limits and permission scopes.",
  },
];

export default function TuroEducate() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.02] max-w-3xl mx-auto tracking-tight">
            TuroEducate.
          </h1>
          <p className="mt-4 text-[17px] md:text-xl text-inkSoft max-w-3xl mx-auto leading-relaxed">
            An education and research platform for digital pathology. Store slides for
            CME and slide seminars, add advanced annotations, run assessments. Sharing
            works exactly like Google Drive.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button onClick={() => setVideoOpen(true)}>
              <Play size={16} /> Watch the demo
            </Button>
            <Button href="https://turoeducate.turocrates.ai/" external variant="outline">
              Open the live product <ArrowUpRight size={18} />
            </Button>
            <Button to="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>
      </section>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src={DEMO_VIDEO}
        title="TuroEducate — product demo"
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="What's inside"
          title="Built for teaching, built for scale."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {features.map((f) => (
            <Card key={f.title} className="p-7 flex items-start gap-5">
              <div className="h-11 w-11 rounded-xl bg-terra/10 text-terraDeep flex items-center justify-center shrink-0">
                <f.icon size={22} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{f.title}</h3>
                <p className="text-sm text-inkSoft mt-2 leading-relaxed">{f.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">
              See TuroEducate in action.
            </h2>
            <p className="text-sand/80 mt-3 leading-relaxed">
              Open the live platform, or ask us for an institutional walkthrough.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
            <Button href="https://turoeducate.turocrates.ai/" external className="bg-terra text-sand hover:bg-terraDeep">
              Visit TuroEducate <ArrowRight size={18} />
            </Button>
            <Button to="/contact" variant="outline" className="border-sand text-sand hover:bg-sand hover:text-ink">
              Request a walkthrough
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
