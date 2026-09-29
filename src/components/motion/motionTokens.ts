/**
 * Motion Tokens & Constants
 * Easing, durations, and variables matching CSS variables for consistent physics.
 */

// cubic-bezier(0.22, 1, 0.36, 1) - smooth deceleration spring-like curve
export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const MOTION_EASE_STRING = "cubic-bezier(0.22, 1, 0.36, 1)";

export const DURATION_HOVER = 0.3; // seconds
export const DURATION_SCROLL = 0.7; // seconds (0.6-0.8s requirement)
export const STAGGER_DEFAULT = 0.1; // seconds between siblings
export const VIEWPORT_THRESHOLD = 0.15; // Trigger once when 15% visible

/**
 * Checks if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Checks if the primary pointer is coarse (touch device)
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
};
