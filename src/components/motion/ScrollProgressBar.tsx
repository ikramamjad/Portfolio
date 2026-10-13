import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { prefersReducedMotion } from "./motionTokens";

interface ScrollProgressBarProps {
  className?: string;
  height?: number | string;
  gradient?: string;
}

/**
 * EFFECT #2: Scroll Progress Bar
 * A fixed 3px orange gradient bar at the top of the page.
 * Its scaleX follows a spring-smoothed scrollYProgress.
 */
export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className = "",
  height = "3px",
  gradient = "linear-gradient(90deg, #ea580c 0%, #f97316 50%, #fb923c 100%)",
}) => {
  const { scrollYProgress } = useScroll();
  const isReduced = prefersReducedMotion();

  // Spring-smoothed progress for a responsive, organic momentum
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (isReduced) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-[9999] pointer-events-none overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        className="w-full h-full origin-left will-change-transform shadow-[0_0_12px_rgba(249,115,22,0.6)]"
        style={{
          scaleX,
          background: gradient,
          transformOrigin: "0%",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
