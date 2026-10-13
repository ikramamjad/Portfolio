import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mapRange, prefersReducedMotion } from "./motionTokens";

interface HeroParallaxExitProps {
  children: React.ReactNode;
  backgroundWord?: string;
  className?: string;
  backgroundWordClassName?: string;
}

/**
 * EFFECT #4: Hero Parallax Exit
 * As the hero section scrolls out:
 *  - Content moves down ~220px, scales to 0.85, fades out, and blurs up to 10px.
 *  - Giant background word slides sideways (-35%) and scales up.
 *
 * Built with the function form of useTransform + clamped mapRange helper
 * to keep animations on the JS thread and avoid WAAPI non-monotonic errors.
 */
export const HeroParallaxExit: React.FC<HeroParallaxExitProps> = ({
  children,
  backgroundWord = "ENGINEER",
  className = "relative w-full overflow-hidden",
  backgroundWordClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Function form transforms driven by JS math
  const contentY = useTransform(scrollYProgress, (v) =>
    isReduced ? 0 : `${mapRange(v, 0, 1, 0, 220)}px`
  );

  const contentScale = useTransform(scrollYProgress, (v) =>
    isReduced ? 1 : mapRange(v, 0, 1, 1, 0.85)
  );

  const contentOpacity = useTransform(scrollYProgress, (v) =>
    isReduced ? 1 : mapRange(v, 0, 0.8, 1, 0)
  );

  const contentBlur = useTransform(scrollYProgress, (v) =>
    isReduced ? "none" : `blur(${mapRange(v, 0, 1, 0, 10)}px)`
  );

  const bgWordX = useTransform(scrollYProgress, (v) =>
    isReduced ? "0%" : `${mapRange(v, 0, 1, 0, -35)}%`
  );

  const bgWordScale = useTransform(scrollYProgress, (v) =>
    isReduced ? 1 : mapRange(v, 0, 1, 1, 1.35)
  );

  const bgWordOpacity = useTransform(scrollYProgress, (v) =>
    isReduced ? 0.08 : mapRange(v, 0, 0.85, 0.12, 0.02)
  );

  return (
    <div ref={containerRef} className={className}>
      {/* Giant background word */}
      {backgroundWord && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
          <motion.div
            style={{
              x: bgWordX,
              scale: bgWordScale,
              opacity: bgWordOpacity,
              willChange: "transform, opacity",
            }}
            className={`text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap text-white/10 ${backgroundWordClassName}`}
          >
            {backgroundWord}
          </motion.div>
        </div>
      )}

      {/* Hero content container */}
      <motion.div
        style={{
          y: contentY,
          scale: contentScale,
          opacity: contentOpacity,
          filter: contentBlur,
          willChange: "transform, opacity, filter",
        }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HeroParallaxExit;
