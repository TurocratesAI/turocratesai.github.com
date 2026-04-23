import { ArrowUpRight, FlaskConical } from "lucide-react";
import Card from "./ui/Card.jsx";
import Button from "./ui/Button.jsx";

export default function PathClawCallout() {
  return (
    <Card id="pathclaw" className="p-7 md:p-10 flex flex-col md:flex-row gap-8 items-start">
      <div className="h-12 w-12 rounded-xl bg-sea/10 text-sea flex items-center justify-center shrink-0">
        <FlaskConical size={24} />
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-[0.18em] text-terra font-medium">Open research</div>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold mt-2 leading-tight">
          PathClaw.
        </h3>
        <p className="mt-3 text-inkSoft leading-relaxed max-w-2xl">
          An open research environment for computational pathology. A chat-driven
          pipeline that runs WSI preprocessing, MIL training, genomic analysis and
          manuscript authoring — end-to-end, in one workspace.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            href="https://www.linkedin.com/posts/devansh-lalwani-61bb76221_pathclaw-openclaw-digitalpathology-ugcPost-7450743069726978048-1L7S"
            external
            variant="primary"
          >
            Read the announcement <ArrowUpRight size={16} />
          </Button>
          <Button
            href="mailto:founders@turocrates.ai?subject=PathClaw"
            variant="outline"
          >
            Collaborate with us
          </Button>
        </div>
      </div>
    </Card>
  );
}
