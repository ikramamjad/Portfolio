import React, { useState, useEffect } from "react";
import { Menu, X, Bot, Sparkles, FileText } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      const sections = ["hero", "stack", "work", "journal", "explorations", "contact"];
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
    setActive(id === "hero" ? "home" : id);
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4 pointer-events-none">
      <div className="flex flex-col items-center pointer-events-auto max-w-full">
        {/* Desktop Navbar */}
        <nav
          className={`hidden md:inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-all duration-300 ${
            hasScrolled ? "shadow-lg shadow-black/50 border-white/15 bg-surface/90" : "bg-surface/75"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center w-9 h-9 p-[1.5px] rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full logo-gradient-ring" />
            <span className="relative z-10 w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary select-none group-hover:scale-105 transition-transform">
                IA
              </span>
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-2" />

          {/* Nav links */}
          <div className="flex items-center space-x-1 sm:space-x-1.5">
            <button
              onClick={() => scrollTo("hero")}
              className={`text-xs sm:text-sm rounded-full px-3.5 py-1.5 transition-all duration-200 font-medium ${
                active === "home"
                  ? "text-text-primary bg-stroke/60 font-semibold"
                  : "text-muted hover:text-text-primary hover:bg-stroke/30"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollTo("stack")}
              className={`text-xs sm:text-sm rounded-full px-3.5 py-1.5 transition-all duration-200 font-medium ${
                active === "stack"
                  ? "text-text-primary bg-stroke/60 font-semibold"
                  : "text-muted hover:text-text-primary hover:bg-stroke/30"
              }`}
            >
              Stack
            </button>

            <button
              onClick={() => scrollTo("work")}
              className={`text-xs sm:text-sm rounded-full px-3.5 py-1.5 transition-all duration-200 font-medium ${
                active === "work"
                  ? "text-text-primary bg-stroke/60 font-semibold"
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
              className="text-xs sm:text-sm rounded-full px-3.5 py-1.5 transition-all duration-200 font-medium text-muted hover:text-text-primary hover:bg-stroke/30"
            >
              Resume
            </button>

            {/* AI Twin Trigger */}
            <button
              onClick={onAITwinClick}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm rounded-full px-3.5 py-1.5 transition-all duration-200 font-medium text-muted hover:text-text-primary hover:bg-stroke/30 group/ai"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI Twin</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-2" />

          {/* "Say hi" button */}
          <button
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollTo("contact");
            }}
            className="group relative inline-flex items-center text-xs sm:text-sm rounded-full p-[2px] transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
            <span className="absolute inset-[-1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface backdrop-blur-md text-text-primary font-medium border border-stroke/40 group-hover:border-transparent transition-colors">
              Say hi
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </button>
        </nav>

        {/* Mobile Compact Navbar */}
        <div className="flex md:hidden flex-col items-center w-full">
          <nav
            className={`inline-flex items-center justify-between w-full max-w-[340px] rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-1.5 shadow-lg shadow-black/50 transition-all duration-300`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              aria-label="Scroll to top"
              className="group relative flex items-center justify-center w-8 h-8 p-[1px] rounded-full"
            >
              <span className="absolute inset-0 rounded-full logo-gradient-ring" />
              <span className="relative z-10 w-full h-full rounded-full bg-bg flex items-center justify-center">
                <span className="font-display italic text-[12px] text-text-primary">
                  IA
                </span>
              </span>
            </button>

            {/* Quick action buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={onAITwinClick}
                className="inline-flex items-center gap-1 text-[11px] rounded-full px-2.5 py-1 bg-surface border border-stroke text-text-primary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>AI</span>
              </button>

              <button
                onClick={() => {
                  if (onContactClick) onContactClick();
                  else scrollTo("contact");
                }}
                className="text-[11px] rounded-full px-3 py-1 accent-gradient text-black font-semibold"
              >
                Say hi ↗
              </button>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-muted hover:text-white border border-stroke bg-bg ml-0.5"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>

          {/* Mobile Expanded Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="w-full max-w-[340px] mt-2 rounded-2xl bg-surface/95 backdrop-blur-xl border border-stroke p-3 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => scrollTo("hero")}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between ${
                  active === "home" ? "bg-white/10 text-white font-semibold" : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Home</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted/60">01</span>
              </button>

              <button
                onClick={() => scrollTo("stack")}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between ${
                  active === "stack" ? "bg-white/10 text-white font-semibold" : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Technical Arsenal</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted/60">02</span>
              </button>

              <button
                onClick={() => scrollTo("work")}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between ${
                  active === "work" ? "bg-white/10 text-white font-semibold" : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Featured Projects</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted/60">03</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onResumeClick) onResumeClick();
                  else window.open("https://www.linkedin.com/in/ikram-amjad-8963b4195", "_blank");
                }}
                className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium text-muted hover:text-white hover:bg-white/5 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume (CV)</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted/60">PDF</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onAITwinClick) onAITwinClick();
                }}
                className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ikram&apos;s AI Twin</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400">Voice/Chat</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
