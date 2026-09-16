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

  // Stop speaking
  const handleStopSpeaking = () => {
    speechService.stop();
    setIsSpeaking(false);
    if (onSpeakingChange) onSpeakingChange(false);
  };

  // Toggle voice recognition (Speech-to-Text)
  const toggleListening = () => {
    if (isListening) {
      speechService.stopListening();
      setIsListening(false);
    } else {
      // Stop any current speech playback before listening
      handleStopSpeaking();

      const started = speechService.startListening({
        lang: selectedLang,
        onResult: (transcript) => {
          setIsListening(false);
          setInputText(transcript);
          // Automatically trigger response with captured transcript
          handleSendMessage(transcript);
        },
        onError: (err) => {
          console.error("Speech recognition error:", err);
          setIsListening(false);
        },
        onEnd: () => {
          setIsListening(false);
        }
      });

      if (started) {
        setIsListening(true);
      } else {
        console.warn("Speech recognition is not supported in this browser.");
      }
    }
  };

  // Handle message submission
  const handleSendMessage = async (customText = null) => {
    const textToSend = customText || inputText;
    if (!textToSend.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!customText) setInputText('');
    setIsTyping(true);

    // Stop speaking user input
    handleStopSpeaking();

    // Query response
    try {
      const responseText = await aiTwinService.getResponse(textToSend, selectedLang, apiKey);

      setIsTyping(false);
      const aiMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);

      // Speak response if voice is active
      if (voiceEnabled) {
        speakText(responseText, selectedLang);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setIsTyping(false);
      const errorMessage = {
        id: `err-${Date.now()}`,
        sender: 'ai',
        text: "I encountered a momentary glitch. Please feel free to ask again or reach out to Ikram directly at ikramamjad10@gmail.com!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  if (!isOpen) return null;

  const quickQuestions = QUICK_QUESTIONS[selectedLang] || QUICK_QUESTIONS['en-US'];
  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === selectedLang) || SUPPORTED_LANGUAGES[0];
  const lastAiMessage = [...messages].reverse().find(m => m.sender === 'ai');

  return (
    <>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 select-none font-body">
        {/* Backdrop */}
        <div 
          onClick={() => {
            handleStopSpeaking();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <div className={`relative w-full transition-all duration-300 ${
          isCallMode ? 'max-w-3xl h-[88vh] max-h-[760px]' : 'max-w-2xl h-[92vh] max-h-[720px]'
        } bg-surface border border-stroke rounded-3xl flex flex-col shadow-2xl overflow-hidden`}>
          
          {/* Top Header */}
          <div className="px-5 sm:px-6 py-4 border-b border-stroke flex items-center justify-between bg-bg/80 backdrop-blur-md z-20">
            <div className="flex items-center gap-3">
              {/* Logo / Ring */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full p-[1.5px]">
                <span className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
                <span className="relative z-10 w-full h-full rounded-full bg-bg flex items-center justify-center text-text-primary">
                  <Sparkles className="w-3.5 h-3.5 text-text-primary" />
                </span>
                {isSpeaking && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display italic text-base text-text-primary tracking-wide">
                    Ikram&apos;s AI Twin
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-surface border border-stroke text-muted">
                    {activeLangObj.flag} {activeLangObj.native}
                  </span>
                </div>
                <p className="text-[11px] text-muted tracking-wider uppercase">
                  {isCallMode ? "Voice Call Mode • Direct Audio Link" : "Voiced Interactive Experience"}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Voice Call Mode Toggle */}
              <button
                onClick={() => {
                  handleStopSpeaking();
                  setIsCallMode(!isCallMode);
                }}
                className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs tracking-wider uppercase transition-all ${
                  isCallMode
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-semibold'
                    : 'bg-surface border-stroke text-muted hover:text-text-primary hover:border-stroke/80'
                }`}
                title={isCallMode ? "Switch to Text Chat Mode" : "Start Live Voice Call"}
              >
                {isCallMode ? <PhoneOff className="w-3.5 h-3.5" /> : <PhoneCall className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isCallMode ? "End Call" : "Voice Call"}</span>
              </button>

              {/* Resume Generator Button */}
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-stroke text-muted hover:text-text-primary hover:border-stroke/80 text-xs uppercase tracking-wider transition-colors"
                title="Generate targeted printable resume"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Resume</span>
              </button>

              {/* Real-time speaking audio waveform indicator */}
              {isSpeaking && (
                <button
                  onClick={handleStopSpeaking}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full accent-gradient text-black text-xs font-semibold uppercase tracking-wider animate-pulse"
                  title="Stop voice output"
                >
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-3 bg-black animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 h-2 bg-black animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-0.5 h-3.5 bg-black animate-bounce" style={{ animationDelay: '300ms' }} />
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
                className={`p-2 rounded-full border transition-colors ${
                  voiceEnabled 
                    ? 'border-stroke text-text-primary bg-surface' 
                    : 'border-stroke text-muted/50 hover:text-text-primary'
                }`}
                title={voiceEnabled ? "Voice Enabled" : "Voice Muted"}
              >
                {voiceEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              {/* Settings Toggle */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-full border transition-colors ${
                  showSettings 
                    ? 'border-text-primary text-text-primary bg-surface' 
                    : 'border-stroke text-muted hover:text-text-primary'
                }`}
                title="AI Twin Settings & Language"
              >
                <Settings2 className="w-3.5 h-3.5" />
              </button>

              {/* Close Modal */}
              <button
                onClick={() => {
                  handleStopSpeaking();
                  onClose();
                }}
                className="p-2 rounded-full border border-stroke text-muted hover:text-text-primary hover:bg-bg transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Settings Drawer (Dropdown) */}
          {showSettings && (
            <div className="p-5 border-b border-stroke bg-bg/95 z-20 space-y-4 animate-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-text-primary flex items-center gap-1.5 font-medium">
                  <Globe className="w-3.5 h-3.5 text-muted" />
                  Select Voice &amp; Language
                </span>
                <span className="text-[10px] text-muted uppercase tracking-wider">
                  Responds &amp; speaks in this language
                </span>
              </div>

              {/* Language Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between border transition-all ${
                      selectedLang === lang.code
                        ? 'accent-gradient text-black font-semibold border-transparent'
                        : 'bg-surface text-muted border-stroke hover:text-text-primary hover:border-stroke/80'
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stroke">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-muted mb-1">
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
                    className="w-full accent-[#89AACC]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-muted mb-1">
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
                    className="w-full px-3 py-1.5 bg-surface border border-stroke rounded-xl text-xs text-text-primary placeholder-muted focus:outline-none focus:border-stroke/80"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Render Mode: VOICE CALL MODE vs CHAT MODE */}
          {isCallMode ? (
            /* Immersive Voice Call Mode Stage */
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 bg-bg relative overflow-hidden">
              
              {/* Top Call Info Bar */}
              <div className="flex items-center justify-between text-xs text-muted z-10 pb-4 border-b border-stroke">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-text-primary uppercase tracking-widest text-[11px] font-medium">
                    LIVE AUDIO LINK
                  </span>
                </div>
                <div className="text-center font-display italic text-lg text-text-primary tracking-widest">
                  {formatCallTime(callDuration)}
                </div>
                <div className="text-muted/70 text-[11px] uppercase tracking-wider">
                  Web Speech Engine
                </div>
              </div>

              {/* Central Voice Orb & Visualizer */}
              <div className="flex-1 flex flex-col items-center justify-center my-6 relative z-10">
                
                {/* Concentric Pulse Rings */}
                <div className="relative flex items-center justify-center">
                  <div className={`absolute w-56 h-56 rounded-full border border-stroke transition-transform duration-700 ${
                    isSpeaking ? 'scale-125 animate-pulse border-white/20' : 'scale-100 opacity-40'
                  }`} />
                  <div className={`absolute w-44 h-44 rounded-full border border-stroke transition-transform duration-500 ${
                    isSpeaking ? 'scale-110' : 'scale-95 opacity-50'
                  }`} />
                  <div className={`absolute w-32 h-32 rounded-full border border-stroke ${
                    isListening ? 'border-red-500/50 scale-110 animate-ping' : ''
                  }`} />

                  {/* Core Interactive Sphere */}
                  <div className={`w-28 h-28 rounded-full flex flex-col items-center justify-center border shadow-2xl transition-all duration-300 ${
                    isSpeaking 
                      ? 'accent-gradient border-transparent text-black scale-105 shadow-glow-accent' 
                      : isListening 
                      ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                      : 'bg-surface border-stroke text-text-primary'
                  }`}>
                    {isListening ? (
                      <Mic className="w-7 h-7 animate-bounce" />
                    ) : isSpeaking ? (
                      <Radio className="w-7 h-7" />
                    ) : (
                      <Bot className="w-7 h-7 text-muted" />
                    )}
                    <span className="text-[10px] uppercase tracking-widest font-semibold mt-1">
                      {isSpeaking ? "Speaking" : isListening ? "Listening" : "Ready"}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Transcription Box */}
                <div className="mt-8 max-w-xl text-center px-5 py-3.5 rounded-2xl bg-surface border border-stroke text-xs text-text-primary/90 leading-relaxed">
                  {isListening ? (
                    <span className="text-red-400 uppercase tracking-wider animate-pulse">
                      Listening to your voice... Speak your question now.
                    </span>
                  ) : lastAiMessage ? (
                    <span className="line-clamp-3 text-muted">
                      &ldquo;{lastAiMessage.text}&rdquo;
                    </span>
                  ) : (
                    <span className="text-muted uppercase tracking-wider text-[11px]">
                      Tap the microphone below or ask a question in {activeLangObj.native}.
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Voice Call Control Bar */}
              <div className="flex flex-col items-center gap-3 pt-4 border-t border-stroke z-10">
                
                <div className="flex items-center gap-4">
                  {/* Speech to text Toggle */}
                  <button
                    onClick={toggleListening}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                      isListening
                        ? 'bg-red-500 border-red-400 text-white animate-pulse scale-105'
                        : 'bg-surface hover:bg-stroke border-stroke text-text-primary'
                    }`}
                    title={isListening ? "Stop listening" : "Speak to AI Twin"}
                  >
                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-text-primary" />}
                  </button>

                  {/* End Call Button */}
                  <button
                    onClick={() => {
                      handleStopSpeaking();
                      setIsCallMode(false);
                    }}
                    className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 border border-red-400/40 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
                    title="End Call and return to chat"
                  >
                    <PhoneOff className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-[10px] uppercase tracking-widest text-muted">
                  {isListening ? "Listening... Speak clearly" : "Tap Mic to speak • Tap Red to end"}
                </div>
              </div>

            </div>
          ) : (
            /* Classic Text & Voice Chat Mode */
            <>
              {/* Chat Messages List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm custom-scrollbar bg-bg">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-surface border border-stroke text-text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-muted" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-text-primary text-bg font-medium rounded-tr-sm shadow-md'
                          : 'bg-surface border border-stroke text-text-primary rounded-tl-sm'
                      }`}
                    >
                      {msg.text}

                      {/* Speak button for AI messages */}
                      {msg.sender === 'ai' && (
                        <div className="mt-2.5 pt-2 border-t border-stroke/60 flex items-center justify-between">
                          <button
                            onClick={() => speakText(msg.text, selectedLang)}
                            className="text-[10px] uppercase tracking-wider text-muted hover:text-text-primary flex items-center gap-1 transition-colors"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Replay Voice</span>
                          </button>
                          <span className="text-[10px] text-muted/60">
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
                    <div className="w-7 h-7 rounded-full bg-surface border border-stroke text-text-primary flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5 text-muted" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-surface border border-stroke flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Question Recommendation Pills */}
              <div className="px-4 py-2.5 bg-surface border-t border-stroke overflow-x-auto flex items-center gap-2 no-scrollbar">
                <span className="text-[10px] uppercase tracking-widest text-muted shrink-0 font-medium">
                  Suggested:
                </span>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="px-3.5 py-1.5 rounded-full bg-bg hover:bg-surface border border-stroke hover:border-stroke/80 text-xs text-muted hover:text-text-primary whitespace-nowrap transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Bottom Input Bar */}
              <div className="p-3 sm:p-4 bg-surface/90 border-t border-stroke backdrop-blur-md">
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
                    className={`p-3 rounded-full border transition-all flex items-center justify-center shrink-0 ${
                      isListening
                        ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                        : 'bg-bg border-stroke text-muted hover:text-text-primary hover:border-stroke/80'
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
                    className="flex-1 bg-bg border border-stroke px-5 py-3 rounded-full text-xs sm:text-sm text-text-primary placeholder-muted focus:outline-none focus:border-stroke/80 font-body"
                  />

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="p-3 rounded-full accent-gradient text-black font-semibold transition-opacity hover:opacity-90 disabled:opacity-30 shrink-0"
                    title="Send Message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {isListening && (
                  <div className="mt-2 text-center text-xs text-red-400 uppercase tracking-wider animate-pulse flex items-center justify-center gap-2">
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
