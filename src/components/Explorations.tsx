import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  rotation: string;
  image: string;
  description: string;
}

const column1Items: ExplorationItem[] = [
  {
    id: "kinetic-geometry",
    title: "Kinetic Geometry",
    category: "Three.js • Shader Mesh",
    rotation: "-rotate-3",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description:
      "Real-time procedural deformation shaders exploring kinetic geometry and fluid chromatic refractions.",
  },
  {
    id: "neural-latents",
    title: "Neural Latents & Vectors",
    category: "Generative AI • Embeddings",
    rotation: "rotate-2",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
    description:
      "Visualizing high-dimensional embedding spaces and prompt vector clusters via animated particle fields.",
  },
  {
    id: "reactive-state-engine",
    title: "Reactive State Engine",
    category: "Full-Stack • Architecture",
    rotation: "-rotate-2",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    description:
      "Interactive reactive state management, asynchronous queue coordination, and real-time client hydration.",
  },
];

const column2Items: ExplorationItem[] = [
  {
    id: "chromatic-dispersion",
    title: "Chromatic Dispersion",
    category: "GLSL • Post-Processing",
    rotation: "rotate-3",
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1000&auto=format&fit=crop",
    description:
      "GPU-accelerated lens distortion and spectral separation passes with dynamic blur falloff.",
  },
  {
    id: "nextjs-dynamic-ui",
    title: "Next.js Dynamic Layouts",
    category: "Next.js • Spatial UI",
    rotation: "-rotate-4",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    description:
      "High-performance server-rendered component pipelines, nested layouts, and low-latency navigation structures.",
  },
  {
    id: "audio-reactive-stream",
    title: "Real-Time WebSocket Stream",
    category: "Node.js • Concurrency",
    rotation: "rotate-2",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
    description:
      "Bidirectional WebSocket data pipelines with event multiplexing and sub-millisecond client propagation.",
  },
];

export const Explorations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const [activeLightbox, setActiveLightbox] = useState<ExplorationItem | null>(
    null
  );

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedContentRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !pinned || !col1 || !col2) return;

    const ctx = gsap.context(() => {
      // Layer 1: Pinned Center (z-10) with GSAP ScrollTrigger.create({ pin: contentRef, pinSpacing: false })
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pinned,
        pinSpacing: false,
      });

      // Layer 2: Parallax Columns movement
      // Column 1 moves smoothly upward
      gsap.fromTo(
        col1,
        { y: 100 },
        {
          y: -450,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      );

      // Column 2 starts lower and moves faster for depth difference
      gsap.fromTo(
        col2,
        { y: 350 },
        {
          y: -750,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.8,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg overflow-hidden"
    >
      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={pinnedContentRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10"
      >
        <div className="max-w-xl mx-auto pointer-events-auto">
          {/* Eyebrow: "Explorations" */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Engineering Lab
            </span>
            <span className="w-8 h-px bg-stroke" />
          </div>

          {/* Heading: "Interactive explorations" */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-text-primary mb-4 tracking-tight">
            Interactive{" "}
            <span className="font-display italic font-normal">explorations</span>
          </h2>

          {/* Subtext + GitHub button */}
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8 leading-relaxed">
            Experiments in Full-Stack UX, Next.js server components, Three.js shaders,
            and AI prompt vectors.
          </p>

          <a
            href="https://github.com/ikramamjad"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/90 backdrop-blur-md px-6 py-3 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors">
              <span>Explore on GitHub</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20, absolute) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex justify-center pt-32">
        <div className="w-full max-w-[1500px] px-6 sm:px-12 flex justify-between pointer-events-auto">
          {/* Column 1 - Left flank */}
          <div ref={col1Ref} className="w-[280px] sm:w-[320px] shrink-0 flex flex-col space-y-28 md:space-y-44">
            {column1Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`group relative aspect-square w-full rounded-3xl overflow-hidden border border-stroke bg-surface shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${item.rotation}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-display italic text-text-primary">
                    {item.title}
                  </h4>
                </div>
                {/* Hover ring */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-colors pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Column 2 - Right flank */}
          <div ref={col2Ref} className="w-[280px] sm:w-[320px] shrink-0 flex flex-col space-y-28 md:space-y-44 pt-20">
            {column2Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`group relative aspect-square w-full rounded-3xl overflow-hidden border border-stroke bg-surface shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${item.rotation}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-display italic text-text-primary">
                    {item.title}
                  </h4>
                </div>
                {/* Hover ring */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-colors pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl p-6"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-stroke/70 mb-5">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-stroke flex items-center justify-center text-muted hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {activeLightbox.category}
                  </span>
                </div>
                <h3 className="text-2xl font-display italic text-text-primary">
                  {activeLightbox.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {activeLightbox.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
