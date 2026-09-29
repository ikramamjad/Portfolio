import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { EditorialHeadline, EditorialSupporting, ParallaxLayer } from "./motion/EditorialReveal";
import { ArrowUpRight, Github } from "lucide-react";
import { prefersReducedMotion } from "./motion/motionTokens";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  id: string;
  numeral: string;
  title: string;
  category: string;
  rotation: string;
  image: string;
  description: string;
}

const column1Items: ExplorationItem[] = [
  {
    id: "kinetic-geometry",
    numeral: "01",
    title: "Kinetic Geometry",
    category: "Three.js • Shader Mesh",
    rotation: "-rotate-2",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description:
      "Real-time procedural deformation shaders exploring kinetic geometry and fluid chromatic refractions.",
  },
  {
    id: "neural-latents",
    numeral: "02",
    title: "Neural Latents & Vectors",
    category: "Generative AI • Embeddings",
    rotation: "rotate-2",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Visualizing high-dimensional embedding spaces and prompt vector clusters via animated particle fields.",
  },
  {
    id: "reactive-state-engine",
    numeral: "03",
    title: "Reactive State Engine",
    category: "Full-Stack • Architecture",
    rotation: "-rotate-1",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    description:
      "Interactive reactive state management, asynchronous queue coordination, and real-time client hydration.",
  },
];

const column2Items: ExplorationItem[] = [
  {
    id: "chromatic-dispersion",
    numeral: "04",
    title: "Chromatic Dispersion",
    category: "GLSL • Post-Processing",
    rotation: "rotate-2",
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1200&auto=format&fit=crop",
    description:
      "GPU-accelerated lens distortion and spectral separation passes with dynamic blur falloff.",
  },
  {
    id: "nextjs-dynamic-ui",
    numeral: "05",
    title: "Next.js Dynamic Layouts",
    category: "Next.js • Spatial UI",
    rotation: "-rotate-2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-performance server-rendered component pipelines, nested layouts, and low-latency navigation structures.",
  },
  {
    id: "audio-reactive-stream",
    numeral: "06",
    title: "Real-Time WebSocket Stream",
    category: "Node.js • Concurrency",
    rotation: "rotate-1",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    description:
      "Bidirectional WebSocket data pipelines with event multiplexing and sub-millisecond client propagation.",
  },
];

