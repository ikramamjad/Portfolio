import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MOTION_EASE } from "./motionTokens";

interface AutoHidingNavbarProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  duration?: number;
}

/**
 * Custom hook for auto-hiding navbar logic based on scroll direction & threshold.
 */
export function useAutoHidingNav(threshold: number = 200) {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const diff = latest - previous;

    // Below threshold: always visible
    if (latest <= threshold) {
      setIsHidden(false);
    }
    // Scrolling down past threshold: hide navbar
    else if (diff > 5 && latest > threshold) {
      setIsHidden(true);
    }
    // Scrolling up: reveal navbar
    else if (diff < -5) {
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  return { isHidden, scrollY };
}

/**
 * EFFECT #3: Auto-Hiding Navbar Component
 * Slides up (y: -100%) when scrolling down past 200px and slides back in
 * when scrolling up.
 */
export const AutoHidingNavbar: React.FC<AutoHidingNavbarProps> = ({
  children,
  threshold = 200,
  className = "fixed top-0 left-0 right-0 z-50 pointer-events-none",
  duration = 0.35,
}) => {
  const { isHidden } = useAutoHidingNav(threshold);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{
        duration,
        ease: MOTION_EASE,
      }}
      className={className}
      style={{ willChange: "transform" }}
    >
      <div className="pointer-events-auto w-full">{children}</div>
    </motion.header>
  );
};

export default AutoHidingNavbar;
