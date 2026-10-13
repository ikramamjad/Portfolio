import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motionTokens";

interface ScrollToOptions {
  duration?: number;
  offset?: number;
  immediate?: boolean;
  lock?: boolean;
  onComplete?: () => void;
}

interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (
    target: string | HTMLElement | number,
    options?: ScrollToOptions
  ) => void;
  isReducedMotion: boolean;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
  isReducedMotion: false,
});

export const useLenis = (): LenisContextValue => useContext(LenisContext);

interface LenisProviderProps {
  children: React.ReactNode;
  lerp?: number;
  duration?: number;
}

/**
 * EFFECT #1: Smooth Scrolling with Lenis Provider
 * Wrapped around the application, driven by requestAnimationFrame,
 * exposed through React context.
 *
 * Nav links can call:
 *   const { scrollTo } = useLenis();
 *   scrollTo("#work", { duration: 1.6 });
 */
export const LenisProvider: React.FC<LenisProviderProps> = ({
  children,
  lerp = 0.085,
  duration = 1.6,
}) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [isReduced, setIsReduced] = useState(false);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (prefersReducedMotion()) {
      setIsReduced(true);
      return;
    }

    // Initialize Lenis with lerp ~0.085
    const lenis = new Lenis({
      lerp,
      duration,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    setLenisInstance(lenis);
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Connect with GSAP ScrollTrigger if active
    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
    }

    // Drive with requestAnimationFrame
    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
      setLenisInstance(null);
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, [lerp, duration]);

  const scrollTo = useCallback(
    (
      target: string | HTMLElement | number,
      options: ScrollToOptions = {}
    ) => {
      const resolvedDuration = options.duration ?? 1.6;

      let resolvedTarget: HTMLElement | number | string = target;
      if (typeof target === "string") {
        const id = target.startsWith("#") ? target.slice(1) : target;
        const el = document.getElementById(id) || document.querySelector(target);
        if (el instanceof HTMLElement) {
          resolvedTarget = el;
        }
      }

      if (lenisInstance) {
        lenisInstance.scrollTo(resolvedTarget, {
          duration: resolvedDuration,
          offset: options.offset ?? 0,
          immediate: options.immediate ?? false,
          lock: options.lock ?? false,
          onComplete: options.onComplete,
        });
      } else if (resolvedTarget instanceof HTMLElement) {
        resolvedTarget.scrollIntoView({ behavior: "smooth" });
        options.onComplete?.();
      } else if (typeof resolvedTarget === "number") {
        window.scrollTo({ top: resolvedTarget, behavior: "smooth" });
        options.onComplete?.();
      }
    },
    [lenisInstance]
  );

  return (
    <LenisContext.Provider
      value={{
        lenis: lenisInstance,
        scrollTo,
        isReducedMotion: isReduced,
      }}
    >
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;
