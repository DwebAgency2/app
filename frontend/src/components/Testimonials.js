import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#1a1c1b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d9fb06' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-[87.5rem] mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
            Client Feedback
          </p>
          <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
            What Clients
            <br />
            <span className="text-white">Say</span>
          </h2>
          <p className="text-[#d9fb06] text-xl max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about 
            working with me on their projects.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-12 text-center relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-[#3f4816]" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#d9fb06] text-[#d9fb06]" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-[#d9fb06] text-xl lg:text-2xl font-medium leading-relaxed mb-8 italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#3f4816]"
              />
              <div className="text-left">
                <h4 className="text-[#d9fb06] font-bold text-lg">{currentTestimonial.name}</h4>
                <p className="text-[#888680] text-sm">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#d9fb06]' : 'bg-[#3f4816] hover:bg-[#888680]'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-[#302f2c] border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-[#d9fb06] bg-[#3f4816]' 
                  : 'border-[#3f4816] hover:border-[#888680]'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d9fb06] text-[#d9fb06]" />
                ))}
              </div>

              {/* Short Content */}
              <p className="text-[#d9fb06] text-sm mb-4 line-clamp-3">
                "{testimonial.content.slice(0, 100)}..."
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#3f4816]"
                />
                <div>
                  <h5 className="text-[#d9fb06] font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-[#888680] text-xs">{testimonial.role.split(',')[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-[#d9fb06] text-2xl font-bold mb-4 uppercase tracking-tight">
            Ready to Join These Happy Clients?
          </h3>
          <p className="text-[#888680] text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;