import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { coreStacks } from "../data/portfolioData";
import { Terminal } from "lucide-react";
import { FadeUp } from "./motion/FadeUpStagger";
import { EditorialHeadline, EditorialSupporting } from "./motion/EditorialReveal";
import { TechTooltip } from "./motion/TechTooltip";
import { MagneticButton } from "./motion/MagneticButton";
import { prefersReducedMotion } from "./motion/motionTokens";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredStacks =
    activeCategory === "All"
      ? coreStacks
      : coreStacks.filter((item) => item.category === activeCategory);

  // Lenis-synchronized Pinned Horizontal Scroll with GSAP ScrollTrigger
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Calculate how far track needs to scroll to reveal all cards with padding
      const getScrollAmount = () => {
        const padding = 80;
        const amount = track.scrollWidth - window.innerWidth + padding;
        return amount > 0 ? -amount : 0;
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => {
            const distance = track.scrollWidth - window.innerWidth + 80;
            return `+=${Math.max(distance + 400, 1000)}`;
          },
          pin: true,
          scrub: 1.2, // Smooth inertia scrub synced with Lenis
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [filteredStacks.length]);

  // Refresh ScrollTrigger when category filter changes track width
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="bg-bg border-t border-stroke/60 relative overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Pinned Viewport Container */}
      <div className="min-h-screen w-full flex flex-col justify-between py-12 md:py-16 px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Top Header & Filters */}
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-pink-soft/60" />
                <span className="font-mono text-xs text-pink-soft uppercase tracking-[0.3em] font-medium">
                  Core Competencies // Stack
                </span>
              </div>

              {/* Heading */}
              <EditorialHeadline
                as="h2"
                className="text-4xl sm:text-6xl lg:text-7xl font-condensed font-black uppercase tracking-tight text-white/95"
              >
                TECHNICAL{" "}
                <span className="text-pink-soft font-normal italic font-display">arsenal</span>
              </EditorialHeadline>

              {/* Subtext */}
              <EditorialSupporting delay={0.2}>
                <p className="font-sans text-sm md:text-base text-zinc-400 mt-3 max-w-xl leading-relaxed">
                  Production-tested stack spanning full-stack frameworks, asynchronous runtimes,
                  relational &amp; document databases, and AI prompt engineering.
                </p>
              </EditorialSupporting>
            </div>

            {/* Quick summary badge */}
            <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-pink-soft animate-ping" />
              <span className="text-xs font-mono text-zinc-400">
                {coreStacks.length} Production Stacks
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-text-primary text-bg border-text-primary font-semibold shadow-md scale-105"
                    : "bg-surface/50 text-muted border-stroke hover:text-text-primary hover:border-stroke/80 hover:bg-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* LENIS PINNED HORIZONTAL SCROLL TRACK */}
        <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar py-4">
          <div
            ref={trackRef}
            className="flex items-stretch gap-5 sm:gap-6 w-max max-w-none will-change-transform pl-2 md:pl-0 pr-12"
          >
            {filteredStacks.map((stack) => (
              <div
                key={stack.name}
                className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 h-[280px] sm:h-[300px] group relative rounded-2xl border border-stroke bg-surface/40 hover:bg-surface/85 p-6 transition-all duration-300 ease-spring hover:border-stroke/90 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle hover accent light */}
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: stack.color }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Card Top */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* HOVER EFFECT #5: Stack Badge with lift and tooltip */}
                      <TechTooltip name={stack.name} category={stack.category}>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider border border-stroke bg-bg/60 text-muted group-hover:text-text-primary/90 transition-colors">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: stack.color }}
                          />
                          <span>{stack.badge}</span>
                        </span>
                      </TechTooltip>

                      {/* Category Label */}
                      <span className="text-[10px] uppercase font-mono tracking-widest text-muted/70">
                        {stack.category}
                      </span>
                    </div>

                    {/* Stack Name */}
                    <h3 className="text-2xl font-display italic text-text-primary group-hover:accent-gradient-text transition-colors mb-2.5">
                      {stack.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                      {stack.desc}
                    </p>
                  </div>

                  {/* Card Bottom status footer */}
                  <div className="mt-5 pt-3 border-t border-stroke/40 flex items-center justify-between text-[11px] font-mono text-muted/80">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Production Ready
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-text-primary">
                      Active Stack ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack Integration Architecture Banner (Appears after unpinning) */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 relative z-10">
        <FadeUp className="rounded-3xl border border-stroke bg-surface/30 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            {/* HOVER EFFECT #4: Magnetic CTA Button */}
            <MagneticButton href="#contact">
              <div className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black shadow-lg">
                <span>Discuss Architecture</span>
                <span>↗</span>
              </div>
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default TechStack;
