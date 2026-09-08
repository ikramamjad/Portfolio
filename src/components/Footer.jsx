import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import AnimeAvatar from './AnimeAvatar';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ theme }) {
  const [time, setTime] = useState('');
  const isDark = theme === 'dark';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative border-t py-12 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors ${
        isDark ? 'bg-[#080A10] border-white/10' : 'bg-slate-100 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand with Anime Avatar */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3 font-heading font-bold text-slate-900 dark:text-white">
            <AnimeAvatar size={30} withGlow={false} />
            <span>IKRAM AMJAD</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono">
              Active
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Islamabad, Pakistan • {time} Local Time
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-slate-300 hover:text-white hover:border-indigo-400'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-400 shadow-sm'
            }`}
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-slate-300 hover:text-white hover:border-indigo-400'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-400 shadow-sm'
            }`}
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-slate-300 hover:text-white hover:border-indigo-400'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-400 shadow-sm'
            }`}
            title="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 text-center md:text-right">
            © 2026 Ikram Amjad. <br className="hidden sm:inline" />
            Built with React, Three.js & Tailwind
          </p>
          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border transition-all active:scale-95 ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-slate-300 hover:text-white hover:border-indigo-400'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-400 shadow-sm'
            }`}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
