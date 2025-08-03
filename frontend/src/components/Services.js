import React from 'react';
import { Code, Palette, Server, Users, Check } from 'lucide-react';
import { services } from '../data/mockData';

const Services = () => {
  const iconMap = {
    Code: Code,
    Palette: Palette,
    Server: Server,
    Users: Users
  };

  return (
    <section id="services" className="py-24 bg-[#302f2c] relative">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
            What I Offer
          </p>
          <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
            My
            <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-[#d9fb06] text-xl max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life with 
            cutting-edge technology and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={index}
                className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg p-8 hover:border-[#d9fb06] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#3f4816] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d9fb06] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-[#d9fb06] text-2xl font-bold mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#888680] text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#d9fb06] flex-shrink-0" />
                      <span className="text-[#d9fb06] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg p-12 text-center">
          <h3 className="text-[#d9fb06] text-3xl font-bold mb-4 uppercase tracking-tight">
            Ready to Start Your Project?
          </h3>
          <p className="text-[#888680] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. 
            I'm here to help bring your vision to life with clean, scalable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h3 className="text-[#d9fb06] text-3xl font-bold text-center mb-12 uppercase tracking-tight">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", desc: "Architecture design and technology selection" },
              { step: "03", title: "Development", desc: "Building with clean, scalable code" },
              { step: "04", title: "Deployment", desc: "Testing, optimization, and launch" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#d9fb06] text-[#1a1c1b] rounded-full flex items-center justify-center font-black text-xl mb-4 mx-auto">
                  {phase.step}
                </div>
                <h4 className="text-[#d9fb06] text-lg font-bold mb-2 uppercase">{phase.title}</h4>
                <p className="text-[#888680] text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;