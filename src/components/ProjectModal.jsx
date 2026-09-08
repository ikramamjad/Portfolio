import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';

export default function ProjectModal({ project, onClose, theme }) {
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
          isDark
            ? 'bg-[#101423] border-white/10 text-white shadow-black/80'
            : 'bg-white border-slate-200 text-slate-900 shadow-xl'
        }`}
      >
        {/* Top Accent Strip */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
          style={{ backgroundColor: project.color || '#6366F1' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors ${
            isDark
              ? 'bg-slate-800/80 border-white/10 text-slate-400 hover:text-white hover:bg-slate-700'
              : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            {project.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            {project.badge}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
          {project.title}
        </h3>

        {/* Long Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
          {project.longDescription || project.description}
        </p>

        {/* Quick Stats Grid */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {Object.entries(project.stats).map(([key, value]) => (
              <div
                key={key}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center ${
                  isDark ? 'bg-slate-900/60 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                  {key}
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Engineering Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights?.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-500" />
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                  isDark ? 'bg-slate-800/80 text-slate-200 border-white/10' : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all"
          >
            <span>View Verified Experience on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
