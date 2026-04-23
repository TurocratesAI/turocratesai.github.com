const features = [
  {
    title: "WSI Viewer & Slide Management",
    body: "Deep-zoom viewing of high-resolution slides (SVS, NDPI, MRXS, etc.). Instructors can create guided \"tours\" with ordered waypoints and narrations.",
  },
  {
    title: "Clinical Case Builder",
    body: "Comprehensive case authoring including clinical history, descriptions, and diagnoses. Present cases side-by-side with interactive slides.",
  },
  {
    title: "Interactive Quizzes & Assessments",
    body: "Built-in quiz editor for questions linked to specific slide regions. Take quizzes directly within the viewer with instant grading and tracking.",
  },
  {
    title: "Classrooms & Collaboration",
    body: "Create virtual classrooms, manage student rosters, assign cases, and monitor performance. Share cases via Platform and Institutional libraries.",
  },
  {
    title: "Advanced Annotations",
    body: "Support for diverse annotation tools. Annotations sync to the cloud and work offline, enabling detailed collaborative study and analysis.",
  },
  {
    title: "Libraries & Collections",
    body: "Access curated global repositories of high-quality pathology cases or maintain private institutional libraries exclusively for your members.",
  },
];

export const TuroEducate = () => {
  return (
    <section id="turoeducate" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 animate-fade-in">
            Digital Pathology Education Platform — TuroEducate
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in">
            An advanced, multi-institutional pathology education platform with whole slide imaging,
            interactive quizzes, and collaborative learning tools for pathology training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 animate-fade-in backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-300 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://turoeducate.turocrates.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Sign up Now to TuroEducate
          </a>
        </div>
      </div>
    </section>
  );
};
