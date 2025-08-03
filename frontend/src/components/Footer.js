import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' }
  ];

  const services = [
    'Full-Stack Development',
    'Frontend Development', 
    'Backend Development',
    'Technical Consulting'
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourname', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourname', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourname', label: 'Twitter' },
    { icon: Mail, url: 'mailto:hello@yourname.dev', label: 'Email' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#302f2c] border-t border-[#3f4816] relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#d9fb06] text-[#1a1c1b] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-[87.5rem] mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="text-[#d9fb06] font-bold text-2xl tracking-tight mb-4">
              &lt;DevName /&gt;
            </div>
            <p className="text-[#888680] leading-relaxed mb-6">
              Full-stack developer passionate about creating exceptional digital experiences 
              with modern technologies and clean, scalable code.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#3f4816] rounded-lg flex items-center justify-center text-[#888680] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
                    title={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d9fb06] font-bold text-lg mb-6 uppercase tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#blog')}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#d9fb06] font-bold text-lg mb-6 uppercase tracking-tight">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-[#888680] text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#d9fb06] font-bold text-lg mb-6 uppercase tracking-tight">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#888680] text-sm mb-1">Email</p>
                <a 
                  href="mailto:hello@yourname.dev"
                  className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300"
                >
                  hello@yourname.dev
                </a>
              </div>
              <div>
                <p className="text-[#888680] text-sm mb-1">Phone</p>
                <a 
                  href="tel:+15551234567"
                  className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-[#888680] text-sm mb-1">Location</p>
                <p className="text-[#d9fb06]">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-[#d9fb06] text-2xl font-bold mb-2 uppercase tracking-tight">
              Stay Updated
            </h3>
            <p className="text-[#888680]">
              Subscribe to get notified about new articles and project updates.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-[#302f2c] border border-[#3f4816] rounded-full px-6 py-3 text-[#d9fb06] placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors duration-300"
            />
            <button className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3f4816] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-[#888680] text-sm">
              <span>© {currentYear} DevName. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-[#d9fb06]" />
            </div>
            
            <div className="flex items-center gap-6 text-[#888680] text-sm">
              <button className="hover:text-[#d9fb06] transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-[#d9fb06] transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;