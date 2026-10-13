import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MOTION_EASE, mapRange, prefersReducedMotion } from "./motionTokens";

interface GridCard3DProps {
  children: React.ReactNode;
  index: number;
  columns?: number;
  sideEntry?: "left" | "right" | "none";
  driftSpeed?: number; // drift speed multiplier
  className?: string;
}

/**
 * Single card entrance inside the 3D Grid.
 * Animates from opacity 0, y 80, rotateX -35deg, and blur(8px) to normal state.
 * Reversible: viewport={{ once: false }}.
 * Sits in a parallax wrapper drifting at a different speed.
 */
export const GridCard3D: React.FC<GridCard3DProps> = ({
  children,
  index,
  columns = 3,
  sideEntry = "none",
  driftSpeed = 20,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();

  // Parallax drift wrapper
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Alternating side-drift or column-based drift
  const driftY = useTransform(scrollYProgress, (v) => {
    if (isReduced) return 0;
    const factor = index % 2 === 0 ? 1 : -1;
    return `${mapRange(v, 0, 1, driftSpeed * factor, -driftSpeed * factor)}px`;
  });

  // Calculate column stagger delay
  const colIndex = index % columns;
  const staggerDelay = colIndex * 0.08;

  // Alternate side-entry rotation: left -> -25deg, right -> +25deg
  const initialRotateY =
    sideEntry === "left" ? -25 : sideEntry === "right" ? 25 : 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : 80,
      rotateX: isReduced ? 0 : -35,
      rotateY: isReduced ? 0 : initialRotateY,
      filter: isReduced ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: isReduced ? 0.2 : 0.75,
        ease: MOTION_EASE,
        delay: staggerDelay,
      },
    },
  };

  return (
    <div ref={cardRef} className="relative w-full">
      <motion.div
        style={{
          y: driftY,
          willChange: "transform",
        }}
        className="w-full"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className={className}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform, opacity, filter",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface GridEntrance3DProps {
  children: React.ReactNode;
  columns?: number;
  className?: string;
  perspective?: number;
}

/**
 * EFFECT #12: 3D Grid Card Entrance
 * Cards animate from opacity 0, y 80, rotateX -35deg, and blur(8px) to their
 * normal state, staggered by column, with perspective on the grid.
 * Alternate side-entry cards (rotateY ±25deg from left/right) sit inside a
 * parallax wrapper that drifts at a different speed.
 * Every animation is reversible (viewport={{ once: false }}).
 */
export const GridEntrance3D: React.FC<GridEntrance3DProps> = ({
  children,
  columns = 3,
  className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
  perspective = 1400,
}) => {
  return (
    <div
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      className={`w-full ${className}`}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;

        // Alternate side entry on even/odd indices if not explicitly defined
        const sideEntry = idx % 2 === 0 ? "left" : "right";

        return (
          <GridCard3D
            index={idx}
            columns={columns}
            sideEntry={sideEntry}
            driftSpeed={15 + (idx % 3) * 5}
          >
            {child}
          </GridCard3D>
        );
      })}
    </div>
  );
};

export default GridEntrance3D;
