import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mapRange, prefersReducedMotion } from "./motionTokens";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number; // percentage movement offset, default 15
  scale?: number; // default 1.3
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * EFFECT #10: Parallax Image
 * Inside cards or containers, an image scaled to 1.3 moves against the
 * scroll direction for rich visual depth.
 * Uses function form of useTransform with clamped mapRange.
 */
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = "relative w-full h-full overflow-hidden",
  imgClassName = "w-full h-full object-cover",
  speed = 15,
  scale = 1.3,
  width,
  height,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves against the scroll direction (start at +speed%, end at -speed%)
  const y = useTransform(scrollYProgress, (v) => {
    if (isReduced) return "0%";
    const offset = mapRange(v, 0, 1, speed, -speed);
    return `${offset}%`;
  });

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={{
          y,
          scale: isReduced ? 1 : scale,
          willChange: "transform",
        }}
        className="w-full h-full origin-center flex items-center justify-center"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={imgClassName}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
