import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { prefersReducedMotion } from "./motionTokens";

/**
 * SCROLL EFFECT #4: Scroll Progress Bar
 * A thin 3px bar fixed at the very top of the page that fills with scroll progress.
 * Uses hardware-accelerated transform: scaleX (animating transform only).
 * Utilizes the portfolio's accent gradient / accent color.
 * To remove: simply delete or comment out <ScrollProgressBar /> in Index.tsx.
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const isReduced = prefersReducedMotion();

  // Smooth spring for the scroll progress to give organic responsiveness
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (isReduced) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none overflow-hidden bg-transparent"
    >
      <motion.div
        className="w-full h-full origin-left bg-gradient-to-r from-[#89AACC] to-[#4E85BF] shadow-[0_0_8px_rgba(137,170,204,0.6)]"
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
