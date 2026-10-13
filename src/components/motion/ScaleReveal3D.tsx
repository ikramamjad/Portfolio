import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mapRange, prefersReducedMotion } from "./motionTokens";

interface ScaleReveal3DProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  offset?: [string, string];
}

/**
 * EFFECT #11: 3D Scale Reveal
 * Large blocks (a 3D canvas, the contact card, etc.) scrub from
 * scale 0.8, rotateX 22deg, y 80px, and low opacity to their final state
 * as they enter the viewport.
 * Uses perspective 1400 on the wrapper and function form of useTransform.
 */
export const ScaleReveal3D: React.FC<ScaleReveal3DProps> = ({
  children,
  className = "w-full",
  wrapperClassName = "relative w-full",
  offset = ["start end", "center center"],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as any,
  });

  // Function form useTransform with clamped mapRange
  const scale = useTransform(scrollYProgress, (v) =>
    isReduced ? 1 : mapRange(v, 0, 1, 0.8, 1)
  );

  const rotateX = useTransform(scrollYProgress, (v) =>
    isReduced ? 0 : mapRange(v, 0, 1, 22, 0)
  );

  const y = useTransform(scrollYProgress, (v) =>
    isReduced ? 0 : `${mapRange(v, 0, 1, 80, 0)}px`
  );

  const opacity = useTransform(scrollYProgress, (v) =>
    isReduced ? 1 : mapRange(v, 0, 1, 0.2, 1)
  );

  return (
    <div
      ref={containerRef}
      className={wrapperClassName}
      style={{
        perspective: "1400px",
      }}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          y,
          opacity,
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScaleReveal3D;
