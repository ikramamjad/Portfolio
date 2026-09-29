import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASE, prefersReducedMotion } from "./motionTokens";

gsap.registerPlugin(ScrollTrigger);

interface EditorialHeadlineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "div";
}

/**
 * Editorial Headline: subtle upward drift (y: 26px -> 0), fade, and slight blur reduction (blur 8px -> 0px)
 */
export const EditorialHeadline: React.FC<EditorialHeadlineProps> = ({
  children,
  className = "",
  delay = 0,
  as = "h2",
}) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return React.createElement(as, { className }, children);
  }

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.h2;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.85,
        delay,
        ease: MOTION_EASE,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </MotionTag>
  );
};

interface EditorialSupportingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Reveals a beat later than the headline
}

/**
 * Editorial Supporting text / subheadings: reveals a beat later with gentle upward drift and short fade
 */
export const EditorialSupporting: React.FC<EditorialSupportingProps> = ({
  children,
  className = "",
  delay = 0.18,
}) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.85,
        delay,
        ease: MOTION_EASE,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // e.g. -0.2 (slower background) or +0.15 (foreground drift)
  offset?: [number, number]; // [startOffset, endOffset] in pixels
}

/**
 * Restrained Parallax Layer for subtle foreground / background speed differences.
 * Moves decorative light trails, red/pink glows, media panels, and micro-details.
 */
export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  className = "",
  offset = [30, -30],
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], offset);

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
