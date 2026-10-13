import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { mapRange, prefersReducedMotion } from "./motionTokens";

interface ScrollScrubbedParagraphProps {
  text: string;
  className?: string;
  as?: "p" | "div" | "h3" | "span";
  highlightColor?: string;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isReduced: boolean;
}

const Word: React.FC<WordProps> = ({ word, progress, range, isReduced }) => {
  // Function form useTransform with clamped mapRange
  const opacity = useTransform(progress, (v) =>
    isReduced ? 1 : mapRange(v, range[0], range[1], 0.12, 1)
  );

  const y = useTransform(progress, (v) =>
    isReduced ? 0 : `${mapRange(v, range[0], range[1], 4, 0)}px`
  );

  return (
    <span className="inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{
          opacity,
          y,
          willChange: "opacity, transform",
        }}
        className="inline-block transition-colors duration-150"
      >
        {word}
      </motion.span>
    </span>
  );
};

/**
 * EFFECT #6: Scroll-Scrubbed Paragraph
 * Each word's opacity goes from 0.12 to 1 (with a small y lift)
 * as the paragraph scrolls through the viewport (offset ["start 0.9", "end 0.55"]).
 * Uses the JS function form of useTransform to avoid non-monotonic WAAPI warnings.
 */
export const ScrollScrubbedParagraph: React.FC<ScrollScrubbedParagraphProps> = ({
  text,
  className = "text-lg md:text-2xl leading-relaxed text-text-primary",
  as: Component = "p",
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const isReduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.55"],
  });

  const words = text.split(/\s+/).filter(Boolean);
  const total = words.length;

  return (
    <Component
      ref={containerRef as unknown as React.RefObject<HTMLParagraphElement>}
      className={`relative ${className}`}
    >
      {words.map((word, i) => {
        const start = i / total;
        const end = Math.min(start + 1.5 / total, 1);
        return (
          <Word
            key={`scrub-word-${i}-${word}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            isReduced={isReduced}
          />
        );
      })}
    </Component>
  );
};

export default ScrollScrubbedParagraph;
