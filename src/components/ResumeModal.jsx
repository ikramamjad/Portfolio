import React, { useState } from 'react';
import { X, Printer, Download, Check, Sparkles, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { personalInfo, timelineData, skillsData, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [roleFocus, setRoleFocus] = useState('fullstack'); // 'fullstack' | 'backend' | 'cloud_ai'

  if (!isOpen) return null;

  const summaries = {
    fullstack: "Computer Engineer and Full-Stack Developer with production experience architecting end-to-end web applications and high-throughput microservices. Currently engineering full-stack platforms at Cuboid Incorporation (React, Angular, Node.js, PostgreSQL) and backend systems with Redis caching at WebMantis. Proficient in delivering responsive user interfaces, robust RESTful APIs, and scalable database tiers.",
    backend: "Backend Developer and Computer Engineer specializing in high-concurrency Node.js microservices, in-memory Redis caching and queues, and multi-database architectures (PostgreSQL & MongoDB). Proven record at WebMantis developing prompt engineering workflows and sub-second caching pipelines, complemented by enterprise full-stack development at Cuboid Incorporation.",
    cloud_ai: "Full-Stack Developer with certified foundations in AWS Cloud and Oracle AI. Hands-on experience architecting serverless cloud workflows utilizing AWS S3 and Lambda, Redis pub/sub queues, and advanced prompt engineering pipelines. B.S. in Electrical & Computer Engineering from COMSATS Institute of Information Technology."
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-white/15 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar (Hidden in Print) */}
        <div className="print:hidden px-6 py-4 bg-[#11131a] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#B4A06E]/15 border border-[#B4A06E]/30 text-[#B4A06E]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-medium text-white">Targeted Resume Generator</h3>
              <p className="text-[11px] font-mono text-neutral-400">Tailor Ikram's resume to your hiring focus</p>
            </div>
          </div>

          {/* Role Filter Chips */}
          <div className="flex items-center gap-1.5 bg-[#080808] p-1 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => setRoleFocus('fullstack')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                roleFocus === 'fullstack' ? 'bg-[#B4A06E] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setRoleFocus('backend')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                roleFocus === 'backend' ? 'bg-[#B4A06E] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Backend Focus
            </button>
            <button
              onClick={() => setRoleFocus('cloud_ai')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                roleFocus === 'cloud_ai' ? 'bg-[#B4A06E] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cloud &amp; AI
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#B4A06E] hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded-lg flex items-center gap-1.5 transition-colors shadow-md"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 bg-white text-slate-900 font-sans leading-relaxed selection:bg-neutral-200">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 uppercase">
                IKRAM AMJAD
              </h1>
              <p className="text-base font-semibold text-slate-700 tracking-wide mt-0.5">
                {roleFocus === 'fullstack' ? 'Full-Stack Developer' : roleFocus === 'backend' ? 'Full-Stack & Backend Systems Developer' : 'Full-Stack Developer • Cloud & AI Systems'}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-600 text-left sm:text-right space-y-0.5">
              <div>Islamabad, Pakistan</div>
              <div>ikramamjad10@gmail.com</div>
              <div>github.com/ikram-amjad</div>
              <div>linkedin.com/in/ikram-amjad-8963b4195</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2">
              EXECUTIVE PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              {summaries[roleFocus]}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
              <div><strong className="font-semibold text-slate-900">Languages &amp; Runtimes:</strong> JavaScript (ES6+), Node.js (v22), PHP, HTML5/CSS3</div>
              <div><strong className="font-semibold text-slate-900">Frontend Frameworks:</strong> React.js, Angular.js, Tailwind CSS, Three.js</div>
              <div><strong className="font-semibold text-slate-900">Backend &amp; APIs:</strong> Express.js, Laravel, RESTful APIs, JWT, Postman</div>
              <div><strong className="font-semibold text-slate-900">Databases &amp; Caching:</strong> PostgreSQL (ACID), MongoDB, MySQL, Redis</div>
              <div><strong className="font-semibold text-slate-900">Cloud &amp; DevOps:</strong> AWS (S3, Lambda), Git/GitHub CI/CD, Microservices</div>
              <div><strong className="font-semibold text-slate-900">AI &amp; Foundations:</strong> Prompt Engineering, LLM Orchestration, AWS &amp; Oracle AI</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-3">
              PROFESSIONAL APPOINTMENTS
            </h2>
            
            <div className="space-y-4">
              {/* Cuboid */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">Full Stack Engineer</h3>
                  <span className="text-xs font-mono text-slate-600">Dec 2025 — Present</span>
                </div>
                <div className="text-xs font-medium text-slate-700 italic mb-1">
                  Cuboid Incorporation — Abbottabad District, Pakistan
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                  <li>Architecting end-to-end web applications integrating modular React.js and Angular.js frontends with robust Node.js and Express REST services.</li>
                  <li>Designing high-performance PostgreSQL relational schemas and MongoDB collections for transactional reliability and rapid payload retrieval.</li>
                  <li>Implementing secure user authentication with cryptographic JSON Web Tokens (JWT) and Role-Based Access Control (RBAC).</li>
                </ul>
              </div>

              {/* WebMantis */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">Back End Developer</h3>
                  <span className="text-xs font-mono text-slate-600">Aug 2024 — Present</span>
                </div>
                <div className="text-xs font-medium text-slate-700 italic mb-1">
                  WebMantis — Islamabad, Pakistan
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                  <li>Engineering scalable server-side microservices with Node.js, Express, and Redis in-memory caching tiers to reduce latency under peak concurrency.</li>
                  <li>Constructing AI prompt engineering pipelines for dynamic LLM workflows with fallback safeguards and token optimization.</li>
                  <li>Integrating AWS S3 and serverless Lambda functions for asynchronous file and asset transformations.</li>
                </ul>
              </div>

              {/* FULMEN */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">Site Engineer</h3>
                  <span className="text-xs font-mono text-slate-600">Mar 2023 — Aug 2025</span>
                </div>
                <div className="text-xs font-medium text-slate-700 italic mb-1">
                  Fulmen Engineering (Pvt) Ltd — Pakistan
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                  <li>Supervised rigorous technical operations, quality assurance, and on-site engineering system verifications.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Leadership */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="text-xs text-slate-800">
                <div className="font-bold text-slate-900">B.S. Electrical &amp; Computer Engineering</div>
                <div className="text-slate-600">COMSATS Institute of Information Technology</div>
                <div className="text-slate-500 font-mono text-[11px] mt-0.5">Jan 2020 — Jul 2024 • Abbottabad, PK</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2">
                LEADERSHIP &amp; HONORS
              </h2>
              <div className="text-xs text-slate-800">
                <div className="font-bold text-slate-900">Project Manager — IEEE COMSATS</div>
                <div className="text-slate-600">Led engineering project squads and university technical events</div>
                <div className="text-slate-500 font-mono text-[11px] mt-0.5">Awarded recognition for excellence in student leadership</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-2">
              VERIFIED CERTIFICATIONS
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-800">
              <div>• <strong>AWS:</strong> Machine Learning &amp; Cloud Foundations</div>
              <div>• <strong>Oracle:</strong> AI &amp; Cloud Enterprise Foundations</div>
              <div>• <strong>AI:</strong> Prompt Engineering Foundations</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
