import React from 'react';
import { skills } from '../data/mockData';

const Skills = () => {
  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#d9fb06] font-semibold">{skill.name}</span>
        <span className="text-[#888680] text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-[#3f4816] rounded-full h-2 overflow-hidden">
        <div 
          className="bg-[#d9fb06] h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  const SkillCategory = ({ title, skillList, description }) => (
    <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-8 hover:border-[#d9fb06] transition-colors duration-300">
      <h3 className="text-[#d9fb06] text-2xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-[#888680] text-sm mb-6 leading-relaxed">{description}</p>
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-[#1a1c1b] relative">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
            My Expertise
          </p>
          <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
            Technical
            <br />
            <span className="text-white">Skills</span>
          </h2>
          <p className="text-[#d9fb06] text-xl max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, 
            database, and development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <SkillCategory 
            title="Frontend Development"
            description="Creating responsive and interactive user interfaces with modern frameworks and libraries."
            skillList={skills.frontend}
          />
          
          <SkillCategory 
            title="Backend Development"
            description="Building robust server-side applications with secure APIs and efficient data processing."
            skillList={skills.backend}
          />
          
          <SkillCategory 
            title="Database Management"
            description="Designing and optimizing databases for scalability, performance, and data integrity."
            skillList={skills.database}
          />
          
          <SkillCategory 
            title="Development Tools"
            description="Leveraging modern development tools and cloud platforms for efficient deployment and scaling."
            skillList={skills.tools}
          />
        </div>

        {/* Additional Info */}
        <div className="bg-[#302f2c] border border-[#3f4816] rounded-lg p-8 text-center">
          <h3 className="text-[#d9fb06] text-2xl font-bold mb-4 uppercase tracking-tight">
            Always Learning
          </h3>
          <p className="text-[#888680] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
            AI/ML integration, Web3 technologies, and advanced cloud architectures to stay at the 
            forefront of modern development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['AI/ML', 'Web3', 'Blockchain', 'Serverless', 'DevOps', 'Mobile Development'].map((tech, index) => (
              <span 
                key={index}
                className="bg-[#3f4816] text-[#d9fb06] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;