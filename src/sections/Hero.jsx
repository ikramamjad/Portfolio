import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ArrowDown, Send, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';
import HeroScene from '../components/canvas/HeroScene';
import BackgroundStars from '../components/canvas/BackgroundStars';
import AnimeAvatar from '../components/AnimeAvatar';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ liteMode, theme }) {
  const isDark = theme === 'dark';

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Starfield / Studio Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          gl={{ antialias: !liteMode, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <BackgroundStars liteMode={liteMode} theme={theme} />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle Mesh Ambient Glow */}
      <div
        className={`absolute inset-0 pointer-events-none z-1 transition-opacity duration-500 ${
          isDark ? 'mesh-gradient-dark opacity-80' : 'mesh-gradient-light opacity-90'
        }`}
      />

      {/* Main 2-Column Hero Grid: Text & Stats on Left, Dedicated 3D Stage on Right */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Value Proposition (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Active Status Pill with Anime Mascot */}
          <div
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border transition-all mb-6 shadow-sm ${
              isDark
                ? 'bg-slate-900/90 border-white/10 text-slate-200'
                : 'bg-white/95 border-slate-200 text-slate-700 shadow-sm'
            }`}
          >
            <AnimeAvatar size={24} withGlow={false} />
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
              {personalInfo.location}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
              Active Engineer @ Cuboid & WebMantis
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">Ikram Amjad</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-2xl font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            Computer Engineer • Full-Stack & Backend Architect
          </h2>

          {/* Core Stack Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-xl mb-6">
            {[
              { name: "Node.js", color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30" },
              { name: "MongoDB", color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30" },
              { name: "AWS (S3 & Lambda)", color: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30" },
              { name: "Redis Caching", color: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30" },
              { name: "PostgreSQL & MySQL", color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30" },
              { name: "React.js & MERN", color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30" },
              { name: "Prompt Engineering", color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30" },
            ].map((tag) => (
              <span
                key={tag.name}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${tag.color}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Value proposition narrative */}
          <p className="max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-8">
            Building scalable server-side systems, high-efficiency caching layers with Redis, and AI-assisted automation pipelines. Grounded in Computer Engineering fundamentals from COMSATS Abbottabad.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 sm:px-7 py-3.5 rounded-xl font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className={`px-6 sm:px-7 py-3.5 rounded-xl font-medium text-sm border transition-all active:scale-95 flex items-center gap-2 ${
                isDark
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-white/10'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
              }`}
            >
              <Send className="w-4 h-4 text-indigo-500" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-400 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>COMSATS Graduate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>AWS & Oracle Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>IEEE Project Manager</span>
            </div>
          </div>

        </div>

        {/* Right Column: Dedicated 3D Interactive Stage (5 cols) */}
        <div className="lg:col-span-5 h-[380px] sm:h-[480px] w-full rounded-3xl border relative overflow-hidden shadow-2xl transition-all">
          <div
            className={`w-full h-full cursor-grab active:cursor-grabbing ${
              isDark
                ? 'bg-gradient-to-b from-[#111422] to-[#0A0D18] border-white/10'
                : 'bg-gradient-to-b from-white to-slate-100/80 border-slate-200 shadow-lg'
            }`}
          >
            {/* Top Interactive HUD Indicator */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div
                className={`px-3 py-1 rounded-lg border font-mono text-xs flex items-center gap-2 ${
                  isDark
                    ? 'bg-slate-900/80 border-white/10 text-indigo-400'
                    : 'bg-white/90 border-slate-200 text-indigo-600 shadow-sm'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>3D Artifact</span>
              </div>
              <span
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border ${
                  isDark
                    ? 'bg-slate-900/80 border-white/10 text-slate-400'
                    : 'bg-white/90 border-slate-200 text-slate-500 shadow-sm'
                }`}
              >
                Interactive Tilt
              </span>
            </div>

            {/* 3D Canvas */}
            <Canvas
              camera={{ position: [0, 0, 7], fov: 45 }}
              gl={{ antialias: !liteMode, powerPreference: 'high-performance' }}
            >
              <Suspense fallback={null}>
                <HeroScene theme={theme} />
              </Suspense>
            </Canvas>

            {/* Bottom Subtle Caption */}
            <div className="absolute bottom-3 left-4 right-4 z-10 text-center pointer-events-none">
              <span
                className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                  isDark
                    ? 'bg-slate-900/80 border-white/10 text-slate-400'
                    : 'bg-white/90 border-slate-200 text-slate-500 shadow-sm'
                }`}
              >
                Move cursor to inspect 3D perspective
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
