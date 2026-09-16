import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JournalEntry {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
}

const entries: JournalEntry[] = [
  {
    id: "redis-caching-pipelines",
    title: "Building High-Throughput Redis Caching & Queue Pipelines",
    category: "Systems & Backend",
    readTime: "5 min read",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    excerpt:
      "Strategies for scaling concurrent Node.js microservices with Redis Pub/Sub, rate limiters, and in-memory caching to eliminate redundant database overhead.",
  },
  {
    id: "dual-database-architecture",
    title: "Architecting Dual PostgreSQL & MongoDB Enterprise Workflows",
    category: "Database Systems",
    readTime: "7 min read",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    excerpt:
      "Balancing relational data integrity with document flexibility in modern enterprise platforms like Cuboid, preserving ACID compliance while maximizing read speeds.",
  },
  {
    id: "prompt-engineering-paradigms",
    title: "Prompt Engineering: Beyond Standard LLM Completion Pipelines",
    category: "Generative AI",
    readTime: "4 min read",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    excerpt:
      "Deconstructing chain-of-thought methodologies, contextual few-shot steering, and production prompt caching paradigms for sub-second generative agent responses.",
  },
  {
    id: "fullstack-nextjs-laravel-architecture",
    title: "Full-Stack Scaling: Next.js & React SPAs with Laravel REST Backends",
    category: "Full-Stack Architecture",
    readTime: "6 min read",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    excerpt:
      "Patterns for integrating Next.js server rendering and React SPAs with robust Laravel backend APIs, Eloquent ORM relationships, and secure JWT authentication.",
  },
];

export const Journal: React.FC = () => {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);

  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Same header pattern (eyebrow + "Recent thoughts" + subtext + "View all" button) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Engineering Journal
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl text-text-primary font-normal tracking-tight">
              Technical{" "}
              <span className="font-display italic font-normal">insights</span>
            </h2>

            <p className="text-sm md:text-base text-muted mt-3 max-w-lg">
              Reflections on full-stack architecture, prompt engineering, and
              scalable database systems.
            </p>
          </div>

          {/* "View all" button */}
          <a
            href="https://www.linkedin.com/in/ikram-amjad-8963b4195"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center group relative rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors">
              <span>View all articles</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </motion.div>

        {/* 4 journal entries displayed as horizontal pills (rounded-[40px] sm:rounded-full) */}
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setActiveEntry(entry)}
              className="flex items-center justify-between gap-4 md:gap-6 p-3 sm:p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-all duration-300 group cursor-pointer hover:border-stroke/80 hover:shadow-lg"
            >
              {/* Left: Thumbnail & Title */}
              <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
                {/* Thumbnail */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-stroke/60">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Title & category */}
                <div className="min-w-0 pr-2">
                  <div className="text-[11px] uppercase tracking-wider text-muted hidden sm:block">
                    {entry.category}
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-text-primary group-hover:text-white transition-colors truncate">
                    {entry.title}
                  </h3>
                </div>
              </div>

              {/* Right: Read time, Date, and Arrow */}
              <div className="flex items-center gap-3 sm:gap-6 shrink-0 pr-2 sm:pr-4">
                {/* Read time pill */}
                <span className="text-[11px] text-muted border border-stroke px-3 py-1 rounded-full whitespace-nowrap bg-bg/50">
                  {entry.readTime}
                </span>

                {/* Date (hidden on very small screens) */}
                <span className="text-xs text-muted/70 hidden md:block whitespace-nowrap">
                  {entry.date}
                </span>

                {/* Arrow icon */}
                <div className="w-8 h-8 rounded-full border border-stroke/80 flex items-center justify-center text-xs text-muted group-hover:text-text-primary group-hover:border-transparent group-hover:accent-gradient transition-all duration-300">
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeEntry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEntry(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted">
                  {activeEntry.category} • {activeEntry.date}
                </span>
                <button
                  onClick={() => setActiveEntry(null)}
                  className="w-8 h-8 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-white"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-display italic text-text-primary">
                {activeEntry.title}
              </h3>

              <div className="rounded-2xl overflow-hidden h-48 w-full border border-stroke">
                <img
                  src={activeEntry.image}
                  alt={activeEntry.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {activeEntry.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-stroke">
                <span className="text-xs text-muted font-medium">
                  {activeEntry.readTime}
                </span>
                <a
                  href="https://www.linkedin.com/in/ikram-amjad-8963b4195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold accent-gradient-text hover:underline"
                >
                  Read full article ↗
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
