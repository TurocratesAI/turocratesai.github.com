
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Turocrates.ai Logo"
                  className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300"
                />
                <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  TurocratesAI
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#problem" className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group">
                Problem
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#solution" className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group">
                Solution
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#technology" className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group">
                Technology
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#team" className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold border-0 px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              <a href="https://forms.gle/zugVJYXvto9K2cym7" target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-blue-400 transition-colors p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-slate-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#problem" className="block px-4 py-3 text-slate-300 hover:text-blue-400 text-lg font-medium">Problem</a>
            <a href="#solution" className="block px-4 py-3 text-slate-300 hover:text-blue-400 text-lg font-medium">Solution</a>
            <a href="#technology" className="block px-4 py-3 text-slate-300 hover:text-blue-400 text-lg font-medium">Technology</a>
            <a href="#team" className="block px-4 py-3 text-slate-300 hover:text-blue-400 text-lg font-medium">Team</a>
            <Button className="mx-4 my-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 w-full">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
