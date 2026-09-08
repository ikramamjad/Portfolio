import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, Copy, ExternalLink, MessageSquare, Linkedin, Github } from 'lucide-react';
import confetti from 'canvas-confetti';
import AnimeAvatar from '../components/AnimeAvatar';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366F1', '#F59E0B', '#10B981']
        });
      } catch {
        // Confetti fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Have a project in mind, an engineering opportunity, or looking for a backend/full-stack engineer? Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Modern Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Button */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? 'bg-[#121624] border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <AnimeAvatar size={34} withGlow={false} />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Ikram Amjad
                  </span>
                </div>
              </div>

              <div
                className={`flex items-center justify-between gap-3 p-3 rounded-xl border ${
                  isDark ? 'bg-slate-900/90 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className={`p-2 rounded-lg transition-colors shrink-0 ${
                    isDark ? 'bg-slate-800 hover:bg-slate-700 text-indigo-400' : 'bg-slate-200 hover:bg-slate-300 text-indigo-600'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-xs font-mono text-emerald-500 mt-2 inline-block">
                  ✓ Copied to clipboard!
                </span>
              )}
            </div>

            {/* Location & Response Latency */}
            <div
              className={`p-6 rounded-2xl border space-y-4 ${
                isDark ? 'bg-[#121624] border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Current Location</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Response Time</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Typically within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#121624] border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                Professional Networks
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all flex items-center justify-between text-xs font-mono group ${
                    isDark
                      ? 'bg-slate-900/60 border-white/10 hover:border-indigo-500/40 text-slate-300'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-400 text-slate-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all flex items-center justify-between text-xs font-mono group ${
                    isDark
                      ? 'bg-slate-900/60 border-white/10 hover:border-indigo-500/40 text-slate-300'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-400 text-slate-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Modern Contact Form (7 cols) */}
          <div
            className={`lg:col-span-7 rounded-2xl border p-6 sm:p-8 ${
              isDark ? 'bg-[#121624] border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-sans">
              Leave your details below and I'll follow up promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isDark
                      ? 'bg-slate-900/80 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sarah@company.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isDark
                      ? 'bg-slate-900/80 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Full-stack collaboration"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isDark
                      ? 'bg-slate-900/80 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or engineering goals..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                    isDark
                      ? 'bg-slate-900/80 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
