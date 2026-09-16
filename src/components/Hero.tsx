import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

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
  "MongoDB",
  "MERN",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "Next.js",
  "React.js",
  "Angular.js",
  "Node.js",
  "PHP",
  "Laravel",
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

  // GSAP Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // .name-reveal: opacity 0->1, y 50->0, duration 1.2s, delay 0.1s
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      );

      // .blur-in: opacity 0->1, filter blur(10px)->blur(0px), y 20->0, duration 1s, stagger 0.1, delay 0.3s
      tl.fromTo(
        ".blur-in",
        {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          stagger: 0.1,
        },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
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
        {/* Eyebrow: Computer Engineer & Full-Stack Engineer */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.25em] mb-6 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTFOLIO // COMPUTER ENGINEER &amp; FULL-STACK ENGINEER</span>
        </div>

        {/* Name: text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 — "IKRAM AMJAD". Class name-reveal */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 select-none">
          IKRAM AMJAD
        </h1>

        {/* Role line: "A {role} based in Islamabad." — cycling through engineering roles */}
        <p className="blur-in text-base md:text-xl text-text-primary/90 font-light mb-4">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block text-xl md:text-2xl px-1"
          >
            {roles[roleIndex]}
          </span>{" "}
          based in Islamabad.
        </p>

        {/* Description: Focused on Computer Engineering & Full-Stack capabilities */}
        <p className="blur-in text-sm md:text-base text-muted max-w-xl mb-8 leading-relaxed">
          Specializing in scalable full-stack web applications, high-throughput microservices,
          optimized database architectures, and intelligent prompt engineering.
        </p>

        {/* CTA Buttons (inline-flex gap-4) */}
        <div className="blur-in inline-flex items-center justify-center gap-4 flex-wrap">
          {/* "See Works": Solid button. Default: bg-text-primary text-bg. Hover: bg-bg text-text-primary with accent gradient border ring. */}
          <button
            onClick={handleScrollToWork}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            {/* Gradient border ring on hover */}
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 w-full h-full rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-colors duration-300 px-6 py-2.5">
              Explore Projects
            </span>
          </button>

          {/* "Reach out...": Outlined button. Default: border-2 border-stroke bg-bg text-text-primary. Hover: border-transparent with accent gradient border ring. */}
          <button
            onClick={handleScrollToContact}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium p-[2px] transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            {/* Gradient ring on hover */}
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 rounded-full border-2 border-stroke group-hover:border-transparent bg-bg text-text-primary transition-all duration-300 px-7 py-3">
              Reach out...
            </span>
          </button>
        </div>

        {/* Stacks Badges Bar directly on Hero */}
        <div className="blur-in mt-10 w-full max-w-2xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-stroke" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted font-medium">
              Core Tech Stacks
            </span>
            <span className="w-6 h-px bg-stroke" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {heroStacks.map((stack) => (
              <span
                key={stack}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stroke/70 bg-surface/70 backdrop-blur-sm text-xs font-mono text-text-primary/90 hover:border-white/30 hover:scale-105 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                <span>{stack}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator: Bottom-center, text-xs text-muted uppercase tracking-[0.2em] "SCROLL" label above a w-px h-10 bg-stroke line with animated highlight using .animate-scroll-down. */}
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
