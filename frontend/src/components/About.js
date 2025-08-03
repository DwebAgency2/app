import React from 'react';
import { Code, Coffee, Globe, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "5+", label: "Years Experience", icon: Coffee },
    { number: "30+", label: "Happy Clients", icon: Globe },
    { number: "15+", label: "Technologies Mastered", icon: Award }
  ];

  return (
    <section id="about" className="py-24 bg-[#1a1c1b] relative">
      <div className="max-w-[87.5rem] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
                About Me
              </p>
              <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
                Passionate
                <br />
                <span className="text-white">Full-Stack</span>
                <br />
                Developer
              </h2>
            </div>

            <div className="space-y-6 text-[#d9fb06] text-lg leading-relaxed">
              <p>
                I'm a dedicated full-stack developer with over 5 years of experience 
                building scalable web applications. My journey in software development 
                started with a fascination for solving complex problems through code.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and 
                building robust backend systems. My approach combines technical excellence 
                with user-centered design to create applications that not only work 
                flawlessly but also provide exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                mentoring junior developers, or exploring the latest trends in technology.
              </p>
            </div>

            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-8">
            {/* Profile Image Area */}
            <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-[#3f4816] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Code size={48} className="text-[#d9fb06]" />
              </div>
              <h3 className="text-[#d9fb06] text-xl font-bold mb-2">Full-Stack Developer</h3>
              <p className="text-[#888680]">Crafting digital experiences with code</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-6 text-center hover:bg-[#3f4816] transition-colors duration-300"
                  >
                    <IconComponent className="text-[#d9fb06] w-8 h-8 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#d9fb06] mb-1">{stat.number}</div>
                    <div className="text-[#888680] text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;