export const Explorations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const [activeLightbox, setActiveLightbox] = useState<ExplorationItem | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const pinned = pinnedContentRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !pinned || !col1 || !col2) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Layer 1: Pinned Center Billboard (z-10)
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pinned,
        pinSpacing: false,
      });

      // Layer 2: Parallax Columns movement with large cards
      gsap.fromTo(
        col1,
        { y: 80 },
        {
          y: -360,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        col2,
        { y: 240 },
        {
          y: -540,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.8,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const allItems = [...column1Items, ...column2Items];

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative bg-[#050505] overflow-hidden lg:min-h-[320vh] border-t border-white/10"
    >
      {/* Restrained Parallax Atmosphere Background Glows */}
      <ParallaxLayer offset={[120, -120]} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-crimson/10 blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-pink-soft/10 blur-[160px]" />
      </ParallaxLayer>

      {/* --- DESKTOP VIEW (lg:block): Pinned Center Billboard + Prominent Large Parallax Cards --- */}
      <div className="hidden lg:block relative z-10">
        {/* Layer 1: Pinned Center Billboard (z-10) */}
        <div
          ref={pinnedContentRef}
          className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10"
        >
          <div className="max-w-xl mx-auto pointer-events-auto p-10 rounded-3xl bg-black/75 backdrop-blur-md border border-white/10 shadow-2xl">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-pink-soft/60" />
              <span className="font-mono text-xs text-pink-soft uppercase tracking-[0.3em] font-medium">
                Engineering Lab // 03
              </span>
              <span className="w-8 h-px bg-pink-soft/60" />
            </div>

            {/* Bold Condensed Display Headline with selective soft-pink emphasis */}
            <EditorialHeadline
              as="h2"
              className="text-5xl lg:text-7xl font-condensed font-black uppercase tracking-tight text-white/95 mb-4"
            >
              INTERACTIVE{" "}
              <span className="text-pink-soft font-normal italic font-display">explorations</span>
            </EditorialHeadline>

            {/* Editorial Supporting Body Copy */}
            <EditorialSupporting delay={0.2}>
              <p className="font-sans text-sm text-zinc-400 max-w-md mx-auto mb-4 leading-relaxed">
                Experiments in full-stack performance, Next.js spatial components, Three.js GLSL shaders, and AI latent prompt vector spaces.
              </p>

              <div className="flex items-center justify-center gap-4 mb-8 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                <span>[ 06 Experiments ]</span>
                <span>•</span>
                <span>[ GLSL / Three.js / Node ]</span>
              </div>

              <a
                href="https://github.com/ikramamjad"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950 px-7 py-3.5 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors font-mono">
                  <Github className="w-4 h-4" />
                  <span className="animated-underline">Explore on GitHub</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </EditorialSupporting>
          </div>
        </div>

        {/* Layer 2: Parallax Columns with LARGE, PROMINENT Images (z-20, absolute) */}
        <div className="absolute inset-0 z-20 pointer-events-none flex justify-center pt-32">
          <div className="w-full max-w-[1550px] px-8 lg:px-12 flex justify-between pointer-events-auto">
            {/* Column 1 - Left flank */}
            <div ref={col1Ref} className="w-[380px] lg:w-[440px] shrink-0 flex-none flex flex-col space-y-28 lg:space-y-36">
              {column1Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightbox(item)}
                  className={`group relative w-full h-[500px] lg:h-[540px] shrink-0 flex-none rounded-3xl overflow-hidden border border-white/15 hover:border-pink-soft/60 bg-zinc-950 shadow-2xl transition-all duration-500 hover:scale-[1.03] cursor-pointer ${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                  {/* Numeral Pill Top */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="font-condensed font-black text-2xl text-white/40 group-hover:text-pink-soft transition-colors select-none">
                      {item.numeral}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-7 text-left z-10">
                    <span className="font-mono text-xs uppercase tracking-wider text-pink-soft block mb-1.5 font-medium">
                      {item.category}
                    </span>
                    <h4 className="text-xl lg:text-2xl font-display italic text-white/95 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-soft/40 rounded-3xl transition-colors pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Column 2 - Right flank */}
            <div ref={col2Ref} className="w-[380px] lg:w-[440px] shrink-0 flex-none flex flex-col space-y-28 lg:space-y-36 pt-32">
              {column2Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightbox(item)}
                  className={`group relative w-full h-[500px] lg:h-[540px] shrink-0 flex-none rounded-3xl overflow-hidden border border-white/15 hover:border-pink-soft/60 bg-zinc-950 shadow-2xl transition-all duration-500 hover:scale-[1.03] cursor-pointer ${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                  {/* Numeral Pill Top */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="font-condensed font-black text-2xl text-white/40 group-hover:text-pink-soft transition-colors select-none">
                      {item.numeral}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-7 text-left z-10">
                    <span className="font-mono text-xs uppercase tracking-wider text-pink-soft block mb-1.5 font-medium">
                      {item.category}
                    </span>
                    <h4 className="text-xl lg:text-2xl font-display italic text-white/95 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-soft/40 rounded-3xl transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE & TABLET VIEW (< lg): Editorial Responsive Layout with Large Cards --- */}
      <div className="block lg:hidden py-32 sm:py-44 px-4 sm:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-pink-soft/60" />
            <span className="font-mono text-xs text-pink-soft uppercase tracking-[0.3em] font-medium">
              Engineering Lab // 03
            </span>
            <span className="w-8 h-px bg-pink-soft/60" />
          </div>

          <EditorialHeadline
            as="h2"
            className="text-4xl sm:text-6xl font-condensed font-black uppercase tracking-tight text-white/95 mb-4"
          >
            INTERACTIVE{" "}
            <span className="text-pink-soft font-normal italic font-display">explorations</span>
          </EditorialHeadline>

          <EditorialSupporting delay={0.2}>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Experiments in Full-Stack UX, Next.js server components, Three.js shaders, and AI prompt vectors.
            </p>

            <a
              href="https://github.com/ikramamjad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950 px-6 py-3 text-xs uppercase tracking-widest text-text-primary font-mono">
                <span className="animated-underline">Explore on GitHub ↗</span>
              </span>
            </a>
          </EditorialSupporting>
        </div>

        {/* Mobile & Tablet Card Grid with Large Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {allItems.map((item) => (
            <div
              key={`m-${item.id}`}
              onClick={() => setActiveLightbox(item)}
              className="group relative h-[420px] w-full rounded-3xl overflow-hidden border border-white/15 hover:border-pink-soft/50 bg-zinc-950 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                width={600}
                height={420}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-left">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-pink-soft">
                    {item.category}
                  </span>
                  <span className="font-condensed font-black text-sm text-white/30">
                    {item.numeral}
                  </span>
                </div>
                <h4 className="text-lg font-display italic text-white/95">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-zinc-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
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
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-xl bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6"
            >
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-5">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-pink-soft">
                    {activeLightbox.category}
                  </span>
                  <span className="font-condensed font-black text-sm text-white/30">
                    EXPERIMENT #{activeLightbox.numeral}
                  </span>
                </div>
                <h3 className="text-2xl font-display italic text-white/95">
                  {activeLightbox.title}
                </h3>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
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

export default Explorations;
