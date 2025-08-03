import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-[#1a1c1b] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9fb06' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-[87.5rem] mx-auto px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <p className="text-[#888680] font-medium text-lg tracking-wide uppercase">
                Full-Stack Developer
              </p>
              <h1 className="font-black text-6xl lg:text-8xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight">
                Building
                <br />
                <span className="text-white">Digital</span>
                <br />
                Excellence
              </h1>
            </div>
            
            <p className="text-[#d9fb06] text-xl lg:text-2xl font-medium leading-relaxed max-w-lg">
              I craft scalable web applications using modern technologies. 
              From concept to deployment, I deliver exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="border border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com"
                 className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
            <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg overflow-hidden">
              <div className="bg-[#3f4816] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[#888680] text-sm ml-4">app.js</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-[#888680]">// Full-Stack Developer</div>
                <div className="text-[#d9fb06] mt-2">const developer = {`{`}</div>
                <div className="ml-4 text-white">name: <span className="text-[#f8d47a]">'Your Name'</span>,</div>
                <div className="ml-4 text-white">role: <span className="text-[#f8d47a]">'Full-Stack Developer'</span>,</div>
                <div className="ml-4 text-white">skills: [</div>
                <div className="ml-8 text-[#f8d47a]">'React', 'Node.js', 'Python',</div>
                <div className="ml-8 text-[#f8d47a]">'MongoDB', 'PostgreSQL', 'AWS'</div>
                <div className="ml-4 text-white">],</div>
                <div className="ml-4 text-white">passion: <span className="text-[#f8d47a]">'Creating Amazing Apps'</span></div>
                <div className="text-[#d9fb06]">{`};`}</div>
                <div className="mt-4 text-[#888680]">// Ready to build something great?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;