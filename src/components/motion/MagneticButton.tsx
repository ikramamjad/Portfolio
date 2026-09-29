import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MOTION_EASE, prefersReducedMotion, isTouchDevice } from "./motionTokens";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  fillClassName?: string;
  title?: string;
  ariaLabel?: string;
  maxOffset?: number; // max 10px by requirements
}

/**
 * HOVER EFFECT #4: Magnetic CTA Button
 * - Magnetic pull toward cursor (max 10px clamped)
 * - Background fill-slide effect
 * - Disabled on touch devices and for prefers-reduced-motion
 * - Animates only transform and opacity
 *
 * To remove: replace <MagneticButton ...> with standard <button> or <a>.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
  fillClassName = "accent-gradient",
  title,
  ariaLabel,
  maxOffset = 10,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canMagnetic, setCanMagnetic] = useState(false);

  useEffect(() => {
    // Check pointer capabilities and motion preference
    if (!isTouchDevice() && !prefersReducedMotion()) {
      setCanMagnetic(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canMagnetic || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;

    // Clamp to max 10px
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

    setOffset({ x: clampedX, y: clampedY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  const content = (
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      {children}
    </div>
  );

  const fillSlide = (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
    >
      <span
        className={`absolute inset-0 rounded-full ${fillClassName} transition-transform duration-300 will-change-transform ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      className="inline-block will-change-transform"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          title={title}
          aria-label={ariaLabel}
          className={`relative overflow-hidden group select-none ${className}`}
        >
          {fillSlide}
          {content}
        </a>
      ) : (
        <button
          onClick={onClick}
          title={title}
          aria-label={ariaLabel}
          className={`relative overflow-hidden group select-none ${className}`}
        >
          {fillSlide}
          {content}
        </button>
      )}
    </motion.div>
  );
};

export default MagneticButton;
