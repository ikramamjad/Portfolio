import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { prefersReducedMotion } from "./motionTokens";

interface NumberCounterProps {
  value: string | number;
  duration?: number; // in seconds, default 1.5s
  className?: string;
}

/**
 * SCROLL EFFECT #3: Number Counters
 * Stats count up from 0 to their value when they enter the viewport,
 * over ~1.5s with ease-out. Runs once.
 * Preserves prefixes, suffixes (+, %, etc.), and leading zero padding (e.g. "02").
 * Respects prefers-reduced-motion (renders final value immediately).
 *
 * To remove: replace <NumberCounter value={stat.number} /> with {stat.number}.
 */
export const NumberCounter: React.FC<NumberCounterProps> = ({
  value,
  duration = 1.5,
  className = "",
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If reduced motion is requested, display immediately
    return prefersReducedMotion() ? String(value) : "0";
  });

  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;
    if (prefersReducedMotion()) {
      setDisplayValue(String(value));
      return;
    }

    hasAnimatedRef.current = true;

    // Parse the input value
    const str = String(value);
    const match = str.match(/^([^0-9]*)(\d+)(.*)$/);

    if (!match) {
      setDisplayValue(str);
      return;
    }

    const prefix = match[1] || "";
    const targetNum = parseInt(match[2], 10);
    const suffix = match[3] || "";
    const hasLeadingZero = match[2].length > 1 && match[2].startsWith("0");
    const padLength = match[2].length;

    let startTime: number | null = null;
    let animId: number;

    // Ease-out cubic: 1 - (1 - t)^3
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentNum = Math.round(easedProgress * targetNum);
      const formattedNum = hasLeadingZero
        ? String(currentNum).padStart(padLength, "0")
        : String(currentNum);

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setDisplayValue(str);
      }
    };

    animId = requestAnimationFrame(step);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={containerRef} className={`tabular-nums inline-block ${className}`}>
      {displayValue}
    </span>
  );
};

export default NumberCounter;
