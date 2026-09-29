import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOTION_EASE, prefersReducedMotion } from "./motionTokens";

interface TechTooltipProps {
  children: React.ReactNode;
  name: string;
  category?: string;
  className?: string;
}

/**
 * HOVER EFFECT #5: Tech Stack Items & Tooltip
 * - Lifts slightly with a small scale-up on hover (translateY -4px, scale 1.05)
 * - Shows the technology name as an animated tooltip / label
 * - Animates only transform and opacity for smooth 60fps rendering
 * - Respects prefers-reduced-motion
 *
 * To remove: replace <TechTooltip ...>{children}</TechTooltip> with {children}.
 */
export const TechTooltip: React.FC<TechTooltipProps> = ({
  children,
  name,
  category,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isReduced = prefersReducedMotion();

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Animated Item: lift and small scale-up */}
      <motion.div
        animate={
          isReduced
            ? {}
            : isHovered
            ? { y: -4, scale: 1.06 }
            : { y: 0, scale: 1 }
        }
        transition={{
          duration: 0.3,
          ease: MOTION_EASE, // cubic-bezier(0.22, 1, 0.36, 1)
        }}
        className="cursor-pointer will-change-transform inline-flex"
      >
        {children}
      </motion.div>

      {/* Tooltip Label */}
      <AnimatePresence>
        {isHovered && !isReduced && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: MOTION_EASE,
            }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50 whitespace-nowrap"
          >
            <div className="rounded-md border border-stroke/90 bg-surface/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-text-primary shadow-xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-medium text-white">{name}</span>
              {category && (
                <span className="text-[9px] uppercase tracking-wider text-muted">
                  • {category}
                </span>
              )}
            </div>

            {/* Little pointer triangle */}
            <div className="w-2 h-2 bg-surface/95 border-r border-b border-stroke/90 rotate-45 mx-auto -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechTooltip;
