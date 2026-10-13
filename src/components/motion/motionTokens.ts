/**
 * Motion Tokens, Physics Constants & Mathematical Helpers
 * Calibrated for Framer Motion + Lenis scroll systems.
 */

// cubic-bezier(0.22, 1, 0.36, 1) - smooth deceleration spring-like curve
export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const MOTION_EASE_STRING = "cubic-bezier(0.22, 1, 0.36, 1)";

// Theme definition matching requirements
export const MOTION_THEME = {
  bg: "#111111",
  card: "#1a1a1a",
  border: "#333333",
  accentOrange: "#f97316",
  accentOrangeGradient: "linear-gradient(90deg, #f97316, #fb923c)",
} as const;

export const DURATION_HOVER = 0.3;
export const DURATION_SCROLL = 0.7;
export const STAGGER_DEFAULT = 0.05;
export const VIEWPORT_THRESHOLD = 0.15;

/**
 * Clamps a number between a minimum and maximum bound.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Clamped mapRange helper for JS-thread useTransform functions.
 * Keeps animations strictly on the JS thread and prevents WAAPI errors
 * like "Offsets must be monotonically non-decreasing".
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMin === inMax) return outMin;
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + t * (outMax - outMin);
}

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
