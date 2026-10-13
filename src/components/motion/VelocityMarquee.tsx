import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { clamp, prefersReducedMotion } from "./motionTokens";

interface VelocityMarqueeBandProps {
  text: string;
  baseVelocity?: number;
  tiltAngle?: number;
  className?: string;
  textClassName?: string;
  outlineText?: boolean;
}

/**
 * Mathematically robust wrap helper for wrapping percentage x between min and max.
 */
function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

const MarqueeBand: React.FC<VelocityMarqueeBandProps> = ({
  text,
  baseVelocity = 2,
  tiltAngle = 0,
  className = "",
  textClassName = "",
  outlineText = false,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const isReduced = prefersReducedMotion();

  // Skew text proportional to velocity, clamped strictly between -10deg and +10deg
  const skewX = useTransform(smoothVelocity, (v) => {
    if (isReduced) return 0;
    return clamp(v / 250, -10, 10);
  });

  // Direction flips based on scroll velocity; speeds up with user scroll
  const prevTime = useRef(0);
  useAnimationFrame((time, delta) => {
    if (isReduced) return;

    let moveBy = baseVelocity * (delta / 1000);
    const vel = smoothVelocity.get();

    // Direction flip when scrolling up vs down
    if (vel < -20) {
      moveBy = -Math.abs(moveBy) * (1 + Math.abs(vel) / 500);
    } else if (vel > 20) {
      moveBy = Math.abs(moveBy) * (1 + Math.abs(vel) / 500);
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Loop content 4 times and wrap x between -25% and 0%
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3 md:py-5 ${className}`}
      style={{
        transform: `rotate(${tiltAngle}deg)`,
        transformOrigin: "center center",
      }}
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          x,
          skewX,
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3].map((idx) => (
          <span
            key={`marquee-repeat-${idx}`}
            className={`inline-flex items-center gap-6 text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight shrink-0 px-4 ${
              outlineText
                ? "text-transparent [-webkit-text-stroke:1.5px_#ffffff] opacity-75"
                : ""
            } ${textClassName}`}
          >
            <span>{text}</span>
            <span className="text-sm md:text-xl opacity-60">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

interface VelocityMarqueeProps {
  band1Text?: string;
  band2Text?: string;
  className?: string;
}

/**
 * EFFECT #7: Scroll-Velocity Marquee
 * Two tilted bands:
 *  - Band 1: -2deg orange (#f97316) with dark text (#111111)
 *  - Band 2: +1deg dark (#1a1a1a) with outlined text (#333333 borders)
 * Speed increases with scroll velocity, direction flips when scrolling up,
 * and text skews with velocity (clamped to ±10deg).
 * Loops infinitely by repeating content 4 times and wrapping x between -25% and 0%.
 */
export const VelocityMarquee: React.FC<VelocityMarqueeProps> = ({
  band1Text = "FULL-STACK ARCHITECTURE • COMPUTER VISION • REAL-TIME SYSTEMS • MERN & NEXT.JS",
  band2Text = "OPTIMIZED KINEMATICS • REDIS PIPELINES • DISTRIBUTED MICROSERVICES • HIGH IOPS",
  className = "relative py-16 md:py-24 overflow-hidden bg-[#111111]",
}) => {
  return (
    <div className={className}>
      <div className="relative flex flex-col gap-4 md:gap-6 -mx-8 sm:-mx-16">
        {/* Band 1: -2deg orange with dark text */}
        <MarqueeBand
          text={band1Text}
          baseVelocity={-3}
          tiltAngle={-2}
          className="bg-[#f97316] text-[#111111] shadow-2xl z-10"
          textClassName="text-[#111111] font-black"
        />

        {/* Band 2: +1deg dark with outlined text */}
        <MarqueeBand
          text={band2Text}
          baseVelocity={3}
          tiltAngle={1}
          className="bg-[#1a1a1a] border-y border-[#333333] shadow-xl z-0"
          textClassName="text-white"
          outlineText={true}
        />
      </div>
    </div>
  );
};

export default VelocityMarquee;
