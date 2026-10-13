import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mapRange, prefersReducedMotion } from "./motionTokens";

export interface HorizontalCardItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  meta?: string;
}

const DEFAULT_CARDS: HorizontalCardItem[] = [
  {
    id: "h-1",
    number: "01",
    title: "Vision & Kinematics",
    subtitle: "Real-Time Accident Detection",
    description:
      "Multi-signal fusion running PyTorch & OpenCV models over live camera feeds to detect collisions and kinematic trajectory anomalies with sub-20ms latency.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "Python"],
    meta: "99.2% INFERENCE ACCURACY",
  },
  {
    id: "h-2",
    number: "02",
    title: "Next.js 16 Ecosystem",
    subtitle: "Full-Stack Spatial Platforms",
    description:
      "Enterprise full-stack architectures combining React 19, Three.js 3D web spaces, Prisma relational schemas, and server actions.",
    tags: ["Next.js 16", "React 19", "Three.js", "Prisma"],
    meta: "SUB-SECOND TTFB",
  },
  {
    id: "h-3",
    number: "03",
    title: "High-Throughput IOPS",
    subtitle: "Node.js & Redis Pipelines",
    description:
      "Microservice architectures scaled with distributed Redis Pub/Sub, in-memory caching queues, and high-concurrency rate limiters.",
    tags: ["Node.js", "Redis", "BullMQ", "Docker"],
    meta: "10K+ REQ / SEC",
  },
  {
    id: "h-4",
    number: "04",
    title: "Dual Database Strategy",
    subtitle: "PostgreSQL + MongoDB Hybrid",
    description:
      "Balancing relational ACID transactions for billing with high-volume document collections for unstructured event logging.",
    tags: ["PostgreSQL", "MongoDB", "ACID", "Aggregation"],
    meta: "ZERO DATA LOSS",
  },
  {
    id: "h-5",
    number: "05",
    title: "AI Twin & LLM Systems",
    subtitle: "Autonomous Agent Architectures",
    description:
      "Production prompt engineering pipelines with speech-to-text, low-latency LLM streaming, and multimodal tool execution.",
    tags: ["LangChain", "Gemini API", "Speech-to-Text", "TTS"],
    meta: "STREAMING LATENCY < 300MS",
  },
];

interface PinnedHorizontalScrollProps {
  cards?: HorizontalCardItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

/**
 * EFFECT #8: Pinned Horizontal Scroll
 * The section height is the track's overflow width plus viewport height.
 * A sticky inner container translates the card track left as you scroll down.
 * Measured with ResizeObserver; includes progress line underneath.
 * Uses theme: cards #1a1a1a with #333333 borders, accent orange #f97316.
 */
export const PinnedHorizontalScroll: React.FC<PinnedHorizontalScrollProps> = ({
  cards = DEFAULT_CARDS,
  title = "TECHNICAL ARCHITECTURE",
  eyebrow = "CORE SYSTEM PILLARS",
  className = "relative bg-[#111111]",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const isReduced = prefersReducedMotion();

  // Measure track's overflow width and viewport with ResizeObserver
  useEffect(() => {
    const updateDimensions = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxScroll = Math.max(0, trackWidth - viewportWidth);
      setScrollDistance(maxScroll);
    };

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", updateDimensions);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, [cards]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Function form useTransform with clamped mapRange helper
  const x = useTransform(scrollYProgress, (v) => {
    if (isReduced) return 0;
    const offset = mapRange(v, 0, 1, 0, scrollDistance);
    return `-${offset}px`;
  });

  const progressBarScale = useTransform(scrollYProgress, (v) =>
    mapRange(v, 0, 1, 0, 1)
  );

  return (
    <section
      ref={sectionRef}
      className={`${className} relative`}
      style={{
        // Section height = track overflow width + viewport height
        height: isReduced ? "auto" : `calc(100vh + ${scrollDistance}px)`,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 md:py-16">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex items-end justify-between mb-8 z-10 shrink-0">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#f97316] uppercase font-semibold">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mt-2">
              {title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span>SCROLL TO GLIDE</span>
            <span className="text-[#f97316]">→</span>
          </div>
        </div>

        {/* Translating Track */}
        <div className="relative w-full flex-1 flex items-center overflow-visible">
          <motion.div
            ref={trackRef}
            style={{
              x,
              willChange: "transform",
            }}
            className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-12 w-max"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[320px] sm:w-[420px] md:w-[480px] shrink-0 rounded-2xl bg-[#1a1a1a] border border-[#333333] p-8 sm:p-10 flex flex-col justify-between group hover:border-[#f97316]/60 transition-colors duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#f97316]/10 transition-colors duration-300" />

                <div>
                  <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#333333]">
                    <span className="text-4xl sm:text-6xl font-black font-mono text-[#f97316] tracking-tighter">
                      {card.number}
                    </span>
                    {card.meta && (
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                        {card.meta}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-[#f97316] font-medium block mb-2">
                    {card.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-[#f97316] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#333333]/50">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111111] border border-[#333333] text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Line Underneath */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 mt-6 z-10 shrink-0">
          <div className="w-full h-1 bg-[#333333] rounded-full overflow-hidden relative">
            <motion.div
              style={{
                scaleX: progressBarScale,
                transformOrigin: "0%",
                willChange: "transform",
              }}
              className="w-full h-full bg-gradient-to-r from-[#ea580c] to-[#f97316]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedHorizontalScroll;
