import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles, Layers } from "lucide-react";

interface Project {
  id: string;
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
    <section id="work" className="bg-bg py-16 md:py-24 border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading: "Featured projects" */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-text-primary font-normal tracking-tight">
              Featured{" "}
              <span className="font-display italic font-normal">projects</span>
            </h2>

            <p className="text-sm md:text-base text-muted mt-3 max-w-xl leading-relaxed">
              Open-source computer vision systems, interactive Next.js 3D platforms,
              and high-concurrency Node.js REST &amp; FinTech backends.
            </p>
          </div>

          {/* GitHub Repositories Link */}
          <a
            href="https://github.com/ikramamjad?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start md:self-auto items-center group relative rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span>All Repositories</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </motion.div>

        {/* Bento Grid: 5 Projects layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setSelectedProject(project)}
              className={`${project.colSpan} col-span-1 group relative rounded-3xl overflow-hidden border border-stroke bg-surface min-h-[380px] sm:min-h-[420px] cursor-pointer flex flex-col justify-end transition-all duration-300 hover:border-stroke/90 hover:shadow-2xl`}
            >
              {/* Background image with object-cover group-hover:scale-105 */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
                loading="lazy"
              />

              {/* Halftone overlay pattern */}
              <div className="absolute inset-0 halftone-overlay opacity-25 mix-blend-multiply pointer-events-none" />

              {/* Bottom gradient baseline overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Top GitHub Badge */}
              <div className="absolute top-4 right-4 z-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-muted hover:text-white transition-colors"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              {/* Static Card Meta (Visible on mobile & desktop by default) */}
              <div className="relative z-10 p-5 sm:p-7 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-10 sm:group-hover:opacity-0">
                <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-mono mb-1">
                  {project.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-display italic text-text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted/90 line-clamp-2 max-w-sm mb-3">
                  {project.subtitle}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-stroke/80 bg-black/50 backdrop-blur-sm text-text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-muted">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="w-8 h-8 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-xs text-white shrink-0">
                    ↗
                  </span>
                </div>
              </div>

              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 hidden sm:flex flex-col items-center justify-center p-6 text-center z-20">
                {/* Hover label pill */}
                <div className="relative rounded-full p-[2px] transition-transform duration-300 hover:scale-105 mb-4">
                  <span className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
                  <div className="relative z-10 rounded-full bg-white px-6 py-2.5 text-black flex items-center gap-2 shadow-xl font-medium text-xs uppercase tracking-wider">
                    <span>Inspect Project</span>
                    <span className="font-display italic text-sm normal-case">
                      — {project.title}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-primary/80 max-w-md leading-relaxed px-4 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-1.5 max-w-sm">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-stroke bg-surface/80 text-text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/ikramamjad/{project.id}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
            >
              {/* Modal Image Cover */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-stroke flex items-center justify-center text-muted hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Details (Scrollable) */}
              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-text-primary/70">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary">
                  {selectedProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted font-medium mb-2">
                    Technologies &amp; Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-stroke bg-bg text-text-primary/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-stroke/60">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-full border border-stroke text-xs text-muted hover:text-text-primary transition-colors"
                  >
                    Close
                  </button>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-black hover:opacity-90 transition-opacity"
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
