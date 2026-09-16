import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coreStacks } from "../data/portfolioData";
import { Terminal } from "lucide-react";

const categories = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Databases",
  "AI & LLM",
];

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStacks =
    activeCategory === "All"
      ? coreStacks
      : coreStacks.filter((item) => item.category === activeCategory);

  return (
    <section id="stack" className="bg-bg py-16 md:py-24 border-t border-stroke/60 relative">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Core Competencies
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-text-primary font-normal tracking-tight">
              Technical{" "}
              <span className="font-display italic font-normal">arsenal</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-xl leading-relaxed">
              Production-tested stack spanning full-stack frameworks, asynchronous runtimes,
              relational &amp; document databases, and AI prompt engineering.
            </p>
          </div>

          {/* Quick summary badge */}
          <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-full border border-stroke bg-surface/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono text-muted">
              12 Production Stacks
            </span>
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-text-primary text-bg border-text-primary font-semibold shadow-md scale-105"
                  : "bg-surface/50 text-muted border-stroke hover:text-text-primary hover:border-stroke/80 hover:bg-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stacks Grid: 12 cards in 3 or 4 columns */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredStacks.map((stack, idx) => (
              <motion.div
                key={stack.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="group relative rounded-2xl border border-stroke bg-surface/40 hover:bg-surface/80 p-5 md:p-6 transition-all duration-300 hover:border-stroke/90 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle hover accent light */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity pointer-events-none"
                  style={{ backgroundColor: stack.color }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Card Top */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Stack Badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider border border-stroke bg-bg/60 text-muted group-hover:text-text-primary/90 transition-colors">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: stack.color }}
                        />
                        <span>{stack.badge}</span>
                      </span>

                      {/* Category Label */}
                      <span className="text-[10px] uppercase font-mono tracking-widest text-muted/70">
                        {stack.category}
                      </span>
                    </div>

                    {/* Stack Name */}
                    <h3 className="text-xl sm:text-2xl font-display italic text-text-primary group-hover:accent-gradient-text transition-colors mb-2">
                      {stack.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {stack.desc}
                    </p>
                  </div>

                  {/* Card Bottom status footer */}
                  <div className="mt-5 pt-3 border-t border-stroke/40 flex items-center justify-between text-[11px] font-mono text-muted/80">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Production Ready
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-text-primary">
                      Active Stack ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stack Integration Architecture Banner */}
        <div className="mt-12 rounded-3xl border border-stroke bg-surface/30 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted font-mono">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineering Philosophy</span>
            </div>
            <h4 className="text-lg sm:text-xl font-display italic text-text-primary">
              Full-Cycle Architectural Execution
            </h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              From relational PostgreSQL &amp; MySQL modeling to high-throughput Node.js microservices,
              MERN &amp; Next.js frontends, and prompt engineering pipelines, every layer is engineered
              for clean abstraction, security, and low latency.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black hover:opacity-90 transition-opacity shadow-lg"
            >
              <span>Discuss Architecture</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechStack;
