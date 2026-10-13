/**
 * Reusable Motion & Scroll Architecture
 * Powered by Framer Motion + Lenis with strict reversible (viewport={{ once: false }})
 * and JS-thread useTransform functions via clamped mapRange.
 */

// Math, tokens & helpers
export * from "./motionTokens";

// Effect #1: Smooth Scrolling Lenis Provider
export * from "./LenisProvider";

// Effect #2: Scroll Progress Bar (spring-smoothed orange gradient)
export * from "./ScrollProgressBar";

// Effect #3: Auto-Hiding Navbar
export * from "./AutoHidingNavbar";

// Effect #4: Hero Parallax Exit
export * from "./HeroParallaxExit";

// Effect #5: Masked Word-by-Word Heading Reveal
export * from "./MaskedHeadingReveal";

// Effect #6: Scroll-Scrubbed Paragraph
export * from "./ScrollScrubbedParagraph";

// Effect #7: Scroll-Velocity Marquee
export * from "./VelocityMarquee";

// Effect #8: Pinned Horizontal Scroll
export * from "./PinnedHorizontalScroll";

// Effect #9: Sticky Stacking Cards
export * from "./StickyStackingCards";

// Effect #10: Parallax Image
export * from "./ParallaxImage";

// Effect #11: 3D Scale Reveal
export * from "./ScaleReveal3D";

// Effect #12: 3D Grid Card Entrance
export * from "./GridEntrance3D";

// Effect #13: Sticky 3D Cover-Flow Carousel (300vh Section)
export * from "./CoverFlowCarousel3D";
