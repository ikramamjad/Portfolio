import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Server, Database, Cloud, Code2, ArrowRight } from 'lucide-react';
import DeskModel from '../components/canvas/DeskModel';
import AnimeAvatar from '../components/AnimeAvatar';
import { personalInfo, stats } from '../data/portfolioData';

export default function About({ liteMode, theme }) {
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <span>Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-indigo-600 dark:text-indigo-400">My Work & Experience</span>
          </h2>
        </div>

        {/* 2-Column Split: Story & Stats + 3D Interactive Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                isDark ? 'bg-[#121624] border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <AnimeAvatar size={44} className="ring-2 ring-indigo-500/30" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                    Full-Stack & Backend Systems Developer
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Electrical & Computer Engineer • COMSATS Abbottabad
                  </span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                {personalInfo.bio}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                Graduated with an Electrical & Computer Engineering degree from COMSATS Abbottabad. Beyond server-side engineering, I served as a Project Manager at IEEE COMSATS leading student technology initiatives, earned foundational AI & Cloud certifications from AWS and Oracle, and continually bridge scalable backend infrastructure with responsive user interfaces.
              </p>
            </div>

            {/* Live Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border transition-all hover:scale-[1.03] flex flex-col items-center justify-center text-center ${
                    isDark
                      ? 'bg-slate-900/60 border-white/10 hover:border-indigo-500/40'
                      : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Engineering Pillars from Resume */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <Server className="w-5 h-5 text-emerald-500 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Server Architectures</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Node.js, Express, PHP/Laravel, REST APIs thoroughly tested via Postman.</p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <Cloud className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Cloud & Caching</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">AWS (S3 & Lambda), Redis caching layers, PostgreSQL & MongoDB.</p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <Code2 className="w-5 h-5 text-indigo-500 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">AI & Full-Stack</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Prompt engineering, React.js & Angular.js interfaces, IEEE leadership.</p>
              </div>
            </div>

            {/* Link to Contact */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-medium text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all flex items-center gap-2"
              >
                <span>Let's Discuss Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#skills"
                className={`px-6 py-3 rounded-xl font-medium text-xs sm:text-sm border transition-all ${
                  isDark
                    ? 'bg-slate-900 text-slate-300 border-white/10 hover:border-white/20'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                Explore Skills ↓
              </a>
            </div>
          </div>

          {/* Right Column: 3D Developer Desk Canvas (5 cols) */}
          <div
            className={`lg:col-span-5 h-[420px] sm:h-[500px] w-full rounded-3xl border overflow-hidden relative shadow-xl ${
              isDark ? 'border-white/10 bg-gradient-to-b from-[#111628] to-[#0A0D18]' : 'border-slate-200 bg-gradient-to-b from-white to-slate-100 shadow-md'
            }`}
          >
            {/* Top HUD bar */}
            <div
              className={`absolute top-0 left-0 right-0 z-10 px-4 py-2.5 border-b flex items-center justify-between font-mono text-xs ${
                isDark ? 'bg-slate-900/80 border-white/10 text-slate-400' : 'bg-white/90 border-slate-200 text-slate-600 shadow-sm'
              }`}
            >
              <span className="flex items-center gap-2 font-semibold text-indigo-500">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                3D Developer Workstation
              </span>
              <span className="text-[10px] text-slate-400">Interactive Tilt</span>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas
                camera={{ position: [0, 3.2, 6.8], fov: 42 }}
                gl={{ antialias: !liteMode, powerPreference: 'high-performance' }}
              >
                <Suspense fallback={null}>
                  <DeskModel theme={theme} />
                </Suspense>
              </Canvas>
            </div>

            {/* Bottom Status Badge */}
            <div
              className={`absolute bottom-3 left-4 right-4 z-10 p-2.5 rounded-xl border backdrop-blur-md flex items-center justify-between text-xs font-mono ${
                isDark ? 'bg-slate-900/80 border-white/10 text-slate-300' : 'bg-white/90 border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <span>Dual Curved Displays • Mechanical Board</span>
              <span className="text-emerald-500 font-bold">READY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
