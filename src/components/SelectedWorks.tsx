import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    id: "webmantis-ai-engine",
    title: "WebMantis AI & Backend Engine",
    subtitle: "High-Throughput Node.js, Express & Prompt Pipeline",
    category: "Backend & Generative AI",
    colSpan: "md:col-span-7",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    description:
      "High-throughput server-side architecture powering dynamic AI prompt engineering pipelines, sub-second telemetry caching, and automated agent workflows.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "Prompt Engineer", "AWS Lambda"],
    link: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
  },
  {
    id: "cuboid-fullstack-suite",
    title: "Cuboid Full-Stack Enterprise Platform",
    subtitle: "Dual Database PostgreSQL & MongoDB Architecture",
    category: "Full-Stack Engineering",
    colSpan: "md:col-span-5",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description:
      "Enterprise full-stack suite coupling dual database connectivity (PostgreSQL & MongoDB) with reactive Next.js, React & Angular components.",
    tags: ["React.js", "Next.js", "Angular.js", "PostgreSQL", "MongoDB", "Node.js"],
    link: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
  },
  {
    id: "cloudflow-microservices",
    title: "CloudFlow Distributed Architecture",
    subtitle: "AWS Serverless, MySQL & Redis Cloud Infrastructure",
    category: "Cloud & Distributed Systems",
    colSpan: "md:col-span-5",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    description:
      "Event-driven distributed microservice pipeline combining AWS S3, serverless Lambda executions, MySQL & PostgreSQL relational stores, and Redis queues.",
    tags: ["Node.js", "Express.js", "MySQL", "PostgreSQL", "AWS Lambda", "Redis"],
    link: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
  },
  {
    id: "ieee-management-suite",
    title: "IEEE Command Center & Portal",
    subtitle: "Full-Stack MERN & Laravel Management Suite",
    category: "Full-Stack & Systems Architecture",
    colSpan: "md:col-span-7",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Centralized full-stack project portal orchestrating engineering deliverables, participant dispatch, and automated communications via MERN and Laravel backends.",
    tags: ["MERN", "React.js", "Express.js", "MongoDB", "PHP", "Laravel"],
    link: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
  },
];

export const SelectedWorks: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header: Framer Motion whileInView — opacity 0->1, y 30->0, duration 1s, ease [0.25,0.1,0.25,1], viewport once margin "-100px" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow: w-8 h-px bg-stroke + "Selected Work" text-xs text-muted uppercase tracking-[0.3em] */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading: "Featured projects" — italic word in font-display italic */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-text-primary font-normal tracking-tight">
              Featured{" "}
              <span className="font-display italic font-normal">projects</span>
            </h2>

            <p className="text-sm md:text-base text-muted mt-3 max-w-lg">
              Production architectures, high-performance web platforms, and scalable backend services built with modern stacks.
            </p>
          </div>

          {/* "View all work" button (desktop only, hidden md:inline-flex) — rounded-full with gradient hover border ring + right arrow */}
          <a
            href="https://github.com/ikramamjad"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center group relative rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-xs uppercase tracking-widest text-text-primary group-hover:border-transparent transition-colors">
              <span>View all work</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </motion.div>

        {/* Bento Grid: grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6. Column spans alternate: 7/5/5/7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setSelectedProject(project)}
              className={`${project.colSpan} col-span-1 group relative rounded-3xl overflow-hidden border border-stroke bg-surface aspect-[16/11] md:aspect-auto md:min-h-[420px] cursor-pointer`}
            >
              {/* Background image with object-cover group-hover:scale-105 */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
                loading="lazy"
              />

              {/* Halftone overlay: radial-gradient(circle, #000 1px, transparent 1px) at 4x4px, opacity-20 mix-blend-multiply */}
              <div className="absolute inset-0 halftone-overlay opacity-30 mix-blend-multiply pointer-events-none" />

              {/* Bottom gradient baseline overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Static Card Meta (Visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display italic text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mt-1 max-w-xs">
                    {project.subtitle}
                  </p>
                </div>
                <span className="w-9 h-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-xs text-white">
                  ↗
                </span>
              </div>

              {/* Hover: bg-bg/70 opacity-0->1 + backdrop-blur-lg */}
              <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                {/* Hover label: pill with animated gradient border, white bg, "View — Title" (title in font-display italic) */}
                <div className="relative rounded-full p-[2px] transition-transform duration-300 hover:scale-105">
                  <span className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
                  <div className="relative z-10 rounded-full bg-white px-6 py-2.5 text-black flex items-center gap-1.5 shadow-xl font-medium text-sm">
                    <span>View — </span>
                    <span className="font-display italic font-normal text-base">
                      {project.title}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-text-primary/75 max-w-sm leading-relaxed px-4">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-xs">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-stroke bg-surface/60 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-stroke flex items-center justify-center text-muted hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-text-primary/70">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl font-display italic text-text-primary">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-stroke bg-bg text-text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-black hover:opacity-90 transition-opacity"
                  >
                    <span>Connect & Details</span>
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
