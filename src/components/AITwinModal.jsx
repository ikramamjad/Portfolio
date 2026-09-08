import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Send, Mic, MicOff, Volume2, VolumeX, Settings2, Sparkles, 
  RotateCcw, Globe, Check, ExternalLink, ChevronDown, Bot,
  PhoneCall, PhoneOff, FileText, Radio
} from 'lucide-react';
import { 
  aiTwinService, SUPPORTED_LANGUAGES, INITIAL_GREETINGS, QUICK_QUESTIONS 
} from '../services/aiTwinService';
import { speechService } from '../services/speechService';
import { personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

export default function AITwinModal({ isOpen, onClose, onSpeakingChange }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedLang, setSelectedLang] = useState('en-US');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Advanced Voice Call Mode state
  const [isCallMode, setIsCallMode] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const callTimerRef = useRef(null);

  // Initialize messages with greeting in chosen language
  useEffect(() => {
    const savedLang = localStorage.getItem('ai_twin_lang') || 'en-US';
    const savedVoice = localStorage.getItem('ai_twin_voice') !== 'false';
    const savedRate = parseFloat(localStorage.getItem('ai_twin_rate') || '1.0');
    const savedKey = localStorage.getItem('ai_twin_api_key') || '';

    setSelectedLang(savedLang);
    setVoiceEnabled(savedVoice);
    setSpeechRate(savedRate);
    setApiKey(savedKey);

    setMessages([
      {
        id: 'init-1',
        sender: 'ai',
        text: INITIAL_GREETINGS[savedLang] || INITIAL_GREETINGS['en-US'],
        timestamp: new Date()
      }
    ]);
  }, []);

  // Call Duration Timer
  useEffect(() => {
    if (isCallMode) {
      setCallDuration(0);
      callTimerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    }
    return () => {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    };
  }, [isCallMode]);

  const formatCallTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Update greeting when language changes
  const handleLanguageChange = (langCode) => {
    setSelectedLang(langCode);
    localStorage.setItem('ai_twin_lang', langCode);
    
    speechService.stop();
    setIsSpeaking(false);
    if (onSpeakingChange) onSpeakingChange(false);

    const newGreeting = INITIAL_GREETINGS[langCode] || INITIAL_GREETINGS['en-US'];
    setMessages(prev => [
      ...prev,
      {
        id: `lang-change-${Date.now()}`,
        sender: 'ai',
        text: newGreeting,
        timestamp: new Date()
      }
    ]);

    if (voiceEnabled) {
      speakText(newGreeting, langCode);
    }
  };

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      speechService.stop();
      speechService.stopListening();
      setIsSpeaking(false);
      setIsListening(false);
      setIsCallMode(false);
      if (onSpeakingChange) onSpeakingChange(false);
    }
  }, [isOpen, onSpeakingChange]);

  // Speech helper
  const speakText = (text, lang = selectedLang) => {
    if (!voiceEnabled) return;

    speechService.speak({
      text,
      lang,
      rate: speechRate,
      onStart: () => {
        setIsSpeaking(true);
        if (onSpeakingChange) onSpeakingChange(true);
      },
      onEnd: () => {
        setIsSpeaking(false);
        if (onSpeakingChange) onSpeakingChange(false);
      },
      onError: () => {
        setIsSpeaking(false);
        if (onSpeakingChange) onSpeakingChange(false);
      }
    });
  };

  const handleStopSpeaking = () => {
    speechService.stop();
    setIsSpeaking(false);
    if (onSpeakingChange) onSpeakingChange(false);
  };

  // Submit User Message
  const handleSendMessage = async (queryText) => {
    const text = queryText || inputText;
    if (!text.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await aiTwinService.generateResponse(text, selectedLang, apiKey);

      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: 'ai',
            text: response,
            timestamp: new Date()
          }
        ]);

        if (voiceEnabled) {
          speakText(response, selectedLang);
        }
      }, 350);
    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: "I experienced an error generating the response. Please ask again!",
          timestamp: new Date()
        }
      ]);
    }
  };

  // Speech-to-Text Microphone input
  const toggleListening = () => {
    if (isListening) {
      speechService.stopListening();
      setIsListening(false);
    } else {
      if (!speechService.isRecognitionSupported()) {
        alert("Speech recognition is not supported in this browser. Please try Chrome, Edge, or Safari.");
        return;
      }

      handleStopSpeaking();
      setIsListening(true);

      speechService.startListening({
        lang: selectedLang,
        onResult: (transcript) => {
          setIsListening(false);
          if (transcript) {
            handleSendMessage(transcript);
          }
        },
        onError: (err) => {
          console.warn("Speech recognition error:", err);
          setIsListening(false);
        },
        onEnd: () => {
          setIsListening(false);
        }
      });
    }
  };

  if (!isOpen) return null;

  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === selectedLang) || SUPPORTED_LANGUAGES[0];
  const quickQuestions = QUICK_QUESTIONS[selectedLang] || QUICK_QUESTIONS['en-US'];
  const lastAiMessage = [...messages].reverse().find(m => m.sender === 'ai');

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleStopSpeaking();
            onClose();
          }
        }}
      >
        <div className={`relative w-full transition-all duration-300 ${
          isCallMode ? 'max-w-3xl h-[88vh] max-h-[760px]' : 'max-w-2xl h-[92vh] max-h-[720px]'
        } bg-[#0c0d12] border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden`}>
          
          {/* Top Header */}
          <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#11131a]/90 backdrop-blur-sm z-20">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-[#B4A06E]/15 border border-[#B4A06E]/30 text-[#B4A06E]">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                {isSpeaking && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B4A06E] animate-ping" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-medium text-sm text-white tracking-wide">
                    Ikram's AI Twin
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#B4A06E]/15 text-[#B4A06E] border border-[#B4A06E]/30">
                    {activeLangObj.flag} {activeLangObj.native}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-neutral-400">
                  {isCallMode ? "Voice Call Mode • Direct Audio Link" : "Voiced Interactive Resume & Experience"}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              
              {/* Voice Call Mode Toggle */}
              <button
                onClick={() => {
                  handleStopSpeaking();
                  setIsCallMode(!isCallMode);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                  isCallMode
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                    : 'bg-white/[0.03] border-white/10 text-[#B4A06E] hover:border-[#B4A06E]'
                }`}
                title={isCallMode ? "Switch to Text Chat Mode" : "Start Live Voice Call"}
              >
                {isCallMode ? <PhoneOff className="w-3.5 h-3.5" /> : <PhoneCall className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isCallMode ? "End Call" : "Voice Call"}</span>
              </button>

              {/* Resume Generator Button */}
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#B4A06E]/15 border border-[#B4A06E]/30 text-[#B4A06E] text-xs font-mono hover:bg-[#B4A06E] hover:text-black transition-colors"
                title="Generate targeted printable resume"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Resume</span>
              </button>

              {/* Real-time speaking audio waveform indicator */}
              {isSpeaking && (
                <button
                  onClick={handleStopSpeaking}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#B4A06E]/15 border border-[#B4A06E]/40 text-[#B4A06E] text-xs font-mono animate-pulse"
                  title="Stop voice output"
                >
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-3 bg-[#B4A06E] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 h-2 bg-[#B4A06E] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-0.5 h-3.5 bg-[#B4A06E] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>Mute</span>
                </button>
              )}

              {/* Voice Mute / Unmute Toggle */}
              <button
                onClick={() => {
                  const next = !voiceEnabled;
                  setVoiceEnabled(next);
                  localStorage.setItem('ai_twin_voice', String(next));
                  if (!next) handleStopSpeaking();
                }}
                className={`p-2 rounded-xl border transition-colors ${
                  voiceEnabled 
                    ? 'border-[#B4A06E]/40 text-[#B4A06E] bg-[#B4A06E]/10' 
                    : 'border-white/10 text-neutral-500 hover:text-white'
                }`}
                title={voiceEnabled ? "Voice Enabled" : "Voice Muted"}
              >
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Settings Toggle */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-xl border transition-colors ${
                  showSettings 
                    ? 'border-[#B4A06E] text-[#B4A06E] bg-[#B4A06E]/10' 
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
                title="AI Twin Settings & Language"
              >
                <Settings2 className="w-4 h-4" />
              </button>

              {/* Close Modal */}
              <button
                onClick={() => {
                  handleStopSpeaking();
                  onClose();
                }}
                className="p-2 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Settings Drawer (Dropdown) */}
          {showSettings && (
            <div className="p-5 border-b border-white/10 bg-[#12141d] z-20 space-y-4 animate-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B4A06E] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Select Voice &amp; Language
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  Responds &amp; speaks in this language
                </span>
              </div>

              {/* Language Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between border transition-all ${
                      selectedLang === lang.code
                        ? 'bg-[#B4A06E] text-black font-semibold border-[#B4A06E]'
                        : 'bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <span>{lang.flag}</span>
                      <span className="truncate">{lang.native}</span>
                    </span>
                    {selectedLang === lang.code && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                ))}
              </div>

              {/* Speech Speed & API Key Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Speech Speed ({speechRate}x)
                  </label>
                  <input
                    type="range"
                    min="0.8"
                    max="1.3"
                    step="0.1"
                    value={speechRate}
                    onChange={(e) => {
                      const r = parseFloat(e.target.value);
                      setSpeechRate(r);
                      localStorage.setItem('ai_twin_rate', String(r));
                    }}
                    className="w-full accent-[#B4A06E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Gemini API Key (Optional Live LLM)
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);
                      localStorage.setItem('ai_twin_api_key', e.target.value);
                    }}
                    placeholder="AIzaSy... (optional)"
                    className="w-full px-3 py-1.5 bg-[#080808] border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-[#B4A06E]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Render Mode: VOICE CALL MODE vs CHAT MODE */}
          {isCallMode ? (
            /* Immersive Voice Call Mode Stage */
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-b from-[#0b0d14] via-[#08090d] to-[#050608] relative overflow-hidden">
              
              {/* Top Call Info Bar */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 z-10 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-white font-medium tracking-wider">LIVE CALL // CONNECTED</span>
                </div>
                <div className="text-center font-bold text-[#B4A06E] text-sm tracking-widest">
                  {formatCallTime(callDuration)}
                </div>
                <div className="text-neutral-500 text-[11px]">
                  Web Speech Audio • Encrypted
                </div>
              </div>

              {/* Central Holographic Voice Orb & Visualizer */}
              <div className="flex-1 flex flex-col items-center justify-center my-6 relative z-10">
                
                {/* Concentric Pulse Rings */}
                <div className="relative flex items-center justify-center">
                  <div className={`absolute w-56 h-56 rounded-full border border-[#B4A06E]/20 transition-transform duration-700 ${
                    isSpeaking ? 'scale-125 animate-pulse' : 'scale-100 opacity-40'
                  }`} />
                  <div className={`absolute w-44 h-44 rounded-full border border-[#B4A06E]/30 transition-transform duration-500 ${
                    isSpeaking ? 'scale-110' : 'scale-95 opacity-50'
                  }`} />
                  <div className={`absolute w-32 h-32 rounded-full border border-white/10 ${
                    isListening ? 'border-red-500/50 scale-110 animate-ping' : ''
                  }`} />

                  {/* Core Interactive Sphere */}
                  <div className={`w-28 h-28 rounded-full flex flex-col items-center justify-center border shadow-2xl transition-all duration-300 ${
                    isSpeaking 
                      ? 'bg-[#B4A06E] border-[#B4A06E] text-black shadow-[#B4A06E]/40 scale-105' 
                      : isListening 
                      ? 'bg-red-500/20 border-red-500 text-red-400 shadow-red-500/30 animate-pulse'
                      : 'bg-[#151722] border-white/20 text-[#B4A06E]'
                  }`}>
                    {isListening ? (
                      <Mic className="w-8 h-8 animate-bounce" />
                    ) : isSpeaking ? (
                      <Radio className="w-8 h-8 animate-spin-slow" />
                    ) : (
                      <Bot className="w-8 h-8" />
                    )}
                    <span className="text-[10px] font-mono font-bold mt-1 tracking-wider uppercase">
                      {isSpeaking ? "Speaking" : isListening ? "Listening" : "Ready"}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Transcription Box */}
                <div className="mt-8 max-w-xl text-center px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-300 font-sans leading-relaxed">
                  {isListening ? (
                    <span className="text-red-400 font-mono animate-pulse">
                      Listening to your voice... Speak your question now.
                    </span>
                  ) : lastAiMessage ? (
                    <span className="line-clamp-3">
                      "{lastAiMessage.text}"
                    </span>
                  ) : (
                    <span className="text-neutral-500 font-mono">
                      Tap the microphone below or ask a question in {activeLangObj.native}.
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Voice Call Control Bar */}
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/5 z-10">
                
                <div className="flex items-center gap-4">
                  {/* Speech to text Toggle */}
                  <button
                    onClick={toggleListening}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border shadow-xl transition-all ${
                      isListening
                        ? 'bg-red-500 border-red-400 text-white animate-pulse scale-110 shadow-red-500/40'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                    title={isListening ? "Stop listening" : "Speak to AI Twin"}
                  >
                    {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6 text-[#B4A06E]" />}
                  </button>

                  {/* End Call Button */}
                  <button
                    onClick={() => {
                      handleStopSpeaking();
                      setIsCallMode(false);
                    }}
                    className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 border border-red-400/40 text-white flex items-center justify-center shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
                    title="End Call and return to chat"
                  >
                    <PhoneOff className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-[11px] font-mono text-neutral-500">
                  {isListening ? "Listening... Speak clearly" : "Tap the Gold Mic to speak • Tap Red to end"}
                </div>
              </div>

            </div>
          ) : (
            /* Classic Text & Voice Chat Mode */
            <>
              {/* Chat Messages List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-sans text-sm">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-xl bg-[#B4A06E]/20 border border-[#B4A06E]/40 text-[#B4A06E] flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-[#B4A06E] text-black font-medium rounded-tr-none shadow-md'
                          : 'bg-[#151722] border border-white/[0.08] text-neutral-200 rounded-tl-none'
                      }`}
                    >
                      {msg.text}

                      {/* Speak button for AI messages */}
                      {msg.sender === 'ai' && (
                        <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between">
                          <button
                            onClick={() => speakText(msg.text, selectedLang)}
                            className="text-[10px] font-mono text-neutral-400 hover:text-[#B4A06E] flex items-center gap-1 transition-colors"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Replay Voice</span>
                          </button>
                          <span className="text-[10px] font-mono text-neutral-500">
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-[#B4A06E]/20 border border-[#B4A06E]/40 text-[#B4A06E] flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-[#151722] border border-white/[0.08] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4A06E] animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4A06E] animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4A06E] animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Question Recommendation Pills */}
              <div className="px-4 py-2 bg-[#0e1017] border-t border-white/[0.06] overflow-x-auto flex items-center gap-2 no-scrollbar">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B4A06E] shrink-0">
                  Suggested:
                </span>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#B4A06E]/15 border border-white/10 hover:border-[#B4A06E]/40 text-xs font-mono text-neutral-300 hover:text-[#B4A06E] whitespace-nowrap transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Bottom Input Bar */}
              <div className="p-3 sm:p-4 bg-[#11131a] border-t border-white/[0.08]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Microphone Voice Button */}
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
                      isListening
                        ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                        : 'bg-white/[0.04] border-white/10 text-[#B4A06E] hover:border-[#B4A06E]'
                    }`}
                    title={isListening ? "Listening... Click to stop" : "Speak your question (Microphone)"}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>

                  {/* Text Input */}
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={
                      isListening 
                        ? "Listening to your voice..." 
                        : selectedLang === 'ur-PK'
                        ? "اکرام کے کام یا مہارتوں کے بارے میں پوچھیں..."
                        : "Ask Ikram's AI Twin anything..."
                    }
                    className="flex-1 bg-[#080808] border border-white/10 px-4 py-3 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B4A06E] font-sans"
                  />

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="p-3 rounded-xl bg-[#B4A06E] hover:bg-white text-black font-semibold transition-colors disabled:opacity-30 shrink-0"
                    title="Send Message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {isListening && (
                  <div className="mt-2 text-center text-xs font-mono text-red-400 animate-pulse flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>Listening to your voice... Speak now</span>
                  </div>
                )}
              </div>
            </>
          )}

        </div>
      </div>

      {/* Targeted Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
