import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// 3D Perspective Tilt Card with Dynamic Specular Glare
function ProjectCard({ project, onInspect, theme }) {
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === 'dark';

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onInspect(project)}
      style={{
        transform: transform,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out'
      }}
      className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-[#131828] to-[#0D111E] border-white/10 hover:border-indigo-500/50 shadow-glass-dark'
          : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm hover:shadow-xl'
      }`}
    >
      {/* Specular Glare Highlight (3D Light Reflection) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 60%)`
        }}
      />

      {/* Top Accent Strip */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
        style={{ backgroundColor: project.color }}
      />

      {/* Card Content */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Engineering Stats Strip */}
        {project.stats && (
          <div
            className={`grid grid-cols-3 gap-2 py-3 px-3 rounded-xl border mb-6 ${
              isDark ? 'bg-slate-900/60 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k} className="text-center">
                <span className="block text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500">{k}</span>
                <span className="block text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{v}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${
                isDark ? 'bg-slate-800/80 text-slate-300 border-white/5' : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div
        className={`flex items-center justify-between pt-4 border-t ${
          isDark ? 'border-white/10' : 'border-slate-100'
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onInspect(project);
          }}
          className="flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Inspect Architecture</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center"
            title="View Details"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ onInspectProject, theme }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Backend & AI', 'Full Stack', 'Cloud & DevOps', 'Full Stack & Management'];
  const isDark = theme === 'dark';

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Engineering Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Production backend systems, cloud microservices, and full-stack architectures built for enterprise scalability and reliability.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  selectedFilter === f
                    ? 'bg-indigo-600 text-white font-bold shadow-md scale-105'
                    : isDark
                    ? 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-indigo-400 hover:text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400 hover:text-slate-900 shadow-sm'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Project Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={onInspectProject}
              theme={theme}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
