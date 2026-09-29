import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motionTokens";

/**
 * Ultra-smooth, momentum-based scrolling with a soft inertial catch-up effect.
 * Calibrated with a low lerp (0.075) for a responsive but weighty feel—never bouncy or delayed.
 * Synchronized with GSAP ScrollTrigger ticker for 60/120fps hardware rendering.
 */
export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (prefersReducedMotion()) {
      return;
    }

    // Weighty momentum-based Lenis configuration
    const lenis = new Lenis({
      lerp: 0.075, // Soft inertial catch-up: weighty, responsive, zero bounce
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    // Make accessible globally
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
};

export default SmoothScroll;
