import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Orbit, Award, CheckCircle2, Cpu } from 'lucide-react';
import SkillsSphere from '../components/canvas/SkillsSphere';
import { skillsData, certificationsData } from '../data/portfolioData';

export default function Skills({ liteMode, theme }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Backend', 'Database', 'Cloud & AI', 'Frontend', 'Leadership'];
  const isDark = theme === 'dark';

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Interactive <span className="text-indigo-600 dark:text-indigo-400">Skills Constellation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            A 3D spherical constellation of core technologies across server-side engineering, databases, cloud microservices, and AI integrations. Drag to rotate and inspect proficiency.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white font-bold shadow-md scale-105'
                    : isDark
                    ? 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-indigo-400 hover:text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400 hover:text-slate-900 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: 3D Sphere Canvas + Interactive Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 3D Skills Sphere (7 cols) */}
          <div
            className={`lg:col-span-7 h-[450px] sm:h-[560px] w-full rounded-3xl border relative overflow-hidden shadow-xl ${
              isDark ? 'border-white/10 bg-gradient-to-b from-[#111628] to-[#0A0D18]' : 'border-slate-200 bg-gradient-to-b from-white to-slate-100 shadow-md'
            }`}
          >
            {/* 3D Sphere HUD Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-lg border font-mono text-xs ${
                  isDark ? 'bg-slate-900/90 border-white/10 text-indigo-400' : 'bg-white/90 border-slate-200 text-indigo-600 shadow-sm'
                }`}
              >
                <Orbit className="w-3.5 h-3.5 animate-spin" />
                <span>3D Skills Sphere</span>
              </div>
              <div
                className={`px-3 py-1 rounded-lg border font-mono text-[11px] ${
                  isDark ? 'bg-slate-900/90 border-white/10 text-slate-400' : 'bg-white/90 border-slate-200 text-slate-500 shadow-sm'
                }`}
              >
                Drag to Rotate
              </div>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas
                camera={{ position: [0, 0, 7.5], fov: 45 }}
                gl={{ antialias: !liteMode, powerPreference: 'high-performance' }}
              >
                <Suspense fallback={null}>
                  <SkillsSphere activeCategory={activeCategory} theme={theme} />
                </Suspense>
              </Canvas>
            </div>

            {/* Bottom Status Tip */}
            <div className="absolute bottom-3 left-4 right-4 z-10 text-center pointer-events-none">
              <span
                className={`inline-block px-3 py-1 rounded-full border text-[11px] font-mono ${
                  isDark ? 'bg-slate-900/90 border-white/10 text-slate-400' : 'bg-white/90 border-slate-200 text-slate-600 shadow-sm'
                }`}
              >
                Hover over any node on the sphere to inspect proficiency
              </span>
            </div>
          </div>

          {/* Right: Detailed Skill Cards & Proficiency Bars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[560px] overflow-y-auto pr-1">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 rounded-xl border transition-all group ${
                  isDark
                    ? 'bg-slate-900/50 border-white/10 hover:border-indigo-500/40 hover:bg-slate-900/80'
                    : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="font-mono font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className={`w-full h-1.5 rounded-full overflow-hidden mb-2 ${
                    isDark ? 'bg-slate-800' : 'bg-slate-100'
                  }`}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* AI & Cloud Certifications Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              Professional <span className="text-amber-500">Certifications & Credentials</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
                  isDark
                    ? 'bg-slate-900/60 border-white/10 hover:border-amber-500/40'
                    : 'bg-white border-slate-200 hover:border-amber-400 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
                    {cert.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <h4 className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100 mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
