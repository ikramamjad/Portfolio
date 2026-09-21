import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const HLS_SOURCE =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const marqueeText =
  "IKRAM AMJAD • COMPUTER ENGINEER • FULL-STACK ENGINEER • MERN • NEXT.JS • LARAVEL • PROMPT ENGINEER • ".repeat(
    6
  );

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ikram-amjad-8963b4195" },
  { name: "GitHub", url: "https://github.com/ikramamjad" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Dribbble", url: "https://dribbble.com" },
];

export const ContactFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize flipped HLS background video
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
        video.play().catch(() => {});
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

  // GSAP Infinite Marquee
  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    const ctx = gsap.context(() => {
      // GSAP xPercent: -50, duration 40, ease "none", repeat -1
      gsap.to(marqueeEl, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden"
    >
      {/* Background Video: flipped vertically (scale-y-[-1]). Heavier overlay: bg-black/60 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* GSAP Marquee: "BUILDING THE FUTURE • " repeated 10x */}
        <div className="relative w-full overflow-hidden mb-16 md:mb-24 select-none opacity-40 hover:opacity-75 transition-opacity">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic text-stroke tracking-tight"
          >
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        {/* CTA Area */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
            Have a project in mind?
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight leading-tight">
            Let&apos;s create something{" "}
            <span className="font-display italic">extraordinary</span> together.
          </h2>

          <p className="text-sm md:text-base text-muted max-w-lg leading-relaxed">
            Available for full-stack engineering roles, scalable backend architectures,
            and high-impact technical initiatives.
          </p>

          {/* Email button: mailto:ikramamjad10@gmail.com with gradient hover border ring */}
          <div className="pt-4">
            <a
              href="mailto:ikramamjad10@gmail.com"
              className="group relative inline-flex items-center rounded-full p-[2px] transition-all duration-300 hover:scale-105"
            >
              {/* Gradient border ring on hover */}
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
              <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-stroke bg-surface/90 backdrop-blur-md px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-medium text-text-primary group-hover:border-transparent transition-colors">
                <span className="break-all sm:break-normal">ikramamjad10@gmail.com</span>
                <span className="text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-16 md:mt-28 pt-8 border-t border-stroke/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Status badge: Green pulsing dot + "Available for projects" */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-stroke bg-surface/40 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-text-primary/90 font-medium">
              Available for projects
            </span>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted/60">
            © {new Date().getFullYear()} IKRAM AMJAD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
