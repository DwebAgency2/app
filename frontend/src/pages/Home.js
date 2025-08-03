import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About'; 
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;