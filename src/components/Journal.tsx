import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EditorialHeadline, EditorialSupporting, ParallaxLayer } from "./motion/EditorialReveal";
import { BookOpen, ArrowUpRight, ChevronRight } from "lucide-react";
import { prefersReducedMotion } from "./motion/motionTokens";

gsap.registerPlugin(ScrollTrigger);

interface JournalEntry {
  id: string;
  numeral: string;
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
    numeral: "01",
    title: "Building High-Throughput Redis Caching & Queue Pipelines",
    category: "Systems & Backend",
    readTime: "5 min read",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Strategies for scaling concurrent Node.js microservices with Redis Pub/Sub, distributed rate limiters, and in-memory caching to eliminate redundant database overhead under high IOPS loads.",
  },
  {
    id: "dual-database-architecture",
    numeral: "02",
    title: "Architecting Dual PostgreSQL & MongoDB Enterprise Workflows",
    category: "Database Systems",
    readTime: "7 min read",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Balancing relational ACID data integrity with document flexibility in modern enterprise platforms like Cuboid, preserving transactional reliability while maximizing sub-second read throughput.",
  },
  {
    id: "prompt-engineering-paradigms",
    numeral: "03",
    title: "Prompt Engineering: Beyond Standard LLM Completion Pipelines",
    category: "Generative AI",
    readTime: "4 min read",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Deconstructing chain-of-thought methodologies, contextual few-shot steering, and production prompt caching paradigms for sub-second deterministic generative agent workflows.",
  },
  {
    id: "fullstack-nextjs-laravel-architecture",
    numeral: "04",
    title: "Full-Stack Scaling: Next.js & React SPAs with Laravel REST Backends",
    category: "Full-Stack Architecture",
    readTime: "6 min read",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Architectural patterns for integrating Next.js server rendering with robust Laravel backend APIs, Eloquent ORM relations, transactional boundaries, and secure JWT authentication tokens.",
  },
];

