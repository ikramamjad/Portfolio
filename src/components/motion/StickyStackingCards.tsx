import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { mapRange, prefersReducedMotion } from "./motionTokens";

export interface StackingCardItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics?: { label: string; value: string }[];
  tags?: string[];
  image?: string;
}

const DEFAULT_STACK_CARDS: StackingCardItem[] = [
  {
    id: "stack-1",
    title: "Real-Time Computer Vision & Kinematics",
    category: "SYSTEM 01",
    tagline: "Autonomous Accident Detection Pipeline",
    description:
      "Engineered multi-stream video analysis for road safety using YOLO and custom PyTorch kinematics trackers. Processes high-frame-rate RTSP streams with zero frame drop.",
    metrics: [
      { label: "LATENCY", value: "18ms" },
      { label: "PRECISION", value: "99.4%" },
    ],
    tags: ["PyTorch", "OpenCV", "Python", "RTSP"],
  },
  {
    id: "stack-2",
    title: "Spatial 3D & Next.js 16 Web Systems",
    category: "SYSTEM 02",
    tagline: "High-Performance Interactive Platforms",
    description:
      "Enterprise full-stack architectures combining React 19, Three.js 3D web spaces, Prisma relational schemas, and sub-second server components.",
    metrics: [
      { label: "TTFB", value: "120ms" },
      { label: "UPTIME", value: "99.98%" },
    ],
    tags: ["Next.js", "React 19", "Three.js", "Prisma"],
  },
  {
    id: "stack-3",
    title: "High-Throughput IOPS & Redis Caching",
    category: "SYSTEM 03",
    tagline: "Distributed Microservices & Queues",
    description:
      "Eliminating relational database bottlenecks under peak load with BullMQ message queuing, Redis distributed locks, and sub-millisecond in-memory caching.",
    metrics: [
      { label: "THROUGHPUT", value: "12K req/s" },
      { label: "P99 LATENCY", value: "4.2ms" },
    ],
    tags: ["Node.js", "Redis", "BullMQ", "PostgreSQL"],
  },
];

interface CardWrapperProps {
  card: StackingCardItem;
  index: number;
  total: number;
  topOffset: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StackingCard: React.FC<CardWrapperProps> = ({
  card,
  index,
  total,
  topOffset,
  progress,
  range,
  targetScale,
}) => {
  const isReduced = prefersReducedMotion();

  // Function form of useTransform with clamped mapRange
  const scale = useTransform(progress, (v) => {
    if (isReduced) return 1;
    return mapRange(v, range[0], 1, 1, targetScale);
  });

  const overlayOpacity = useTransform(progress, (v) => {
    if (isReduced) return 0;
    // Darkens as later cards slide over
    return mapRange(v, range[0], 1, 0, 0.55);
  });

  return (
    <div
      className="sticky top-0 h-screen w-full flex items-center justify-center"
      style={{
        paddingTop: `${topOffset}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          willChange: "transform",
        }}
        className="relative w-full max-w-4xl mx-auto rounded-3xl bg-[#1a1a1a] border border-[#333333] p-8 sm:p-12 shadow-2xl overflow-hidden origin-top"
      >
        {/* Darkening overlay when next card slides over */}
        <motion.div
          style={{
            opacity: overlayOpacity,
            willChange: "opacity",
          }}
          className="absolute inset-0 bg-black pointer-events-none z-20"
        />

        {/* Ambient accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#f97316]/10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10">
          <div className="flex items-center justify-between pb-6 border-b border-[#333333] mb-6">
            <span className="text-xs font-mono tracking-widest text-[#f97316] uppercase font-semibold">
              {card.category}
            </span>
            <span className="text-sm font-mono text-zinc-500">
              0{index + 1} / 0{total}
            </span>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            {card.tagline}
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {card.title}
          </h3>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            {card.description}
          </p>

          {card.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-[#333333] mb-6">
              {card.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#f97316] font-mono">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {card.tags && (
            <div className="flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#111111] border border-[#333333] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

interface StickyStackingCardsProps {
  cards?: StackingCardItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

/**
 * EFFECT #9: Sticky Stacking Cards
 * Each card sits in a sticky h-screen wrapper, offset slightly lower than the previous card.
 * As you scroll, earlier cards scale down (1 -> 1 - remaining*0.06) and darken under
 * a black overlay while the next card slides over them.
 */
export const StickyStackingCards: React.FC<StickyStackingCardsProps> = ({
  cards = DEFAULT_STACK_CARDS,
  title = "FEATURED ARCHITECTURES",
  eyebrow = "SYSTEM SHOWCASE",
  className = "relative bg-[#111111] py-16",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = cards.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className={className}>
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-mono tracking-[0.25em] text-[#f97316] uppercase font-semibold">
          {eyebrow}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">
          {title}
        </h2>
      </div>

      <div className="relative">
        {cards.map((card, i) => {
          const remaining = total - 1 - i;
          const targetScale = Math.max(0.7, 1 - remaining * 0.06);
          const topOffset = i * 28;
          const range: [number, number] = [i / total, 1];

          return (
            <StackingCard
              key={card.id}
              card={card}
              index={i}
              total={total}
              topOffset={topOffset}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default StickyStackingCards;
