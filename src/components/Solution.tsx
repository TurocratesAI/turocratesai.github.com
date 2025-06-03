
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Zap, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

export const Solution = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [comparisonActive, setComparisonActive] = useState(false);

  return (
    <section id="solution" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Interactive ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl hover:bg-blue-500/10 transition-all duration-1000"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl hover:bg-cyan-500/10 transition-all duration-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
            Our Revolutionary Approach
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in hover:text-slate-200 transition-colors duration-300">
            We bypass the WSI bottleneck entirely, enabling precision pathology directly from standard H&E slides 
            with any existing microscope.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 animate-slide-in-left">
            <div 
              className={`group bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm cursor-pointer transform hover:scale-105 ${
                hoveredFeature === 'realtime' ? 'ring-2 ring-blue-500/50 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredFeature('realtime')}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Real-Time AI Analysis</h3>
                  <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                    Our platform enables AI analysis on images captured by attaching an affordable digital camera 
                    to existing microscopes. No expensive scanners required.
                  </p>
                  <div className="text-blue-400 font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    From 20 minutes to under 5 minutes per slide
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className={`group bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm cursor-pointer transform hover:scale-105 ${
                hoveredFeature === 'biomarker' ? 'ring-2 ring-purple-500/50 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredFeature('biomarker')}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Biomarker Prediction</h3>
                  <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                    Our deep learning models predict advanced biomarkers directly from H&E images, 
                    inferring results that typically require expensive specialized tests.
                  </p>
                  <div className="text-purple-400 font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    98% accuracy in MSI prediction
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 rounded-3xl text-white border border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => setComparisonActive(true)}
              onMouseLeave={() => setComparisonActive(false)}
            >
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-green-400 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-300">Cost Comparison</h3>
              </div>
              
              <div className="space-y-6">
                <div className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 transition-all duration-500 ${
                  comparisonActive ? 'transform -translate-y-2 shadow-lg border-red-500/50' : ''
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Traditional WSI Solution</span>
                    <span className={`text-2xl font-bold text-red-400 transition-all duration-300 ${
                      comparisonActive ? 'scale-110 animate-pulse' : ''
                    }`}>$14,000+</span>
                  </div>
                  <div className="text-sm text-slate-400">Scanner + Infrastructure + Storage</div>
                  <div className="mt-2 text-sm text-slate-400">1.5 GB per slide</div>
                </div>
                
                <div className={`bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30 transition-all duration-500 ${
                  comparisonActive ? 'transform translate-y-2 shadow-lg border-cyan-400/70 shadow-cyan-500/20' : ''
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">Turocrates.ai Solution</span>
                    <span className={`text-2xl font-bold text-cyan-400 transition-all duration-300 ${
                      comparisonActive ? 'scale-110 animate-pulse' : ''
                    }`}>$700</span>
                  </div>
                  <div className="text-sm text-slate-300">Camera + Edge Computing + Platform</div>
                  <div className="mt-2 text-sm text-slate-300">0.15 GB per slide</div>
                </div>
                
                <div className={`text-center py-4 transition-all duration-500 ${
                  comparisonActive ? 'transform scale-110' : ''
                }`}>
                  <div className="text-3xl font-bold text-green-400 mb-2 animate-pulse">95% Cost Reduction</div>
                  <div className="text-slate-300">Making digital pathology accessible to all labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="text-center">
          <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Learn More About Our Technology</span>
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};
