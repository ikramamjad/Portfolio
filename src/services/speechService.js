// Speech Service for Web Speech API (Text-to-Speech & Speech-to-Text)

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.recognition = null;
    this.isListening = false;

    if (typeof window !== 'undefined') {
      this.initVoices();
      if (this.synth && this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  // Get available voices for a language code (e.g. 'en', 'ur', 'es', 'de', 'fr', 'ar', 'ja', 'zh')
  getVoicesForLang(langCode) {
    if (!this.voices || this.voices.length === 0) {
      this.initVoices();
    }
    const prefix = langCode.split('-')[0].toLowerCase();
    return this.voices.filter(v => v.lang.toLowerCase().startsWith(prefix));
  }

  // Speak text in the specified language
  speak({ text, lang = 'en-US', rate = 1.0, pitch = 1.0, onStart, onEnd, onError }) {
    if (!this.synth) {
      if (onError) onError(new Error("Speech synthesis not supported in this browser."));
      return;
    }

    // Cancel any ongoing speech
    this.synth.cancel();

    // Clean text of markdown asterisks, URLs, and code brackets for natural speech
    const cleanText = text
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[[\]()↗]/g, ' ')
      .trim();

    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = Math.max(0.7, Math.min(1.5, rate));
    utterance.pitch = Math.max(0.7, Math.min(1.3, pitch));

    // Match best voice
    const matchedVoices = this.getVoicesForLang(lang);
    if (matchedVoices.length > 0) {
      // Prioritize natural/online voices if available
      const naturalVoice = matchedVoices.find(v => 
        v.name.toLowerCase().includes('natural') || 
        v.name.toLowerCase().includes('google') ||
        v.name.toLowerCase().includes('premium')
      );
      utterance.voice = naturalVoice || matchedVoices[0];
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      // Don't report error if speech was intentionally cancelled
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        if (onError) onError(e);
      }
      if (onEnd) onEnd();
    };

    // Speak
    try {
      this.synth.speak(utterance);
    } catch (err) {
      if (onError) onError(err);
      if (onEnd) onEnd();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  // Check if speech recognition is available
  isRecognitionSupported() {
    return typeof window !== 'undefined' && 
      (Boolean(window.SpeechRecognition) || Boolean(window.webkitSpeechRecognition));
  }

  // Start speech recognition listening
  startListening({ lang = 'en-US', onResult, onError, onEnd }) {
    if (!this.isRecognitionSupported()) {
      if (onError) onError(new Error("Speech recognition not supported in this browser."));
      return;
    }

    // Stop synthesis while listening so avatar doesn't hear itself
    this.stop();

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = lang;
    this.recognition.continuous = false;
    this.recognition.interimResults = false;

    this.recognition.onstart = () => {
      this.isListening = true;
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (onError) onError(event);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    try {
      this.recognition.start();
    } catch (err) {
      this.isListening = false;
      if (onError) onError(err);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (err) {
        // ignore
      }
      this.isListening = false;
    }
  }
}

export const speechService = new SpeechService();
