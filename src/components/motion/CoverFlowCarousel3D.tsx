import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { mapRange, clamp, prefersReducedMotion } from "./motionTokens";

export interface CoverFlowCardItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags?: string[];
  image?: string;
  link?: string;
}

const DEFAULT_COVERFLOW_ITEMS: CoverFlowCardItem[] = [
  {
    id: "cf-1",
    number: "01",
    title: "Accident Detection Engine",
    subtitle: "Computer Vision & Kinematics",
    category: "AI & PYTORCH",
    description:
      "Real-time object detection and trajectory analysis on live camera streams with sub-20ms inference and zero frame loss.",
    tags: ["PyTorch", "YOLO", "OpenCV", "Kinematics"],
    image: "/thumbnails/road-accident-detection.jpg",
  },
  {
    id: "cf-2",
    number: "02",
    title: "AI Interviewer & Human 3D",
    subtitle: "Next.js 16 & Three.js",
    category: "SPATIAL WEB",
    description:
      "Interactive 3D digital human avatars with audio gaze tracking, automated assessment heuristics, and Prisma SQL schemas.",
    tags: ["Next.js 16", "Three.js", "React 19", "Prisma"],
    image: "/thumbnails/ai-interview.jpg",
  },
  {
    id: "cf-3",
    number: "03",
    title: "FINFUSION Banking Core",
    subtitle: "FinTech & Transaction Ledgers",
    category: "FINTECH CORE",
    description:
      "High-security financial ledger engine engineered with double-entry ACID audit trails, session guards, and sub-second settlement.",
    tags: ["Node.js", "PostgreSQL", "Tailwind", "Security"],
    image: "/thumbnails/finfusion.jpg",
  },
  {
    id: "cf-4",
    number: "04",
    title: "High-Throughput IOPS Cache",
    subtitle: "Redis & BullMQ Pipelines",
    category: "BACKEND INFRA",
    description:
      "Distributed task queuing, horizontal microservices, and Redis Pub/Sub handling 10,000+ requests per second with strict rate-limiting.",
    tags: ["Redis", "BullMQ", "Docker", "Node.js"],
    image: "/thumbnails/shop-sphere.jpg",
  },
  {
    id: "cf-5",
    number: "05",
    title: "Autonomous AI Twin",
    subtitle: "Voice & Real-Time Multimodal",
    category: "INTELLIGENT AGENTS",
    description:
      "Bespoke neural voice clone and multimodal reasoning assistant streaming responses with sub-300ms latency.",
    tags: ["LLMs", "Audio Stream", "LangChain", "WebSockets"],
    image: "/thumbnails/ride-sharing.jpg",
  },
];

interface CoverFlowCardProps {
  card: CoverFlowCardItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  cardWidthPx: number;
}

const CoverFlowCard: React.FC<CoverFlowCardProps> = ({
  card,
  index,
  total,
  progress,
  cardWidthPx,
}) => {
  const isReduced = prefersReducedMotion();
  const centerPoint = total > 1 ? index / (total - 1) : 0.5;

  // Function form useTransform: calculate relative card position strictly in JS
  const transformValues = useTransform(progress, (v) => {
    if (isReduced) {
      return {
        x: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
      };
    }

    // Delta relative to center: 0 when centered, -1 one step left, +1 one step right
    const delta = (v - centerPoint) * (total - 1);
    const distance = Math.abs(delta);

    // Pixel offset (NOT vw)
    const spacingPx = cardWidthPx * 0.75;
    const x = delta * spacingPx;

    // Inward perspective rotation: left cards face right (+38deg), right cards face left (-38deg)
    const rawRotateY = delta * -38;
    const rotateY = clamp(rawRotateY, -45, 45);

    // Scale: 1 at center, drops to 0.78 when further away
    const scale = mapRange(distance, 0, 2, 1, 0.76);

    // Fade: 1 at center, drops to 0.25 when 2+ cards away
    const opacity = mapRange(distance, 0, 2.2, 1, 0.25);

    // Z-Index: centered card is on top
    const zIndex = Math.round(100 - distance * 25);

    return { x, rotateY, scale, opacity, zIndex };
  });

  const [styleState, setStyleState] = useState({
    x: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10,
  });

  useEffect(() => {
    const unsubscribe = transformValues.on("change", (latest) => {
      setStyleState(latest);
    });
    return () => unsubscribe();
  }, [transformValues]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: `-${cardWidthPx / 2}px`,
        marginTop: "-230px",
        width: `${cardWidthPx}px`,
        transform: `translate3d(${styleState.x}px, 0, 0) scale(${styleState.scale}) rotateY(${styleState.rotateY}deg)`,
        opacity: styleState.opacity,
        zIndex: styleState.zIndex,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      className="rounded-3xl bg-[#1a1a1a] border border-[#333333] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group select-none"
    >
      {/* Accent corner tag */}
      <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
        <span className="text-xs font-mono tracking-widest text-[#f97316] uppercase font-bold">
          {card.category}
        </span>
        <span className="text-sm font-mono text-zinc-500 font-semibold">
          {card.number}
        </span>
      </div>

      {/* Card visual / thumbnail if present */}
      {card.image && (
        <div className="relative w-full h-40 sm:h-48 my-4 rounded-xl overflow-hidden bg-black/40 border border-[#333333]/50">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
      )}

      {/* Text body */}
      <div>
        <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase block mb-1">
          {card.subtitle}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#f97316] transition-colors">
          {card.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {card.description}
        </p>
      </div>

      {/* Tags */}
      {card.tags && (
        <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-[#333333]/40">
          {card.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] border border-[#333333] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

interface CoverFlowCarousel3DProps {
  cards?: CoverFlowCardItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

/**
 * EFFECT #13: Sticky 3D Cover-Flow Carousel (300vh Section)
 * Cards are positioned relative to each card's progress point.
 * Slides in px offsets (not vw), rotates, scales, fades, and modifies z-index
 * so the centered card is fully readable and focused.
 * Uses theme: background #111111, cards #1a1a1a, borders #333333, accent #f97316.
 */
export const CoverFlowCarousel3D: React.FC<CoverFlowCarousel3DProps> = ({
  cards = DEFAULT_COVERFLOW_ITEMS,
  title = "3D COVER-FLOW CAROUSEL",
  eyebrow = "PERSPECTIVE SCROLL ENGINE",
  className = "relative bg-[#111111]",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(380);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(300);
      } else if (w < 1024) {
        setCardWidth(360);
      } else {
        setCardWidth(420);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className={`relative ${className}`}
      style={{
        height: "300vh", // 300vh section for smooth cover-flow scrub
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 md:py-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 text-center z-10 shrink-0">
          <span className="text-xs font-mono tracking-[0.25em] text-[#f97316] uppercase font-semibold">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">
            {title}
          </h2>
        </div>

        {/* 3D Viewport container */}
        <div
          className="relative w-full flex-1 flex items-center justify-center overflow-hidden"
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
          }}
        >
          {cards.map((card, idx) => (
            <CoverFlowCard
              key={card.id}
              card={card}
              index={idx}
              total={cards.length}
              progress={scrollYProgress}
              cardWidthPx={cardWidth}
            />
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="text-center z-10 shrink-0">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            SCROLL DOWN TO TRAVERSE 3D COVER-FLOW
          </span>
        </div>
      </div>
    </section>
  );
};

export default CoverFlowCarousel3D;
