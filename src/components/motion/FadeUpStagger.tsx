import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MOTION_EASE,
  DURATION_SCROLL,
  STAGGER_DEFAULT,
  VIEWPORT_THRESHOLD,
  prefersReducedMotion,
} from "./motionTokens";

/**
 * SCROLL EFFECT #1: Fade-up with Stagger
 * - translateY 30px to 0, opacity 0 to 1
 * - Duration: 0.7s (within 0.6-0.8s spec)
 * - Consistent easing: cubic-bezier(0.22, 1, 0.36, 1)
 * - 0.1s stagger between siblings
 * - Trigger once when 15% visible (amount: 0.15, once: true)
 * - Animates transform and opacity only (high 60fps performance)
 * - No layout shift: elements maintain full dimensions in flow
 * - Respects prefers-reduced-motion
 */

export const fadeUpContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DEFAULT, // 0.1s stagger between siblings
      delayChildren: 0.05,
    },
  },
};

export const fadeUpItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_SCROLL, // 0.7s
      ease: MOTION_EASE, // cubic-bezier(0.22, 1, 0.36, 1)
    },
  },
};

interface FadeUpStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

/**
 * Container component that orchestrates staggered fade-ups for child FadeUpItem components
 */
export const FadeUpStagger: React.FC<FadeUpStaggerProps> = ({
  children,
  className = "",
  stagger = STAGGER_DEFAULT,
  threshold = VIEWPORT_THRESHOLD,
}) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  const customContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={customContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FadeUpItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Individual child item for FadeUpStagger
 */
export const FadeUpItem: React.FC<FadeUpItemProps> = ({
  children,
  className = "",
  onClick,
  style,
}) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return (
      <div className={className} onClick={onClick} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeUpItemVariants}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/**
 * Standalone FadeUp component for single sections / headings
 */
export const FadeUp: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: VIEWPORT_THRESHOLD }}
      transition={{
        duration: DURATION_SCROLL,
        delay,
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpStagger;
