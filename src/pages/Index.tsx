
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Technology } from "@/components/Technology";
import { Impact } from "@/components/Impact";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(30,41,59,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Problem />
        <Solution />
        <Technology />
        <Impact />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
