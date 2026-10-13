import React from "react";
import { motion } from "framer-motion";
import { MOTION_EASE, prefersReducedMotion } from "./motionTokens";

interface MaskedHeadingRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  highlightLines?: number[];
  orangeWords?: string[];
  highlightClass?: string;
  viewportAmount?: number;
}

/**
 * EFFECT #5: Masked Word-by-Word Heading Reveal
 * Splits each heading into words, wraps each word in an overflow-hidden span.
 * Words slide up from y: 115% with a slight rotate (7deg -> 0), staggered by 0.05s.
 * Reversible on scroll (viewport={{ once: false }}).
 * Supports '\n' line breaks and orange highlighted lines/words.
 */
export const MaskedHeadingReveal: React.FC<MaskedHeadingRevealProps> = ({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.65,
  highlightLines = [],
  orangeWords = [],
  highlightClass = "text-[#f97316]",
  viewportAmount = 0.2,
}) => {
  const isReduced = prefersReducedMotion();

  // Split lines by newline
  const lines = text.split("\n");

  // Track overall word index across all lines for proper stagger sequence
  let globalWordIndex = 0;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isReduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: isReduced ? 0 : "115%",
      rotate: isReduced ? 0 : 7,
      opacity: isReduced ? 0 : 1,
    },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: {
        duration: isReduced ? 0.2 : duration,
        ease: MOTION_EASE,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        className="block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: viewportAmount }}
      >
        {lines.map((line, lineIndex) => {
          const isLineHighlighted = highlightLines.includes(lineIndex);
          const words = line.trim().split(/\s+/).filter(Boolean);

          return (
            <span
              key={`line-${lineIndex}`}
              className={`block ${isLineHighlighted ? highlightClass : ""}`}
            >
              {words.map((word, wordIndex) => {
                const currentGlobalIndex = globalWordIndex++;
                const isWordHighlighted =
                  isLineHighlighted ||
                  orangeWords.some(
                    (ow) =>
                      ow.toLowerCase() ===
                      word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
                  );

                return (
                  <span
                    key={`word-${lineIndex}-${wordIndex}-${currentGlobalIndex}`}
                    className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0 pb-[0.08em]"
                  >
                    <motion.span
                      variants={wordVariants}
                      className={`inline-block origin-bottom-left will-change-transform ${
                        isWordHighlighted ? highlightClass : ""
                      }`}
                      style={{ willChange: "transform, opacity" }}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
};

export default MaskedHeadingReveal;
