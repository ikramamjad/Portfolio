import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "./motionTokens";

interface SeamlessMarqueeProps {
  text?: string;
  items?: string[];
  separator?: string;
  speed?: number; // seconds for one full loop
  reverse?: boolean;
  className?: string;
  textClassName?: string;
}

/**
 * Continuous seamless horizontal scroller / marquee for statement text, credits, and titles.
 * Moves slowly and continuously without visible seams using GSAP infinite loop.
 * Respects prefers-reduced-motion.
 */
export const SeamlessMarquee: React.FC<SeamlessMarqueeProps> = ({
  text,
  items,
  separator = "•",
  speed = 45,
  reverse = false,
  className = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const rawText = text
    ? text
    : items
    ? items.join(` ${separator} `)
    : "";

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: reverse ? 50 : -50,
        ease: "none",
        duration: speed,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, reverse]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none pointer-events-none py-3 ${className}`}
    >
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap will-change-transform"
      >
        {/* Render twice for continuous seamless wrap */}
        <div className={`flex items-center gap-6 shrink-0 px-4 ${textClassName}`}>
          <span>{rawText}</span>
          <span className="text-pink-soft/60">{separator}</span>
        </div>
        <div className={`flex items-center gap-6 shrink-0 px-4 ${textClassName}`}>
          <span>{rawText}</span>
          <span className="text-pink-soft/60">{separator}</span>
        </div>
      </div>
    </div>
  );
};

export default SeamlessMarquee;
