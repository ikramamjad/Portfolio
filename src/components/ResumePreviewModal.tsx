import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData, certificationsData, coreStacks } from "../data/portfolioData";

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-3xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-stroke flex items-center justify-between bg-bg/40">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted block mb-1">
                  Curriculum Vitae
                </span>
                <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary">
                  IKRAM AMJAD
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  Computer Engineer | Full-Stack Engineer | Prompt Engineer
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/ikram-amjad-8963b4195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full accent-gradient text-xs font-semibold text-black hover:opacity-90 transition-opacity"
                >
                  <span>LinkedIn Profile</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-surface border border-stroke flex items-center justify-center text-muted hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
              {/* Technical Stacks */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3 pb-2 border-b border-stroke/60">
                  Core Technical Stacks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreStacks.map((st) => (
                    <span
                      key={st.name}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-stroke bg-bg/80 text-text-primary"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: st.color }}
                      />
                      <span className="font-mono font-medium">{st.name}</span>
                      <span className="text-[10px] text-muted">({st.category})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-4 pb-2 border-b border-stroke/60">
                  Professional Experience
                </h4>
                <div className="space-y-6">
                  {timelineData.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-base font-medium text-text-primary">
                          {item.role}{" "}
                          <span className="text-muted font-normal">
                            @ {item.company}
                          </span>
                        </span>
                        <span className="text-xs text-muted/80 tracking-wider">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-stroke bg-bg/80 text-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-4 pb-2 border-b border-stroke/60">
                  Certifications & Foundations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certificationsData.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-stroke bg-bg/40 space-y-1"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-muted block">
                        {cert.badge}
                      </span>
                      <h5 className="text-sm font-medium text-text-primary">
                        {cert.title}
                      </h5>
                      <p className="text-xs text-muted/80">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-stroke bg-bg/60 flex items-center justify-between">
              <span className="text-xs text-muted">
                Based in Islamabad, Pakistan
              </span>
              <a
                href="mailto:ikramamjad10@gmail.com"
                className="text-xs font-semibold uppercase tracking-wider text-text-primary hover:accent-gradient-text"
              >
                ikramamjad10@gmail.com ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
