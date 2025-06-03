
export const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
            Enterprise-Grade Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 animate-fade-in">
            Clinical-Grade AI Infrastructure
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in">
            Built on battle-tested frameworks with regulatory compliance and enterprise security at its core
          </p>
        </div>
        
        {/* Core Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 animate-fade-in backdrop-blur-sm hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Universal Microscope Integration</h3>
            <p className="text-slate-300 mb-4">
              Vendor-agnostic platform supporting Olympus, Nikon, Zeiss, and Leica microscopes with standardized camera interfaces.
            </p>
            <div className="text-blue-400 text-sm font-semibold">Zero Infrastructure Change Required</div>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 hover:border-purple-500/50 transition-all duration-300 animate-fade-in backdrop-blur-sm hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">PyTorch Deep Learning Pipeline</h3>
            <p className="text-slate-300 mb-4">
              Production-ready CNNs with ResNet, EfficientNet, and Vision Transformer architectures optimized for histopathology.
            </p>
            <div className="text-purple-400 text-sm font-semibold">10K+ Hours Training Time</div>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 hover:border-green-500/50 transition-all duration-300 animate-fade-in backdrop-blur-sm hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">NVIDIA Triton Inference Server</h3>
            <p className="text-slate-300 mb-4">
              High-throughput model serving with GPU optimization, dynamic batching, and sub-100ms inference latency.
            </p>
            <div className="text-green-400 text-sm font-semibold">99.9% Uptime SLA</div>
          </div>
        </div>
        
        {/* Advanced Features Grid */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-12 rounded-3xl border border-slate-600 backdrop-blur-sm mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Advanced AI Capabilities</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-400">Intelligent Field Selection</h4>
                  <p className="text-slate-300">
                    AI-powered region of interest detection reduces data volume by 90% while maintaining diagnostic accuracy through selective high-resolution capture.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-400">Multi-Modal Biomarker Prediction</h4>
                  <p className="text-slate-300">
                    Simultaneous prediction of MSI, HER2, ER/PR, EGFR, and KRAS status from single H&E slides with clinical-grade confidence scores.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-400">Federated Learning Framework</h4>
                  <p className="text-slate-300">
                    Continuous model improvement through privacy-preserving federated learning across hospital networks without data sharing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-400">Real-Time Quality Control</h4>
                  <p className="text-slate-300">
                    Automated slide quality assessment, artifact detection, and staining consistency validation with immediate feedback loops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-6 text-blue-400">Performance Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Inference Latency</span>
                <span className="text-white font-semibold">&lt;100ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Throughput</span>
                <span className="text-white font-semibold">1000+ slides/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Accuracy</span>
                <span className="text-white font-semibold">98.3% AUC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Data Reduction</span>
                <span className="text-white font-semibold">90% smaller</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-6 text-purple-400">Security & Compliance</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">HIPAA Compliance</span>
                <span className="text-green-400 font-semibold">✓ Certified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">SOC 2 Type II</span>
                <span className="text-green-400 font-semibold">✓ Audited</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Data Encryption</span>
                <span className="text-green-400 font-semibold">AES-256</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">FDA Pathway</span>
                <span className="text-yellow-400 font-semibold">In Progress</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-slate-600 backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-6 text-green-400">Deployment Options</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Cloud</span>
                <span className="text-white font-semibold">AWS/Azure/GCP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">On-Premise</span>
                <span className="text-white font-semibold">Docker/K8s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Edge Computing</span>
                <span className="text-white font-semibold">NVIDIA Jetson</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hybrid</span>
                <span className="text-white font-semibold">Multi-Cloud</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
