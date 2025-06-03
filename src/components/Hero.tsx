
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Award, Users, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 scroll-mt-20 pb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
      
      {/* Enhanced ambient lighting effects */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[60px] animate-pulse" style={{animationDelay: '3s'}}></div>
      
      {/* Interactive grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] hover:bg-[size:120px_120px] transition-all duration-1000"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_50%,#000_40%,transparent_70%)]"></div>
      
      {/* Interactive floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60 hover:opacity-100 hover:scale-150 transition-all duration-300 cursor-pointer" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-70 hover:opacity-100 hover:scale-150 transition-all duration-300 cursor-pointer" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float opacity-50 hover:opacity-100 hover:scale-150 transition-all duration-300 cursor-pointer" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-60 hover:opacity-100 hover:scale-150 transition-all duration-300 cursor-pointer" style={{animationDelay: '6s', animationDuration: '7s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Interactive trust indicators bar */}
          <div className="flex justify-center items-center gap-8 mb-8 opacity-70">
            {/* <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
              <Shield className="w-4 h-4 text-blue-400 group-hover:animate-pulse" />
              <span>FDA Track</span>
            </div> */}
            {/* <div className="w-px h-4 bg-slate-600"></div> */}
            <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer group">
              <Award className="w-4 h-4 text-purple-400 group-hover:animate-pulse" />
              <span>IIT Research Backed</span>
            </div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
              <Users className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span>Hospital Validated</span>
            </div>
          </div>

          {/* Interactive badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium backdrop-blur-sm animate-fade-in hover:scale-105 hover:border-blue-400/60 transition-all duration-300 shadow-lg shadow-blue-500/10 cursor-pointer group">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></div>
            <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent font-semibold">
              Next-Generation Pathology AI Platform
            </span>
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
          
          {/* Enhanced main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight animate-fade-in hover:scale-105 transition-transform duration-700 cursor-default">
              <span className="block">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-purple-300 hover:to-blue-400 transition-all duration-500">
                AI in Pathology
              </span>
              <span className="block">Infrastructure</span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-fade-in hover:w-48 transition-all duration-500"></div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed animate-fade-in font-light hover:text-slate-200 transition-colors duration-300">
            Deploy clinical-grade AI models on any microscope infrastructure.
            <br />
            <span className="font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">PyTorch-powered deep learning</span> with 
            <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300"> 98% diagnostic accuracy</span>.
            <br />
            <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300">49% more cost-effective</span> than traditional WSI solutions.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in">
            <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border-0 hover:scale-105 relative overflow-hidden">
              <a href="https://forms.gle/zugVJYXvto9K2cym7" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Request Demo</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </Button>
            {/* <Button variant="outline" size="lg" className="group text-slate-300 border-2 border-slate-600 hover:bg-white hover:text-black text-xl px-12 py-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">Technical Overview</span>
            </Button> */}
          </div>
          
          {/* Interactive stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto pt-16 animate-fade-in">
            <div 
              className="group relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
              onMouseEnter={() => setHoveredStat('accuracy')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className={`text-5xl font-black text-blue-400 mb-4 transition-all duration-300 ${hoveredStat === 'accuracy' ? 'animate-pulse text-6xl' : ''}`}>98.3%</div>
                <div className="text-slate-300 text-lg font-medium">MSI Prediction Accuracy</div>
                <div className="text-slate-500 text-sm mt-2">Validated on 5K+ sample dataset</div>
              </div>
            </div>
            
            <div 
              className="group relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              onMouseEnter={() => setHoveredStat('speed')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className={`text-5xl font-black text-cyan-400 mb-4 transition-all duration-300 ${hoveredStat === 'speed' ? 'animate-pulse text-6xl' : ''}`}>75%</div>
                <div className="text-slate-300 text-lg font-medium">Faster Processing Time</div>
                <div className="text-slate-500 text-sm mt-2">Edge computing optimized</div>
              </div>
            </div>
            
            <div 
              className="group relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              onMouseEnter={() => setHoveredStat('data')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className={`text-5xl font-black text-purple-400 mb-4 transition-all duration-300 ${hoveredStat === 'data' ? 'animate-pulse text-6xl' : ''}`}>0.15GB</div>
                <div className="text-slate-300 text-lg font-medium">Data per Slide</div>
                <div className="text-slate-500 text-sm mt-2">vs 1.5GB traditional WSI</div>
              </div>
            </div>
          </div>

          {/* Interactive technical specifications */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-8 rounded-3xl border border-slate-600/50 backdrop-blur-sm mt-12 max-w-4xl mx-auto hover:border-slate-500/70 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Enterprise Architecture</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-blue-400 font-bold text-lg group-hover:text-blue-300">PyTorch</div>
                <div className="text-slate-400 text-sm group-hover:text-slate-300">Deep Learning</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300">Triton</div>
                <div className="text-slate-400 text-sm group-hover:text-slate-300">Model Serving</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-purple-400 font-bold text-lg group-hover:text-purple-300">DICOM</div>
                <div className="text-slate-400 text-sm group-hover:text-slate-300">Standard Compliant</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-green-400 font-bold text-lg group-hover:text-green-300">Cloud/Edge</div>
                <div className="text-slate-400 text-sm group-hover:text-slate-300">Hybrid Deploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
