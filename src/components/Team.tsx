import { useState } from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [hoveredInstitution, setHoveredInstitution] = useState<string | null>(null);

  const teamMembers = [
    {
      id: "devansh",
      name: "Devansh Lalwani",
      // role: "Co-Founder",
      gradient: "from-blue-500 to-cyan-500",
      color: "blue",
      initial: "D",
      bio: "MBBS, AI Researcher. Doctor-turned-AI scientist with published research in medical AI. Leads clinical partnerships and product strategy.",
      achievements: ["Johns Hopkins Collaborator", "IIT Bombay Research Partner", "15+ Published Papers"],
      email: "devansh@turocrates.ai",
      linkedin: "https://linkedin.com/in/devansh-lalwani-61bb76221/",
      image: "/devansh.png"
    },
    {
      id: "maulik",
      name: "Maulik Shah",
      // role: "Co-Founder",
      gradient: "from-green-500 to-green-500",
      color: "green",
      initial: "M",
      bio: "Ex-AWS SWE-5 & Red Hat engineer. Enterprise-scale infrastructure expertise with focus on AI platform development and deployment automation.",
      achievements: ["Ex-AWS Engineer", "Red Hat OpenShift AI Contributor", "Cloud-Native Developer"],
      email: "maulik@turocrates.ai",
      linkedin: "https://linkedin.com/in/maulikjs",
      image: "/maulik.png"
    },
    {
      id: "swapnil",
      name: "Swapnil Bhat",
      // role: "Co-Founder",
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
      initial: "S",
      bio: "Ex-Miko.ai & ISRO engineer. Deep expertise in computer vision, robotics, and production-scale AI systems for mission-critical applications.",
      achievements: ["Series C Startup Veteran", "AI Researcher", "8+ Years Computer Vision Experience"],
      email: "swapnil@turocrates.ai",
      linkedin: "https://linkedin.com/in/swapnil-bhat-470799147/",
      image: "/swapnil.png"
    }
  ];

  const institutions = [
    { id: "iit", name: "IIT Bombay", gradient: "from-blue-500 to-cyan-500", initial: "IIT" },
    { id: "tmh", name: "Tata Memorial", gradient: "from-red-500 to-pink-500", initial: "TMH" },
  ];

  return (
    <section id="team" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6 hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
            World-Class Founding Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
            Clinical Expertise Meets AI Innovation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in hover:text-slate-200 transition-colors duration-300">
            Our founding team combines deep medical knowledge, enterprise AI experience, and a shared vision
            to revolutionize precision pathology globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group bg-gradient-to-br from-slate-900/70 to-slate-800/70 p-8 rounded-2xl border border-slate-700 hover:border-${member.color}-500/50 hover:bg-slate-800/80 transition-all duration-300 text-center animate-fade-in backdrop-blur-sm hover:scale-105 cursor-pointer ${selectedMember === member.id ? `ring-2 ring-${member.color}-500/50 shadow-2xl` : ''}`}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-28 h-28 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-${member.color}-500/20 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span className="text-white text-3xl font-bold">{member.initial}</span>
                )}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{member.name}</h3>
              {/* <p className={`text-${member.color}-400 font-medium mb-4 group-hover:text-${member.color}-300 transition-colors duration-300`}>{member.role}</p> */}
              <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                {member.bio}
              </p>
              <div className={`text-${member.color}-400 text-sm font-semibold space-y-1`}>
                {member.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <span>•</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Clickable contact buttons */}
              <div className="flex justify-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 hover:scale-110 transform"
                  title={`Email ${member.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                  title={`View ${member.name}'s LinkedIn`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>


        {/* Enhanced Advisory Board */}
        <div className="bg-gradient-to-br from-slate-800/70 to-slate-700/70 p-12 rounded-3xl border border-slate-600 backdrop-blur-sm hover:border-slate-500 transition-all duration-300">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Distinguished Advisory Board</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2">

            <div className="flex items-center gap-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-100 transition-transform duration-300">
                <span className="text-white font-bold text-l">KJ</span>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">Dr. Kshitij Jadhav</h4>
                <p className="text-purple-400 text-sm font-medium">Research Advisor</p>
                <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Professor, IIT Bombay | Head of AI Centre of Excellence, Ministry of India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-l">HD</span>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">Dr. Hemant Deshmukh</h4>
                <p className="text-purple-400 text-sm font-medium">Advisor</p>
                <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Ex Dean & Professor Emeritus, King Edward Memorial Hospitala</p>
              </div>
            </div>

            {/* <div className="flex items-center gap-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-l">R</span>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">Rohit Takhar</h4>
                <p className="text-purple-400 text-sm font-medium">Technical Advisor</p>
                <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">Former CTO, Carpl.ai | Radiology AI Platform Pioneer</p>
              </div>
            </div> */}
          </div>

          {/* Interactive Institutional Backing */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Institutional Partnerships</h4>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-8 max-w-md">
                {institutions.map((institution, index) => (
                  <div
                    key={institution.id}
                    className="text-center group cursor-pointer"
                    onMouseEnter={() => setHoveredInstitution(institution.id)}
                    onMouseLeave={() => setHoveredInstitution(null)}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${institution.gradient} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${hoveredInstitution === institution.id ? 'shadow-lg shadow-blue-500/20' : ''
                      }`}>
                      <span className="text-white font-bold text-sm">{institution.initial}</span>
                    </div>
                    <p className={`text-slate-400 text-sm group-hover:text-white transition-colors duration-300 ${hoveredInstitution === institution.id ? 'font-semibold' : ''
                      }`}>{institution.name}</p>
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