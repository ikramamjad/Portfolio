import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles, Layers } from "lucide-react";
import { FadeUpStagger, FadeUpItem } from "./motion/FadeUpStagger";
import { EditorialHeadline, EditorialSupporting, ParallaxLayer } from "./motion/EditorialReveal";

interface Project {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  category: string;
  colSpan: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: "road-accident-detection",
    numeral: "01",
    title: "Road Accident Detection System",
    subtitle: "Real-Time Multi-Modal Computer Vision & Kinematics",
    category: "Computer Vision & AI",
    colSpan: "md:col-span-7",
    image: "/thumbnails/road-accident-detection.jpg",
    description:
      "End-to-end real-time road accident detection analyzing live video feeds and RTSP camera streams to detect collisions, falls, and trajectory kinematics with multi-signal fusion.",
    tags: ["Python", "Computer Vision", "PyTorch", "OpenCV", "YOLO", "Kinematics"],
    link: "https://github.com/ikramamjad/Road-Accident-Detection",
  },
  {
    id: "ai-interview",
    numeral: "02",
    title: "AI Interview & Proctoring Platform",
    subtitle: "Next.js 16, React 19, Three.js & Express Architecture",
    category: "Full-Stack AI & Next.js",
    colSpan: "md:col-span-5",
    image: "/thumbnails/ai-interview.jpg",
    description:
      "AI-driven automated interview simulation and proctoring platform featuring interactive 3D digital human avatars, audio gaze analysis, and Prisma database pipelines.",
    tags: ["Next.js", "React 19", "Three.js", "Node.js", "Prisma", "Express.js"],
    link: "https://github.com/ikramamjad/AI-interview",
  },
  {
    id: "food",
    numeral: "03",
    title: "Food Delivery & Ordering API",
    subtitle: "Node.js, Express & MongoDB RESTful Architecture",
    category: "Backend & REST API",
    colSpan: "md:col-span-4",
    image: "/thumbnails/food.jpg",
    description:
      "Production-ready food ordering and delivery REST API engineered with Node.js, Express, and MongoDB, featuring secure JWT authentication and order cart tracking.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API", "Mongoose"],
    link: "https://github.com/ikramamjad/food",
  },
  {
    id: "shop-sphere",
    numeral: "04",
    title: "ShopSphere E-Commerce Backend",
    subtitle: "Node.js, Express, MongoDB & Stripe Integration",
    category: "E-Commerce & FinTech",
    colSpan: "md:col-span-4",
    image: "/thumbnails/shop-sphere.jpg",
    description:
      "Comprehensive e-commerce backend platform with role-based product catalog management, JWT authentication, and secure Stripe PaymentIntents checkout flow.",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe API", "JWT", "RESTful APIs"],
    link: "https://github.com/ikramamjad/Shop-Sphere",
  },
  {
    id: "ride-sharing",
    numeral: "05",
    title: "Ride-Sharing Mobility Platform",
    subtitle: "On-Demand Ride Dispatch & Mobility System",
    category: "Full-Stack Mobility",
    colSpan: "md:col-span-4",
    image: "/thumbnails/ride-sharing.jpg",
    description:
      "On-demand ride-hailing and mobility service architecture inspired by Uber and InDrive, featuring ride booking, driver-passenger matching, and geospatial dispatch.",
    tags: ["Node.js", "Express.js", "MongoDB", "Geospatial", "REST API", "Real-Time"],
    link: "https://github.com/ikramamjad/Ride-Sharing",
  },
];

