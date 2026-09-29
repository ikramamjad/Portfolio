import React from "react";
import { motion } from "framer-motion";
import { MOTION_EASE, prefersReducedMotion } from "./motionTokens";

interface HeroTextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  mode?: "words" | "lines";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

/**
 * SCROLL / LOAD EFFECT #2: Hero Text Reveal
 * Mask / slide-up reveal effect on page load.
 * Wraps each word or line in an overflow-hidden mask container.
 * Animates only translateY and opacity for 60fps GPU performance.
 * No layout shift: the masks and words retain their precise natural typographic flow.
 *
 * To remove: Replace <HeroTextReveal ... /> with standard text or heading.
 */
export const HeroTextReveal: React.FC<HeroTextRevealProps> = ({
  text,
  as: Tag = "div",
  mode = "words",
  className = "",
  delay = 0.1,
  stagger = 0.08,
  duration = 0.8,
}) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const items = mode === "words" ? text.split(" ") : text.split("\n");

  return (
    <Tag className={className}>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="inline-block overflow-hidden align-baseline"
          style={{ verticalAlign: "bottom" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration,
              ease: MOTION_EASE, // cubic-bezier(0.22, 1, 0.36, 1)
              delay: delay + index * stagger,
            }}
          >
            {item}
          </motion.span>
          {/* Add trailing space for words if not last item */}
          {mode === "words" && index < items.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
};

/**
 * Custom line/block mask for rich JSX content in Hero
 */
export const MaskRevealItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ children, className = "", delay = 0.2, duration = 0.8 }) => {
  const isReduced = prefersReducedMotion();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "115%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration,
          ease: MOTION_EASE,
          delay,
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HeroTextReveal;
