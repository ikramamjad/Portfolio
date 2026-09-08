import React, { useState } from 'react';
import SwissCanvas from './components/canvas/SwissCanvas';
import Avatar3D from './components/canvas/Avatar3D';
import AITwinModal from './components/AITwinModal';
import ProjectDrawer from './components/ProjectDrawer';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import ResumeModal from './components/ResumeModal';
import { Sparkles, Bot, FileText, Layers, ArrowUpRight, Mail, Check, Copy, Send, AlertCircle } from 'lucide-react';
import { personalInfo, timelineData, projectsData } from './data/portfolioData';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'needs_activation' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const [isAITwinOpen, setIsAITwinOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd578807a-c27a-4666-b51c-78612c562f43',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: `${formData.name} (Portfolio Visitor)`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('TRANSMISSION DISPATCHED: Your inquiry has been delivered directly to Ikram Amjad.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 6000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Transmission error:', err);
      setSubmitStatus('error');
      setStatusMessage('Transmission failed. Please check your connection or contact ikramamjad10@gmail.com directly.');
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const githubUrl = "https://github.com/ikram-amjad";

  return (
    <div className="relative bg-[#080808] text-white min-h-screen selection:bg-[#B4A06E] selection:text-black font-sans">
      {/* Three.js 3D Background Canvas */}
      <SwissCanvas />

      {/* Vertical Baseline Column Guides */}
      <div className="grid-column-guide left-[12%]"></div>
      <div className="grid-column-guide left-[34%]"></div>
      <div className="grid-column-guide left-[58%]"></div>
      <div className="grid-column-guide left-[88%]"></div>

      {/* Fixed Minimalist Header */}
      <header className="fixed top-0 left-0 w-full z-20 px-8 md:px-14 py-6 flex justify-between items-center text-[11px] uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-md bg-[#080808]/80 border-b border-white/[0.04]">
        <a href="#hero" className="font-mono text-white tracking-widest hover:text-[#B4A06E] transition-colors">
          / IKRAM AMJAD /
        </a>
        <nav className="hidden lg:flex gap-8 text-[11px]">
          <a href="#work" className="hover:text-white transition-colors duration-200">Selected Work</a>
          <a href="#architecture" className="hover:text-white transition-colors duration-200">Architecture Lab</a>
          <a href="#matrix" className="hover:text-white transition-colors duration-200">Capability Index</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-[11px] tracking-wider hover:border-[#B4A06E] hover:text-white transition-all"
          >
            <FileText className="w-3 h-3 text-[#B4A06E]" />
            <span>RESUME</span>
          </button>
          <button
            onClick={() => setIsAITwinOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4A06E]/15 border border-[#B4A06E]/40 text-[#B4A06E] font-mono text-[11px] tracking-wider hover:bg-[#B4A06E] hover:text-black transition-all font-semibold"
          >
            <Sparkles className="w-3 h-3 animate-spin-slow" />
            <span>AI TWIN 🪄</span>
          </button>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline font-mono text-xs text-neutral-300 hover:text-[#B4A06E] transition-colors tracking-widest"
          >
            GITHUB ↗
          </a>
        </div>
      </header>

      {/* Hero Section / First Page */}
      <section id="hero" className="relative z-10 min-h-screen w-full flex flex-col justify-center px-8 md:px-14 pt-32 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Aligned Name & 3D Interactive Avatar Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/[0.06]">
            <div>
              {/* Top Category Indicator */}
              <div className="text-xs uppercase tracking-[0.25em] text-[#B4A06E] font-mono mb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#B4A06E] animate-pulse"></span>
                <span>Full-Stack Developer</span>
              </div>

              {/* User Name */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-none">
                IKRAM <span className="text-[#B4A06E] font-normal">AMJAD</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-lg md:text-2xl font-mono text-neutral-300 font-light tracking-tight mt-4">
                Computer Engineer • Full-Stack Developer
              </h2>
            </div>

            {/* 3D Interactive Avatar aligned with Name (cursor tracking, speech reactive) */}
            <div
              onClick={() => setIsAITwinOpen(true)}
              className="group cursor-pointer flex flex-col items-center shrink-0 self-center md:self-end transition-transform hover:scale-105"
              title="Click to talk with Ikram's AI Twin"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <Avatar3D isSpeaking={isSpeaking} />
              </div>
              <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11131a] border border-[#B4A06E]/30 group-hover:border-[#B4A06E] text-[11px] font-mono text-[#B4A06E] shadow-md transition-colors">
                <Sparkles className="w-3 h-3 animate-spin-slow" />
                <span>{isSpeaking ? "Speaking with you..." : "Talk to my AI Twin 🪄"}</span>
              </div>
            </div>
          </div>

          {/* Editorial Introduction: "About Me" directly on First Page */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Narrative Bio */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                I am a <span className="text-white font-medium">Computer Engineer</span> and <span className="text-white font-medium">Full-Stack Developer</span> with hands-on experience building scalable, efficient, and responsive web applications and server-side microservices.
              </p>
              
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Currently working across two active engineering appointments: architecting end-to-end full-stack applications with React, Angular, Node.js, and PostgreSQL at <span className="text-white font-normal">Cuboid Incorporation</span>, and developing robust backend systems, Redis caching tiers, and prompt engineering pipelines at <span className="text-white font-normal">WebMantis</span>.
              </p>

              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Graduated with an Electrical &amp; Computer Engineering degree from <span className="text-white font-normal">COMSATS Institute of Information Technology Abbottabad</span>. Former Project Manager at <span className="text-white font-normal">IEEE COMSATS</span>, holding foundational certifications in AI and Machine Learning from AWS and Oracle.
              </p>

              {/* Action Buttons with AI Twin, Architecture & Resume */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={() => setIsAITwinOpen(true)}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#B4A06E] to-[#cfbe94] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#B4A06E]/20 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  <span>Talk to My AI Twin 🪄</span>
                </button>

                <a
                  href="#work"
                  className="px-5 py-3.5 bg-white/[0.04] border border-white/10 hover:border-white text-white font-mono text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
                >
                  Selected Work ↗
                </a>

                <a
                  href="#architecture"
                  className="px-5 py-3.5 bg-white/[0.04] border border-white/10 hover:border-[#B4A06E] hover:text-[#B4A06E] text-neutral-200 font-mono text-xs uppercase tracking-widest font-semibold transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-[#B4A06E]" />
                  <span>Architecture Lab ↗</span>
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="px-5 py-3.5 border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B4A06E]" />
                  <span>Targeted Resume ↗</span>
                </button>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-[#B4A06E] text-[#B4A06E] font-mono text-xs uppercase tracking-widest hover:bg-[#B4A06E] hover:text-black transition-colors duration-200 flex items-center gap-1.5"
                >
                  GitHub Profile ↗
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-neutral-800 text-neutral-300 font-mono text-xs uppercase tracking-widest hover:border-white hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>

            {/* Right Column: Quick Credentials & Status */}
            <div className="lg:col-span-4 space-y-4 pt-1">
              <div className="border-t border-neutral-800 pt-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">ACADEMIC DEGREE</span>
                <span className="text-sm font-light text-neutral-200">Electrical &amp; Computer Eng — COMSATS</span>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">ACTIVE APPOINTMENTS</span>
                <span className="text-sm font-light text-neutral-200">Cuboid Inc &amp; WebMantis</span>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">CORE SPECIALIZATION</span>
                <span className="text-sm font-light text-neutral-200">React • Node.js • PostgreSQL • Redis • AWS</span>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">BASE LOCATION</span>
                <span className="text-sm font-light text-[#B4A06E]">Islamabad, Pakistan</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 01 // Selected Work Section (Project Archive with Deep-Dive Drawers) */}
      <section id="work" className="relative z-10 min-h-screen px-8 md:px-14 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B4A06E] font-mono">01 // Selected Work</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mt-2">MY WORK &amp; PROJECTS</h2>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1">
              <p className="text-sm text-neutral-400 max-w-xs font-light">
                Click any project for deep-dive technical architecture, bottlenecks, and benchmarks.
              </p>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#B4A06E] hover:underline"
              >
                View All on GitHub ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={project.id || idx}
                onClick={() => setSelectedProject(project)}
                className="glass-card p-8 flex flex-col justify-between rounded-none group hover:border-[#B4A06E]/80 transition-all duration-300 min-h-[420px] cursor-pointer relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-neutral-500">#{String(idx + 1).padStart(3, '0')}</span>
                    <span className="text-xs uppercase tracking-widest text-[#B4A06E] font-mono">{project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light mb-3 text-white group-hover:text-[#B4A06E] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#B4A06E] transition-colors shrink-0" />
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4">
                    {project.longDescription || project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-6 text-xs text-neutral-400 font-light">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#B4A06E] font-mono">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex justify-between items-center text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-[#B4A06E] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Case Study</span> ↗
                    </button>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <span className="text-neutral-500">{project.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 // Architecture Lab (Interactive Request Visualizer) */}
      <ArchitectureVisualizer />

      {/* 03 // Technical Matrix Section & Live API Explorer */}
      <section id="matrix" className="relative z-10 px-8 md:px-14 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B4A06E] font-mono">03 // Technical Index</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mt-2">CAPABILITY MATRIX</h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs mt-4 md:mt-0 font-light">
              Systematic inventory of client runtimes, backend frameworks, database systems, and AI tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border-t border-neutral-800 pt-6">
              <span className="text-xs font-mono text-[#B4A06E] block mb-3">01 / FULL-STACK &amp; FRONTEND</span>
              <ul className="space-y-2 text-sm text-neutral-300 font-light">
                <li className="flex justify-between"><span>React.js</span> <span className="font-mono text-xs text-neutral-600">SPA / Hooks</span></li>
                <li className="flex justify-between"><span>Angular.js</span> <span className="font-mono text-xs text-neutral-600">Framework</span></li>
                <li className="flex justify-between"><span>JavaScript (ES6+)</span> <span className="font-mono text-xs text-neutral-600">Async/Await</span></li>
                <li className="flex justify-between"><span>Tailwind CSS</span> <span className="font-mono text-xs text-neutral-600">Utility</span></li>
                <li className="flex justify-between"><span>Three.js / WebGL</span> <span className="font-mono text-xs text-neutral-600">Interactive 3D</span></li>
              </ul>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <span className="text-xs font-mono text-[#B4A06E] block mb-3">02 / BACKEND &amp; APIS</span>
              <ul className="space-y-2 text-sm text-neutral-300 font-light">
                <li className="flex justify-between"><span>Node.js</span> <span className="font-mono text-xs text-neutral-600">v22 Core</span></li>
                <li className="flex justify-between"><span>Express.js</span> <span className="font-mono text-xs text-neutral-600">REST API</span></li>
                <li className="flex justify-between"><span>PHP &amp; Laravel</span> <span className="font-mono text-xs text-neutral-600">MVC Architecture</span></li>
                <li className="flex justify-between"><span>RESTful Services</span> <span className="font-mono text-xs text-neutral-600">Postman</span></li>
                <li className="flex justify-between"><span>JWT &amp; RBAC</span> <span className="font-mono text-xs text-neutral-600">Auth Tier</span></li>
              </ul>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <span className="text-xs font-mono text-[#B4A06E] block mb-3">03 / DATABASE &amp; CACHING</span>
              <ul className="space-y-2 text-sm text-neutral-300 font-light">
                <li className="flex justify-between"><span>MongoDB</span> <span className="font-mono text-xs text-neutral-600">MERN Stack</span></li>
                <li className="flex justify-between"><span>PostgreSQL</span> <span className="font-mono text-xs text-neutral-600">Relational SQL</span></li>
                <li className="flex justify-between"><span>MySQL</span> <span className="font-mono text-xs text-neutral-600">RDBMS</span></li>
                <li className="flex justify-between"><span>Redis</span> <span className="font-mono text-xs text-neutral-600">Queues &amp; Caching</span></li>
              </ul>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <span className="text-xs font-mono text-[#B4A06E] block mb-3">04 / CLOUD, AI &amp; TOOLS</span>
              <ul className="space-y-2 text-sm text-neutral-300 font-light">
                <li className="flex justify-between"><span>AWS (S3, Lambda)</span> <span className="font-mono text-xs text-neutral-600">Serverless</span></li>
                <li className="flex justify-between"><span>Prompt Engineering</span> <span className="font-mono text-xs text-neutral-600">LLM Workflows</span></li>
                <li className="flex justify-between"><span>AWS &amp; Oracle AI</span> <span className="font-mono text-xs text-neutral-600">Certified</span></li>
                <li className="flex justify-between"><span>Git &amp; GitHub</span> <span className="font-mono text-xs text-neutral-600">CI/CD</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04 // Experience Section */}
      <section id="experience" className="relative z-10 px-8 md:px-14 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B4A06E] font-mono">04 // Experience</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mt-2">TRAJECTORY</h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs mt-4 md:mt-0 font-light">
              Chronological track record of engineering appointments and leadership tenures.
            </p>
          </div>

          <div className="divide-y divide-neutral-800/80">
            {timelineData.map((item, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-white/[0.01] transition-colors">
                <div className="md:col-span-3 text-xs font-mono text-neutral-500">
                  {item.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-light text-white group-hover:text-[#B4A06E] transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400 block mt-1">
                    {item.company} {item.location ? `— ${item.location}` : ''}
                  </span>
                </div>
                <div className="md:col-span-5 text-xs text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 // Contact Section */}
      <section id="contact" className="relative z-10 px-8 md:px-14 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B4A06E] font-mono">05 // Contact</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mt-2">INITIATE DIALOGUE</h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs mt-4 md:mt-0 font-light">
              Available for full-stack web applications, scalable backend microservices, and technical collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">GITHUB PROFILE</span>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-light text-white hover:text-[#B4A06E] transition-colors font-mono block"
                >
                  github.com/ikram-amjad ↗
                </a>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">ELECTRONIC MAIL</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg md:text-xl font-light text-white hover:text-[#B4A06E] transition-colors font-mono"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors text-xs font-mono flex items-center gap-1"
                    title="Copy Email Address"
                  >
                    {emailCopied ? <Check className="w-3.5 h-3.5 text-[#B4A06E]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">VERIFIED NETWORK</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-neutral-400 hover:text-white transition-colors block"
                >
                  linkedin.com/in/ikram-amjad-8963b4195 ↗
                </a>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">LOCATION BASE</span>
                <span className="text-sm text-neutral-300 font-light">Islamabad, Pakistan</span>
              </div>
            </div>

            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#131313] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B4A06E] font-mono"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#131313] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B4A06E] font-mono"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">MESSAGE</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#131313] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B4A06E] font-mono resize-none"
                    placeholder="Project requirements or collaboration scope..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 bg-[#B4A06E] text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                        <span>TRANSMITTING QUERY...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>DISPATCH INQUIRY ↗</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Clean Status Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300 flex items-start gap-2.5 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-950/30 border border-red-500/40 rounded-xl text-xs font-mono text-red-300 flex items-start gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 md:px-14 py-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-neutral-600 gap-4">
        <div>COORDINATES: 33.6844° N, 73.0479° E (ISLAMABAD)</div>
        <div className="flex items-center gap-6">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">EMAIL</a>
        </div>
        <div className="text-neutral-400">© 2026 IKRAM AMJAD — FULL-STACK DEVELOPER</div>
      </footer>

      {/* Floating AI Twin Launcher Button */}
      <button
        onClick={() => setIsAITwinOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-[#11131a]/95 hover:bg-[#181a24] border border-[#B4A06E]/50 hover:border-[#B4A06E] text-white rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md group transition-all duration-300 hover:scale-105 active:scale-95"
        title="Talk with Ikram's AI Twin"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#B4A06E]/20 text-[#B4A06E] border border-[#B4A06E]/40">
          <Bot className="w-4 h-4" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#B4A06E] animate-ping" />
        </div>
        <div className="text-left font-mono pr-1">
          <span className="block text-xs font-semibold text-white group-hover:text-[#B4A06E] transition-colors">AI Twin</span>
          <span className="block text-[10px] text-neutral-400">Voice &amp; Text Chat</span>
        </div>
      </button>

      {/* AI Twin Conversational Modal */}
      <AITwinModal
        isOpen={isAITwinOpen}
        onClose={() => setIsAITwinOpen(false)}
        onSpeakingChange={setIsSpeaking}
      />

      {/* Deep-Dive Project Case Study Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Targeted Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