export const Journal: React.FC = () => {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ScrollTrigger Pinned Deck: Cards display one by one as the user scrolls
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const pinned = pinnedContainerRef.current;
    if (!section || !pinned) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Create master timeline for one-by-one card presentation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2600", // Smooth scroll distance for 4 cards
          pin: pinned,
          pinSpacing: true,
          scrub: 1.2, // Momentum inertia scrub
          onUpdate: (self) => {
            const raw = self.progress * entries.length;
            const index = Math.min(Math.floor(raw), entries.length - 1);
            setActiveIndex(index);
          },
        },
      });

      // Animate cards 1, 2, 3 in succession over the preceding card
      for (let i = 1; i < entries.length; i++) {
        const currentCard = cardsRef.current[i];
        const prevCard = cardsRef.current[i - 1];

        const timelinePos = (i - 1) * 1.5;

        if (currentCard) {
          tl.fromTo(
            currentCard,
            {
              yPercent: 110,
              opacity: 0,
              scale: 0.9,
              filter: "blur(12px)",
            },
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power2.out",
            },
            timelinePos
          );
        }

        if (prevCard) {
          tl.to(
            prevCard,
            {
              scale: 0.94,
              opacity: 0.25,
              y: -24,
              filter: "blur(4px)",
              duration: 1.2,
              ease: "power2.out",
            },
            timelinePos
          );
        }
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="journal"
      ref={sectionRef}
      className="relative bg-[#050505] border-t border-white/10"
    >
      {/* Restrained Parallax Background Atmosphere */}
      <ParallaxLayer offset={[80, -80]} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-pink-soft/10 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-brand-crimson/10 blur-[160px]" />
      </ParallaxLayer>

      {/* --- DESKTOP VIEW (lg:block): Pinned Viewport with One-by-One Card Scroll Animation --- */}
      <div className="hidden lg:block">
        <div
          ref={pinnedContainerRef}
          className="h-screen w-full flex items-center justify-center relative z-10 px-8 lg:px-16"
        >
          <div className="w-full max-w-[1300px] mx-auto grid grid-cols-12 gap-16 items-center">
            {/* Left Column: Editorial Billboard & Active Card Indicator */}
            <div className="col-span-5 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-pink-soft/60" />
                <span className="font-mono text-xs text-pink-soft uppercase tracking-[0.3em] font-medium">
                  Engineering Journal // 02
                </span>
              </div>

              {/* Bold Condensed Headline with selective soft-pink emphasis */}
              <EditorialHeadline
                as="h2"
                className="text-5xl lg:text-7xl font-condensed font-black uppercase tracking-tight text-white/95"
              >
                FIELD{" "}
                <span className="text-pink-soft font-normal italic font-display">notes</span>
              </EditorialHeadline>

              <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                [ TECHNICAL INSIGHTS &amp; PRODUCTION DISPATCHES ]
              </div>

              {/* Editorial Description */}
              <EditorialSupporting delay={0.2} className="space-y-4">
                <p className="font-sans text-sm lg:text-base text-zinc-400 leading-relaxed max-w-md">
                  Documented post-mortems and architectural trade-offs across high-throughput Redis pipelines, dual-database models, and sub-second prompt caching.
                </p>

                {/* Dynamic Step-by-Step Progress Indicator */}
                <div className="pt-4 space-y-3 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {entries.map((entry, idx) => (
                      <div
                        key={entry.id}
                        className={`h-1.5 rounded-full transition-all duration-400 ${
                          activeIndex === idx
                            ? "w-10 bg-pink-soft shadow-[0_0_10px_rgba(253,164,175,0.6)]"
                            : "w-3 bg-white/20"
                        }`}
                      />
                    ))}
                    <span className="font-mono text-xs text-pink-soft ml-3 font-semibold">
                      [ 0{activeIndex + 1} / 0{entries.length} ]
                    </span>
                  </div>

                  <div className="font-mono text-[11px] text-zinc-400 tracking-wider">
                    <span className="text-white/80 font-medium">Active Dispatch: </span>
                    <span className="text-pink-soft">{entries[activeIndex].category}</span>
                  </div>
                </div>

                {/* View all articles link */}
                <div className="pt-4">
                  <a
                    href="https://www.linkedin.com/in/ikram-amjad-8963b4195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group relative rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
                  >
                    <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/90 backdrop-blur-md px-6 py-3 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors font-mono">
                      <BookOpen className="w-3.5 h-3.5 text-pink-soft" />
                      <span className="animated-underline">All Insights</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </div>
              </EditorialSupporting>
            </div>

            {/* Right Column: One-by-One Card Showcase (Stacked Deck Frame) */}
            <div className="col-span-7 relative h-[560px] flex items-center justify-center">
              {entries.map((entry, idx) => (
                <div
                  key={entry.id}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  onClick={() => setActiveEntry(entry)}
                  style={{
                    zIndex: idx + 10,
                  }}
                  className={`absolute inset-0 group rounded-3xl p-8 bg-zinc-950/95 border border-white/15 hover:border-pink-soft/50 shadow-2xl transition-shadow duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${
                    idx === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Subtle ambient card backdrop glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pink-soft/5 blur-3xl pointer-events-none group-hover:bg-pink-soft/10 transition-colors" />

                  {/* Card Top: Numerals, Category Badge & Timestamps */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-condensed font-black text-4xl text-pink-soft">
                        {entry.numeral}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/15 bg-white/5 text-zinc-300">
                        {entry.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-zinc-500">
                      <span>{entry.readTime}</span>
                      <span>•</span>
                      <span>{entry.date}</span>
                    </div>
                  </div>

                  {/* Card Center: Featured Article Image */}
                  <div className="relative z-10 h-56 w-full rounded-2xl overflow-hidden border border-white/10 my-4">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Card Bottom: Title & Excerpt */}
                  <div className="relative z-10 space-y-3">
                    <h3 className="font-display italic text-2xl lg:text-3xl text-white/95 group-hover:text-pink-soft transition-colors leading-tight">
                      {entry.title}
                    </h3>

                    <p className="font-sans text-xs lg:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {entry.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/10">
                      <span className="font-mono text-xs text-zinc-400 font-medium">
                        Click card to read dispatch
                      </span>
                      <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-pink-soft font-semibold group-hover:underline">
                        <span>Read Paper</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE & TABLET VIEW (< lg): Sequential Scroll Reveal --- */}
      <div className="block lg:hidden py-32 sm:py-44 px-4 sm:px-6 relative z-10">
        <div className="max-w-xl mx-auto mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-pink-soft/60" />
            <span className="font-mono text-xs text-pink-soft uppercase tracking-[0.3em] font-medium">
              Engineering Journal // 02
            </span>
            <span className="w-8 h-px bg-pink-soft/60" />
          </div>

          <EditorialHeadline
            as="h2"
            className="text-4xl sm:text-6xl font-condensed font-black uppercase tracking-tight text-white/95 mb-4"
          >
            FIELD{" "}
            <span className="text-pink-soft font-normal italic font-display">notes</span>
          </EditorialHeadline>

          <EditorialSupporting delay={0.2}>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Documented post-mortems and architectural trade-offs across high-throughput Redis pipelines, dual-database models, and sub-second prompt caching.
            </p>
          </EditorialSupporting>
        </div>

        {/* Mobile Sequential Cards */}
        <div className="space-y-6 max-w-xl mx-auto">
          {entries.map((entry) => (
            <motion.div
              key={`m-${entry.id}`}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              onClick={() => setActiveEntry(entry)}
              className="group rounded-3xl p-6 bg-zinc-950 border border-white/15 hover:border-pink-soft/50 shadow-xl cursor-pointer space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-condensed font-black text-3xl text-pink-soft">
                  {entry.numeral}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 text-zinc-400">
                  {entry.category}
                </span>
              </div>

              <div className="h-44 w-full rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={entry.image}
                  alt={entry.title}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="font-display italic text-xl text-white/95 leading-snug">
                {entry.title}
              </h3>

              <p className="font-sans text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {entry.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-white/10 font-mono text-xs">
                <span className="text-zinc-500">{entry.readTime}</span>
                <span className="text-pink-soft font-semibold">Read ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      <AnimatePresence>
        {activeEntry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEntry(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-xl bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-pink-soft">
                  {activeEntry.category} • {activeEntry.date}
                </span>
                <button
                  onClick={() => setActiveEntry(null)}
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-display italic text-white/95">
                {activeEntry.title}
              </h3>

              <div className="rounded-2xl overflow-hidden h-52 w-full border border-white/10">
                <img
                  src={activeEntry.image}
                  alt={activeEntry.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {activeEntry.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <span className="font-mono text-xs text-zinc-400 font-medium">
                  {activeEntry.readTime}
                </span>
                <a
                  href="https://www.linkedin.com/in/ikram-amjad-8963b4195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-semibold text-pink-soft hover:underline"
                >
                  <span>Read full analysis</span>
                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journal;