export const SelectedWorks: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative bg-[#050505] py-36 md:py-52 lg:py-64 border-t border-white/10 overflow-hidden">
      {/* Restrained Parallax Background Atmosphere (Red & Soft-Pink glow) */}
      <ParallaxLayer offset={[80, -80]} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-brand-crimson/10 blur-[140px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-pink-soft/10 blur-[130px]" />
      </ParallaxLayer>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header with Editorial Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-pink-soft/60" />
              <span className="font-mono text-xs text-pink-soft uppercase tracking-[0.3em] font-medium">
                Selected Works // 01
              </span>
            </div>

            {/* Headline with subtle upward drift and blur reduction */}
            <EditorialHeadline
              as="h2"
              className="text-4xl sm:text-6xl lg:text-7xl font-condensed font-black uppercase tracking-tight text-white/95"
            >
              FEATURED{" "}
              <span className="text-pink-soft font-normal italic font-display">architectures</span>
            </EditorialHeadline>

            {/* Supporting copy reveals a beat later */}
            <EditorialSupporting delay={0.2} className="mt-4 max-w-xl">
              <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed">
                Open-source computer vision systems, interactive Next.js 3D platforms, and high-concurrency Node.js REST &amp; FinTech backends engineered for deterministic scale.
              </p>
              <div className="flex items-center gap-4 mt-4 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                <span>[ 05 Systems Built ]</span>
                <span>•</span>
                <span>[ Real-World Deployed ]</span>
              </div>
            </EditorialSupporting>
          </div>

          {/* GitHub Repositories Link */}
          <a
            href="https://github.com/ikramamjad?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start md:self-auto items-center group relative rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface/90 backdrop-blur-md px-6 py-3 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span className="animated-underline font-mono">All Repositories</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </div>

        {/* Staggered Editorial Project Grid */}
        <FadeUpStagger
          stagger={0.1}
          threshold={0.15}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <FadeUpItem
              key={project.id}
              className={`${project.colSpan} col-span-1`}
            >
              {/* Project card with soft lift and high-contrast borders */}
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-pink-soft/40 bg-zinc-950/80 min-h-[420px] sm:min-h-[460px] cursor-pointer flex flex-col justify-end hover-lift-card transition-all duration-500 shadow-2xl"
              >
                {/* Fixed overflow-hidden container with restrained image zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.07] opacity-75 group-hover:opacity-90 will-change-transform"
                    loading="lazy"
                  />
                </div>

                {/* Halftone overlay pattern */}
                <div className="absolute inset-0 halftone-overlay opacity-25 mix-blend-multiply pointer-events-none" />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                {/* Top Pinned Oversized Numeral & GitHub Badge */}
                <div className="absolute top-5 left-6 right-6 z-10 flex items-center justify-between pointer-events-none">
                  <span className="font-condensed font-black text-5xl sm:text-6xl text-white/20 group-hover:text-pink-soft/40 transition-colors select-none">
                    {project.numeral}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white hover:border-pink-soft/60 transition-colors pointer-events-auto shadow-lg"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Static Editorial Card Meta */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-15 sm:group-hover:opacity-0">
                  <div className="text-[11px] uppercase tracking-widest text-pink-soft font-mono mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display italic text-white/95 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 max-w-sm mb-4 font-sans leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 max-w-[80%]">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-sm text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="font-mono text-[10px] px-2 py-1 text-zinc-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="w-8 h-8 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-xs text-white shrink-0 group-hover:border-pink-soft/60 transition-colors">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Desktop Hover Overlay with Spring Slide-Up */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-400 ease-spring hidden sm:flex flex-col items-center justify-center p-8 text-center z-20 pointer-events-none group-hover:pointer-events-auto will-change-transform">
                  {/* "View Architecture" pill button */}
                  <div className="relative rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 mb-5 shadow-2xl">
                    <span className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
                    <div className="relative z-10 rounded-full bg-white px-6 py-2.5 text-black flex items-center gap-2 shadow-xl font-medium text-xs uppercase tracking-wider font-mono">
                      <span>Inspect Project</span>
                      <span className="font-display italic text-sm normal-case">
                        — {project.title}
                      </span>
                      <span>↗</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed px-4 mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap justify-center gap-2 max-w-sm mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/15 bg-white/5 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs text-pink-soft hover:underline font-mono tracking-wide"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>github.com/ikramamjad/{project.id}</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeUpItem>
          ))}
        </FadeUpStagger>
      </div>

      {/* Project Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
            >
              {/* Modal Image Cover */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Details (Scrollable) */}
              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-pink-soft font-mono">
                    {selectedProject.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display italic text-white/95">
                  {selectedProject.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium mb-3">
                    Technologies &amp; Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-full border border-white/15 text-xs text-zinc-400 hover:text-white transition-colors font-mono"
                  >
                    Close
                  </button>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-black hover:opacity-90 transition-opacity font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedWorks;
