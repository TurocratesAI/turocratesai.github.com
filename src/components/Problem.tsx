
import { useState } from "react";
import { TrendingDown, Clock, DollarSign, AlertTriangle } from "lucide-react";

export const Problem = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const problemStats = [
    {
      id: "analog",
      value: "96%",
      title: "Labs Still Analog",
      description: "Less than 4% of pathology labs globally have adopted digital workflows, compared to 80%+ in radiology.",
      color: "red",
      icon: TrendingDown
    },
    {
      id: "time",
      value: "20min",
      title: "Manual Analysis Time", 
      description: "Detecting TB bacilli manually takes 20 minutes per slide, severely limiting lab productivity and patient care.",
      color: "orange",
      icon: Clock
    },
    {
      id: "cost",
      value: "$14K+",
      title: "WSI Scanner Cost Barrier",
      description: "Traditional digital pathology requires expensive whole slide imaging scanners, making adoption impossible for most labs.",
      color: "yellow",
      icon: DollarSign
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"></div>
      
      {/* Interactive ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl hover:bg-red-500/10 transition-all duration-1000"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl hover:bg-orange-500/10 transition-all duration-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
            The Pathology Crisis
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in hover:text-slate-200 transition-colors duration-300">
            While radiology embraced digital transformation, pathology remains trapped in analog workflows, 
            limiting access to precision medicine for millions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            {problemStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.id}
                  className={`group bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm cursor-pointer transform hover:scale-105 hover:shadow-xl ${
                    activeCard === stat.id ? 'ring-2 ring-blue-500/50 shadow-2xl' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(stat.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      stat.color === 'red' ? 'bg-red-500/20 group-hover:bg-red-500/30' :
                      stat.color === 'orange' ? 'bg-orange-500/20 group-hover:bg-orange-500/30' :
                      'bg-yellow-500/20 group-hover:bg-yellow-500/30'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        stat.color === 'red' ? 'text-red-400' :
                        stat.color === 'orange' ? 'text-orange-400' :
                        'text-yellow-400'
                      } group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-4xl font-bold mb-4 transition-all duration-300 ${
                        stat.color === 'red' ? 'text-red-400' :
                        stat.color === 'orange' ? 'text-orange-400' :
                        'text-yellow-400'
                      } ${activeCard === stat.id ? 'scale-110' : ''}`}>
                        {stat.value}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">{stat.title}</h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-3xl border border-slate-600 backdrop-blur-sm hover:border-slate-500 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
                <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-300">The Bottleneck</h3>
              </div>
              <div className="space-y-4">
                {[
                  { color: 'red', text: 'Most AI solutions assume labs already have expensive scanners' },
                  { color: 'orange', text: 'Pathologists lack time for complex digital workflows' },
                  { color: 'yellow', text: 'Patients wait longer for critical diagnostic results' },
                  { color: 'green', text: 'Precision medicine remains inaccessible to most' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group/item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 group-hover/item:scale-150 ${
                      item.color === 'red' ? 'bg-red-400' :
                      item.color === 'orange' ? 'bg-orange-400' :
                      item.color === 'yellow' ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`}></div>
                    <span className="text-slate-300 group-hover/item:text-white transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
