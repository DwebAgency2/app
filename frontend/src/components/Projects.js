import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-24 bg-[#302f2c] relative">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
            My Work
          </p>
          <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
            Featured
            <br />
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-[#d9fb06] text-xl max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            modern frameworks, and scalable architectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setVisibleProjects(6);
              }}
              className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                filter === category
                  ? 'bg-[#d9fb06] text-[#1a1c1b]'
                  : 'border border-[#d9fb06] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg overflow-hidden hover:border-[#d9fb06] transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1a1c1b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d9fb06] text-[#1a1c1b] p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d9fb06] text-[#1a1c1b] p-3 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-[#3f4816] text-[#d9fb06] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-[#d9fb06] text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[#888680] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-[#302f2c] text-[#d9fb06] px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[#888680] text-xs px-2 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="border border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;