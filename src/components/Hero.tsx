import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { HeroTextReveal, MaskRevealItem } from "./motion/HeroTextReveal";
import { MagneticButton } from "./motion/MagneticButton";
import { TechTooltip } from "./motion/TechTooltip";

interface HeroProps {
  onSeeWorksClick?: () => void;
  onReachOutClick?: () => void;
}

const roles = [
  "Full-Stack Engineer",
  "Computer Engineer",
  "MERN Stack Specialist",
  "Next.js & React Developer",
  "Backend Architect",
  "Prompt Engineer",
];

const heroStacks = [
  "MERN Stack",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "Laravel",
  "PHP",
  "Angular.js",
  "Redis",
  "Prompt Engineer",
];
const HLS_SOURCE =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const Hero: React.FC<HeroProps> = ({
  onSeeWorksClick,
  onReachOutClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Initialize HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        autoStartLoad: true,
        startLevel: -1,
        capLevelToPlayerSize: true,
      });
      hls.loadSource(HLS_SOURCE);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay policy fallback
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SOURCE;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Role cycler every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToWork = () => {
    if (onSeeWorksClick) {
      onSeeWorksClick();
    } else {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    if (onReachOutClick) {
      onReachOutClick();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-75"
        />
        {/* Dark overlay: bg-black/20 */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom fade: h-48 bg-gradient-to-t from-bg to-transparent */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        {/* SCROLL / LOAD EFFECT #2: Eyebrow Mask Reveal */}
        <MaskRevealItem delay={0.1} duration={0.7} className="mb-4 sm:mb-6">
          <div className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] sm:tracking-[0.25em] flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-center">PORTFOLIO // COMPUTER ENGINEER &amp; FULL-STACK ENGINEER</span>
          </div>
        </MaskRevealItem>

        {/* SCROLL / LOAD EFFECT #2: Name Reveal (word by word mask reveal on page load) */}
        <HeroTextReveal
          text="IKRAM AMJAD"
          as="h1"
          mode="words"
          delay={0.2}
          stagger={0.12}
          duration={0.8}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.95] sm:leading-[0.9] tracking-tight text-text-primary mb-4 sm:mb-6 select-none break-words"
        />

        {/* SCROLL / LOAD EFFECT #2: Role Title Mask Reveal */}
        <MaskRevealItem delay={0.4} duration={0.8} className="mb-4">
          <p className="text-sm sm:text-base md:text-xl text-text-primary/90 font-light">
            A{" "}
            <span
              key={roleIndex}
              className="font-display italic text-text-primary animate-role-fade-in inline-block text-lg sm:text-xl md:text-2xl px-1"
            >
              {roles[roleIndex]}
            </span>{" "}
            based in Islamabad.
          </p>
        </MaskRevealItem>

        {/* SCROLL / LOAD EFFECT #2: Description Mask Reveal */}
        <MaskRevealItem delay={0.55} duration={0.8} className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm md:text-base text-muted max-w-xl leading-relaxed px-2">
            Specializing in scalable full-stack web applications, high-throughput microservices,
            optimized database architectures, and intelligent prompt engineering.
          </p>
        </MaskRevealItem>

        {/* HOVER EFFECT #4: Main CTA Buttons with Magnetic Pull + Fill-Slide */}
        <MaskRevealItem delay={0.7} duration={0.8} className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <MagneticButton onClick={handleScrollToWork}>
              <div className="w-full sm:w-auto group relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-medium px-7 py-3.5 focus:outline-none">
                <span className="relative z-10 w-full h-full rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-colors duration-300 px-6 py-2.5">
                  Explore Projects
                </span>
              </div>
            </MagneticButton>

            <MagneticButton onClick={handleScrollToContact}>
              <div className="w-full sm:w-auto group relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-medium p-[2px] focus:outline-none">
                <span className="relative z-10 w-full rounded-full border-2 border-stroke group-hover:border-transparent bg-bg text-text-primary transition-all duration-300 px-7 py-2.5 sm:py-3 text-center">
                  Reach out...
                </span>
              </div>
            </MagneticButton>
          </div>
        </MaskRevealItem>

        {/* HOVER EFFECT #5: Stacks Badges with lift, scale-up & tooltip label */}
        <MaskRevealItem delay={0.85} duration={0.8} className="mt-10 w-full max-w-2xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-stroke" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted font-medium">
              Core Tech Stacks
            </span>
            <span className="w-6 h-px bg-stroke" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {heroStacks.map((stack) => (
              <TechTooltip key={stack} name={stack} category="Core Stack">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stroke/70 bg-surface/70 backdrop-blur-sm text-xs font-mono text-text-primary/90 hover:border-white/30 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                  <span>{stack}</span>
                </span>
              </TechTooltip>
            ))}
          </div>
        </MaskRevealItem>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-none select-none z-10">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
