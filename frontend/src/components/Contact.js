import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: response.data.message,
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@yourname.dev',
      link: 'mailto:hello@yourname.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San Francisco, CA'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/yourname' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/yourname' }
  ];

  return (
    <section id="contact" className="py-24 bg-[#1a1c1b] relative">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
            Let's Work
            <br />
            <span className="text-white">Together</span>
          </h2>
          <p className="text-[#d9fb06] text-xl max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#d9fb06] text-2xl font-bold mb-4 uppercase tracking-tight">
                Send Me a Message
              </h3>
              <p className="text-[#888680] text-lg mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Drop me a line and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#d9fb06] font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#d9fb06] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#d9fb06] font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#d9fb06] font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors duration-300 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#d9fb06] text-2xl font-bold mb-4 uppercase tracking-tight">
                Contact Information
              </h3>
              <p className="text-[#888680] text-lg mb-8">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-[#302f2c] border border-[#3f4816] rounded-lg hover:border-[#d9fb06] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#3f4816] rounded-lg flex items-center justify-center group-hover:bg-[#d9fb06] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[#888680] text-sm font-medium">{item.label}</p>
                      <p className="text-[#d9fb06] font-semibold">{item.value}</p>
                    </div>
                    {item.link.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-[#888680] ml-auto" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-8">
              <h4 className="text-[#d9fb06] text-lg font-bold mb-6 uppercase tracking-tight">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#3f4816] rounded-lg flex items-center justify-center text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 hover:scale-110"
                      title={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-8">
              <h4 className="text-[#d9fb06] text-lg font-bold mb-4 uppercase tracking-tight">
                Availability
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[#d9fb06] font-semibold">Available for new projects</span>
              </div>
              <p className="text-[#888680] text-sm">
                I'm currently accepting new client projects and collaborations. 
                Let's discuss your requirements and timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;