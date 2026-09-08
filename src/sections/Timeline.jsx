import React from 'react';
import { Briefcase, GraduationCap, Users, MapPin, Calendar, Clock } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Timeline({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section
      id="timeline"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional <span className="text-indigo-600 dark:text-indigo-400">Experience & Track Record</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Chronological engineering track record from Electrical & Computer Engineering at COMSATS to active roles at Cuboid Inc & WebMantis.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative">
          {/* Central Connecting Spine */}
          <div
            className={`absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 ${
              isDark
                ? 'bg-gradient-to-b from-indigo-500 via-amber-500 to-emerald-500 opacity-60'
                : 'bg-gradient-to-b from-indigo-400 via-amber-400 to-emerald-400 opacity-50'
            }`}
          />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.type === 'Education';
              const isLeadership = item.type === 'Leadership';

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  {/* Central Node Badge */}
                  <div
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform group-hover:scale-110 z-20 ${
                      isDark
                        ? 'bg-[#0B0D14] border-indigo-400 shadow-md'
                        : 'bg-white border-indigo-600 shadow-sm'
                    }`}
                  >
                    {isEducation ? (
                      <GraduationCap className="w-4 h-4 text-purple-500" />
                    ) : isLeadership ? (
                      <Users className="w-4 h-4 text-pink-500" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-indigo-500" />
                    )}
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-right' : 'sm:text-left'
                  }`}>
                    <div
                      className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                        isDark
                          ? 'bg-[#121624] border-white/10 hover:border-indigo-500/40 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
                      }`}
                    >
                      {/* Year & Period Header */}
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          {item.year}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20">
                          {item.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-500 transition-colors">
                        {item.role}
                      </h3>
                      <div className={`flex items-center gap-2 text-sm font-mono text-indigo-600 dark:text-indigo-400 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span>{item.company}</span>
                        {item.location && (
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-0.5">
                            • {item.location}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Achievements */}
                      <ul className="space-y-1.5 mb-5">
                        {item.achievements?.map((ach, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 ${
                              isEven ? 'sm:justify-end' : 'sm:justify-start'
                            }`}
                          >
                            <span className="text-emerald-500 font-bold shrink-0">▹</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className={`flex flex-wrap gap-1.5 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        {item.skills?.map((sk) => (
                          <span
                            key={sk}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                              isDark ? 'bg-slate-800/80 text-slate-300 border-white/5' : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
