import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[#1a1c1b]/90 backdrop-blur-sm z-50 border-b border-[#3f4816]/50">
      <div className="max-w-[87.5rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-[#d9fb06] font-bold text-xl tracking-tight">
            &lt;DevName /&gt;
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              Let's Work Together
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#d9fb06]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#3f4816]/50">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300 mt-4 self-start"
              >
                Let's Work Together
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;