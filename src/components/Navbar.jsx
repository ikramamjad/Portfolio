import React, { useState, useEffect } from 'react';
import { Sun, Moon, Zap, Menu, X, ArrowUpRight } from 'lucide-react';
import AnimeAvatar from './AnimeAvatar';

export default function Navbar({ theme, toggleTheme, liteMode, setLiteMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'timeline', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0B0D14]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-glass-dark'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200 py-3 shadow-glass-light'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Anime Character */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-3 font-heading text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 transition-colors"
        >
          {/* Stylized Anime Avatar in Logo */}
          <AnimeAvatar size={38} className="ring-2 ring-indigo-500/40 group-hover:ring-indigo-400 transition-all shadow-md" />
          
          <div className="flex flex-col">
            <span className="leading-tight flex items-center gap-1.5">
              Ikram Amjad
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" title="Active Engineer" />
            </span>
            <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
              Full Stack & Backend
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm ${
            isDark
              ? 'bg-slate-900/60 border-white/10'
              : 'bg-slate-100/80 border-slate-200'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === (link.href === '#timeline' ? 'timeline' : link.href.substring(1));
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white text-indigo-600 shadow-sm border border-slate-200/60 font-semibold'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* System Controls & CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 ${
              isDark
                ? 'bg-slate-900/70 text-amber-400 border-white/10 hover:border-amber-400/40 hover:bg-slate-800'
                : 'bg-white text-indigo-600 border-slate-200 hover:border-indigo-300 hover:bg-slate-50 shadow-sm'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-xs font-mono font-medium hidden lg:inline">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>

          {/* 3D Performance Mode Toggle */}
          <button
            onClick={() => setLiteMode(!liteMode)}
            title={liteMode ? "Enable HQ 3D Scene" : "Enable Lite Performance Mode"}
            className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 ${
              liteMode
                ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                : isDark
                ? 'bg-slate-900/70 text-slate-400 border-white/10 hover:border-white/20'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span className="text-xs font-mono font-medium hidden lg:inline">
              {liteMode ? "Lite 3D" : "HQ 3D"}
            </span>
          </button>

          {/* Get In Touch CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="ml-1 px-4 py-2 rounded-xl font-medium text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all active:scale-95 flex items-center gap-1"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-xl border ${
              isDark ? 'bg-slate-900 border-white/10 text-amber-400' : 'bg-white border-slate-200 text-indigo-600'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isDark ? 'bg-slate-900 border-white/10 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 mt-2 border-b backdrop-blur-xl animate-in slide-in-from-top duration-200 ${
            isDark ? 'bg-[#0B0D14]/95 border-white/10' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => setLiteMode(!liteMode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono border flex items-center gap-1.5 ${
                  isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-700'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>3D: {liteMode ? "Lite" : "HQ"}</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-indigo-600 text-white shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
