import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { SelectedWorks } from "./components/SelectedWorks";
import { Journal } from "./components/Journal";
import { Explorations } from "./components/Explorations";
import { Stats } from "./components/Stats";
import { ContactFooter } from "./components/ContactFooter";
import { ResumePreviewModal } from "./components/ResumePreviewModal";
import AITwinModal from "./components/AITwinModal";
import AnimeAvatar from "./components/AnimeAvatar";
import { Bot, Sparkles } from "lucide-react";

export const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAITwinOpen, setIsAITwinOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white relative">
      {/* Loading Screen: requestAnimationFrame counter 000 -> 100 over 2700ms */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Page Content */}
      <Navbar
        onResumeClick={() => setIsResumeOpen(true)}
        onAITwinClick={() => setIsAITwinOpen(true)}
        onContactClick={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <main>
        {/* Section 2: Hero */}
        <Hero
          onSeeWorksClick={() => {
            const el = document.getElementById("work");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onReachOutClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section: Tech Stack */}
        <TechStack />

        {/* Section 3: Selected Works */}
        <SelectedWorks />

        {/* Section 4: Journal */}
        <Journal />

        {/* Section 5: Explorations (Parallax Gallery) */}
        <Explorations />

        {/* Section 6: Stats */}
        <Stats />
      </main>

      {/* Section 7: Contact / Footer */}
      <ContactFooter />

      {/* Interactive Resume Modal */}
      <ResumePreviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating AI Twin Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAITwinOpen(true)}
          className="group relative inline-flex items-center gap-3 p-[1.5px] rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl focus:outline-none"
          title="Chat or speak with Ikram's AI Twin"
        >
          {/* Animated gradient ring on hover or speaking */}
          <span
            className={`absolute inset-0 rounded-full accent-gradient transition-opacity duration-300 ${
              isSpeaking ? "opacity-100 animate-gradient-shift" : "opacity-0 group-hover:opacity-100"
            }`}
          />

          {/* Inner pill */}
          <div className="relative z-10 inline-flex items-center gap-3 rounded-full border border-stroke bg-surface/90 backdrop-blur-md px-4 py-2.5">
            {/* Avatar / Icon with pulsing indicator */}
            <div className="relative">
              <AnimeAvatar size={28} withGlow={false} />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
            </div>

            {/* Text details */}
            <div className="text-left font-body pr-1 hidden sm:block">
              <span className="block text-xs font-medium text-text-primary group-hover:accent-gradient-text transition-colors leading-none">
                AI Twin
              </span>
              <span className="block text-[10px] text-muted leading-tight mt-0.5">
                Voice &amp; Chat
              </span>
            </div>

            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          </div>
        </button>
      </div>

      {/* AI Twin Modal */}
      <AITwinModal
        isOpen={isAITwinOpen}
        onClose={() => setIsAITwinOpen(false)}
        onSpeakingChange={setIsSpeaking}
      />
    </div>
  );
};

export default Index;
