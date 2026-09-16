import React, { useState, useEffect } from "react";

interface NavbarProps {
  activeSection?: string;
  onResumeClick?: () => void;
  onContactClick?: () => void;
  onAITwinClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = "home",
  onResumeClick,
  onContactClick,
  onAITwinClick,
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [active, setActive] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      const sections = ["home", "stack", "work", "journal", "explorations", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(sectionId === "hero" ? "home" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 pointer-events-auto transition-all duration-300 ${
          hasScrolled ? "shadow-md shadow-black/40 border-white/15 bg-surface/90" : "bg-surface/75"
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border (reverses direction on hover). Inner bg-bg circle with "IA" in font-display italic text-[13px]. Scales 110% on hover. */}
        <button
          onClick={() => scrollTo("hero")}
          aria-label="Scroll to top"
          className="group relative flex items-center justify-center w-9 h-9 p-[1.5px] rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none"
        >
          {/* Animated gradient ring */}
          <span className="absolute inset-0 rounded-full logo-gradient-ring" />
          {/* Inner circle */}
          <span className="relative z-10 w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary select-none group-hover:scale-105 transition-transform">
              IA
            </span>
          </span>
        </button>

        {/* 2. Divider (hidden on mobile) */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

        {/* 3. Nav links: ["Home", "Stack", "Work", "Resume"] */}
        <div className="flex items-center space-x-1 sm:space-x-1.5">
          <button
            onClick={() => scrollTo("hero")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium ${
              active === "home"
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/30"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("stack")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium ${
              active === "stack"
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/30"
            }`}
          >
            Stack
          </button>

          <button
            onClick={() => scrollTo("work")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium ${
              active === "work"
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/30"
            }`}
          >
            Work
          </button>

          <button
            onClick={() => {
              if (onResumeClick) onResumeClick();
              else {
                window.open("https://www.linkedin.com/in/ikram-amjad-8963b4195", "_blank");
              }
            }}
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium text-muted hover:text-text-primary hover:bg-stroke/30"
          >
            Resume
          </button>

          {/* AI Twin Trigger */}
          <button
            onClick={onAITwinClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium text-muted hover:text-text-primary hover:bg-stroke/30 group/ai"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>AI Twin</span>
          </button>
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-2" />

        {/* 5. "Say hi" button: Same size as nav links. On hover shows accent gradient border behind (using absolute span with inset: -2px). Inner content wrapped in bg-surface rounded-full backdrop-blur-md. Includes "↗" arrow. */}
        <button
          onClick={() => {
            if (onContactClick) onContactClick();
            else scrollTo("contact");
          }}
          className="group relative inline-flex items-center text-xs sm:text-sm rounded-full p-[2px] transition-all duration-300 hover:scale-105 focus:outline-none"
        >
          {/* Gradient border on hover */}
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
          <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Inner content */}
          <span className="relative z-10 inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-surface backdrop-blur-md text-text-primary font-medium border border-stroke/40 group-hover:border-transparent transition-colors">
            Say hi
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </button>
      </nav>
    </header>
  );
};
