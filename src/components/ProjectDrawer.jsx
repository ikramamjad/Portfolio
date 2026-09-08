import React, { useEffect } from 'react';
import { 
  X, ExternalLink, Github, Zap, Database, Server, Cpu, 
  CheckCircle2, ArrowRight, ShieldCheck, Activity, BarChart2 
} from 'lucide-react';

export default function ProjectDrawer({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Rich technical architectural case study details mapped to each project
  const deepDiveSpecs = {
    'mantis-ai-engine': {
      bottleneck: "Repetitive LLM prompt evaluations and heavy payload transformations caused CPU spikes, token inflation, and unacceptable 2.4s latency under high concurrency.",
      architecture: "Engineered an asynchronous caching proxy in Node.js and Express. Implemented SHA-256 prompt hashing in Redis to serve identical queries in <35ms, while offloading long-running inference jobs to serverless AWS Lambda workers via Redis BullMQ queues.",
      metrics: [
        { label: "Latency Reduction", value: "98.5%", detail: "From 2,400ms down to 35ms" },
        { label: "Cache Hit Rate", value: "84.2%", detail: "Redis in-memory tier" },
        { label: "Availability", value: "99.95%", detail: "Zero dropped async jobs" }
      ],
      diagram: [
        { stage: "Client Ingestion", tech: "React / REST API", desc: "OpenAPI verified bearer tokens" },
        { stage: "In-Memory Cache", tech: "Redis Hash Store", desc: "Sub-5ms prompt cache hit" },
        { stage: "Async Queue", tech: "BullMQ / Node.js", desc: "Worker thread concurrency" },
        { stage: "Serverless Execution", tech: "AWS Lambda & LLM", desc: "Isolated microservice worker" }
      ]
    },
    'cuboid-fullstack-suite': {
      bottleneck: "Enterprise clients required strict ACID consistency for financial audit trails, while simultaneously logging high-frequency unstructured telemetry without database lock contention.",
      architecture: "Architected a dual-database persistence tier: PostgreSQL handles relational financial records with strict foreign keys and transactional locks, while MongoDB ingests polymorphic activity logs. Built modular React and Angular modules authenticated via cryptographic JWTs and RBAC.",
      metrics: [
        { label: "Query Speed", value: "<45ms", detail: "Optimized indexed joins" },
        { label: "ACID Consistency", value: "100%", detail: "Zero orphaned transactions" },
        { label: "Modular Views", value: "50+", detail: "React & Angular components" }
      ],
      diagram: [
        { stage: "Client Interface", tech: "React & Angular", desc: "Role-based component routing" },
        { stage: "Auth Gateway", tech: "JWT / RBAC Tier", desc: "Zero-trust session validation" },
        { stage: "Relational Engine", tech: "PostgreSQL DB", desc: "ACID transactional schemas" },
        { stage: "Document Engine", tech: "MongoDB Cluster", desc: "Polymorphic event telemetry" }
      ]
    },
    'aws-redis-pipeline': {
      bottleneck: "Direct multipart file uploads to backend application servers exhausted server memory and blocked the event loop, causing heavy degradation during peak upload hours.",
      architecture: "Restructured the file upload pipeline to use AWS S3 pre-signed direct URLs, offloading file bandwidth entirely from backend servers. Integrated Redis pub/sub queues to trigger downstream asynchronous AWS Lambda image and document processing workers.",
      metrics: [
        { label: "DB Read Load", value: "-65%", detail: "Absorbed by Redis memory" },
        { label: "Server Memory", value: "-40%", detail: "Direct S3 presigned transfers" },
        { label: "Queue Throughput", value: "1,200/s", detail: "Redis pub/sub events" }
      ],
      diagram: [
        { stage: "Presigned Dispatch", tech: "AWS S3 Direct", desc: "Zero server memory overhead" },
        { stage: "Event Emission", tech: "S3 Event Bridge", desc: "Triggers backend listener" },
        { stage: "Fast Queue", tech: "Redis Pub/Sub", desc: "Real-time task distribution" },
        { stage: "Worker Execution", tech: "AWS Lambda", desc: "Serverless processing" }
      ]
    },
    'ieee-project-manager-suite': {
      bottleneck: "Managing 500+ simultaneous university event registrations and committee task handoffs caused severe database connection pooling bottlenecks and delayed notifications.",
      architecture: "Built a centralized MERN management dashboard with indexed MongoDB collections, Node.js connection pooling, and automated transactional emails with rate-limiting queues. Spearheaded project roadmap as Project Manager at IEEE COMSATS.",
      metrics: [
        { label: "Registrations", value: "500+", detail: "Zero server degradation" },
        { label: "Task Delivery", value: "100%", detail: "Milestone completion rate" },
        { label: "Uptime", value: "99.9%", detail: "Campus event duration" }
      ],
      diagram: [
        { stage: "Public Portal", tech: "React.js Frontend", desc: "Responsive attendee registration" },
        { stage: "API Server", tech: "Node & Express", desc: "Connection pooling & validation" },
        { stage: "Document Store", tech: "MongoDB Indexing", desc: "Rapid attendee profile lookups" },
        { stage: "Dispatch Engine", tech: "Transactional Queue", desc: "Rate-limited event notifications" }
      ]
    }
  };

  const currentSpec = deepDiveSpecs[project.id] || deepDiveSpecs['mantis-ai-engine'];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl h-full bg-[#0a0c12] border-l border-white/15 flex flex-col shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Top Header Sticky Bar */}
        <div className="sticky top-0 z-30 px-6 py-5 bg-[#0a0c12]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#B4A06E]/15 text-[#B4A06E] border border-[#B4A06E]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/5"
            title="Close Drawer (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Title & Overview */}
          <div>
            <span className="text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-1">
              01 // DEEP DIVE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Verified Metrics Grid */}
          <div className="border border-white/10 bg-[#0e1017] p-4 rounded-xl">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-3 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#B4A06E]" />
              BENCHMARKED PRODUCTION METRICS
            </span>
            <div className="grid grid-cols-3 gap-3 text-center">
              {currentSpec.metrics.map((m, i) => (
                <div key={i} className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <span className="text-xs font-mono text-neutral-500 block mb-0.5">{m.label}</span>
                  <span className="text-xl sm:text-2xl font-mono text-[#B4A06E] font-medium block">{m.value}</span>
                  <span className="text-[10px] text-neutral-400 block mt-0.5">{m.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Technical Bottleneck */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-2 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              02 // THE TECHNICAL BOTTLENECK
            </span>
            <p className="text-sm text-neutral-300 font-light leading-relaxed bg-[#12141d] p-4 border border-white/5 rounded-lg">
              {currentSpec.bottleneck}
            </p>
          </div>

          {/* Architectural Solution */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-2 flex items-center gap-2">
              <Server className="w-3.5 h-3.5" />
              03 // ARCHITECTURAL SOLUTION
            </span>
            <p className="text-sm text-neutral-300 font-light leading-relaxed mb-4">
              {currentSpec.architecture}
            </p>

            {/* Request Pipeline Flow Diagram */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                Component Pipeline:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentSpec.diagram.map((step, idx) => (
                  <div key={idx} className="p-3 bg-[#0e1017] border border-white/10 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-white font-medium">{step.stage}</span>
                      <span className="text-[10px] font-mono text-[#B4A06E]">#{idx + 1}</span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 block mb-1">{step.tech}</span>
                    <span className="text-[10px] text-neutral-500 font-light block">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div className="border-t border-white/10 pt-6">
              <span className="text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                04 // PRODUCTION DELIVERABLES
              </span>
              <ul className="space-y-2 text-xs text-neutral-300 font-light">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-2 rounded bg-white/[0.02]">
                    <span className="text-[#B4A06E] font-mono shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-xs font-mono text-[#B4A06E] tracking-widest uppercase block mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              05 // SYSTEM TECHNOLOGIES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Drawer Bottom Actions */}
        <div className="sticky bottom-0 p-6 bg-[#0a0c12]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/ikram-amjad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-[#B4A06E] hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository ↗</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Verified Credentials ↗</span>
          </a>
        </div>

      </div>
    </div>
  );
}
