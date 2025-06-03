
export const Impact = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 animate-fade-in">
            Transforming Patient Outcomes
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in">
            Our technology democratizes access to precision medicine, bringing advanced diagnostic capabilities 
            to every pathology lab, everywhere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 text-center animate-fade-in backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Faster Diagnosis</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">75%</div>
            <p className="text-slate-300">
              Reduction in analysis time enables same-day reporting and faster treatment decisions
            </p>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 text-center animate-fade-in backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Higher Accuracy</h3>
            <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
            <p className="text-slate-300">
              AI-powered analysis reduces human error and provides consistent, reproducible results
            </p>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 text-center animate-fade-in backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Broader Access</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">300K+</div>
            <p className="text-slate-300">
              Labs worldwide can now access advanced AI diagnostics without expensive infrastructure
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-12 rounded-3xl text-white text-center border border-slate-600 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6">Real-World Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Colorectal Cancer Care</h4>
              <p className="text-slate-300 mb-4">
                Our MSI prediction eliminates the need for expensive molecular testing in 90% of cases, 
                enabling immediate immunotherapy decisions.
              </p>
              <div className="text-blue-400 font-semibold">From weeks to minutes for biomarker results</div>
            </div>
            
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">TB Detection</h4>
              <p className="text-slate-300 mb-4">
                Automated bacilli detection reduces manual screening time from 20 minutes to under 5 minutes, 
                dramatically improving lab productivity.
              </p>
              <div className="text-blue-400 font-semibold">4x faster TB diagnosis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
