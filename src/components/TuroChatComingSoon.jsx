import { MessageCircle } from "lucide-react";
import Card from "./ui/Card.jsx";
import Pill from "./ui/Pill.jsx";

export default function TuroChatComingSoon() {
  return (
    <Card className="p-7 md:p-8 flex items-start gap-5">
      <div className="h-11 w-11 rounded-xl bg-terra/10 text-terraDeep flex items-center justify-center shrink-0">
        <MessageCircle size={22} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-serif text-xl font-semibold">TuroChat</h3>
          <Pill tone="sea">Coming soon</Pill>
        </div>
        <p className="text-sm text-inkSoft mt-2 leading-relaxed max-w-2xl">
          A conversational assistant for pathology case review. Ask questions of a case,
          pull the relevant slide region, and draft the report with the pathologist in the loop.
        </p>
      </div>
    </Card>
  );
}
