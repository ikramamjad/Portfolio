import React from 'react';

export default function AnimeAvatar({ size = 38, className = "", withGlow = true }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-2xl shrink-0 select-none group transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {/* Outer ambient glow */}
      {withGlow && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-500 opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity" />
      )}

      {/* Styled Container with border */}
      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/20 dark:border-white/15 bg-gradient-to-b from-indigo-950 to-slate-950 flex items-center justify-center shadow-md">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
        >
          {/* Cyberpunk/Anime background radial aura */}
          <circle cx="50" cy="50" r="48" fill="url(#avatarGradient)" />

          {/* Anime Tech Hoodie Collar */}
          <path
            d="M18 96 C20 74, 32 66, 50 66 C68 66, 80 74, 82 96 Z"
            fill="#1E2030"
          />
          <path
            d="M34 68 L50 85 L66 68 Z"
            fill="#2A2D40"
          />
          {/* Neon inner collar highlight */}
          <path
            d="M40 68 L50 78 L60 68 Z"
            fill="#6366F1"
          />

          {/* Anime Neck */}
          <path
            d="M43 56 L43 68 L57 68 L57 56 Z"
            fill="#FBCFE8"
            opacity="0.9"
          />

          {/* Anime Face Base */}
          <path
            d="M28 38 C28 58, 38 68, 50 68 C62 68, 72 58, 72 38 C72 26, 62 22, 50 22 C38 22, 28 26, 28 38 Z"
            fill="#FED7AA"
          />

          {/* Soft Anime Cheek Blush */}
          <ellipse cx="36" cy="48" rx="4" ry="2" fill="#F43F5E" opacity="0.45" />
          <ellipse cx="64" cy="48" rx="4" ry="2" fill="#F43F5E" opacity="0.45" />

          {/* Expressive Anime Eyes */}
          {/* Left Eye */}
          <path
            d="M33 39 C36 36, 43 36, 46 39"
            stroke="#0F172A"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <ellipse cx="40" cy="43.5" rx="4" ry="4.5" fill="#4F46E5" />
          <circle cx="41.5" cy="42" r="1.8" fill="#FFFFFF" />
          <circle cx="38.5" cy="45.5" r="0.8" fill="#A5B4FC" />

          {/* Right Eye */}
          <path
            d="M54 39 C57 36, 64 36, 67 39"
            stroke="#0F172A"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <ellipse cx="60" cy="43.5" rx="4" ry="4.5" fill="#4F46E5" />
          <circle cx="61.5" cy="42" r="1.8" fill="#FFFFFF" />
          <circle cx="58.5" cy="45.5" r="0.8" fill="#A5B4FC" />

          {/* Confident Smile */}
          <path
            d="M46 54 Q50 58 54 54"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Layered Spiky Anime Hair */}
          <path
            d="M24 38 C22 22, 32 10, 50 10 C68 10, 78 22, 76 38 C74 30, 68 25, 62 22 C64 28, 62 34, 59 36 C57 28, 52 22, 46 22 C43 26, 42 32, 41 37 C39 31, 35 26, 31 25 C32 30, 30 35, 24 38 Z"
            fill="#1E1B4B"
          />
          <path
            d="M26 34 L21 44 L30 39 L32 49 L36 41 Z"
            fill="#1E1B4B"
          />
          <path
            d="M74 34 L79 44 L70 39 L68 49 L64 41 Z"
            fill="#1E1B4B"
          />

          {/* Violet / Indigo Hair Highlight Spikes */}
          <path
            d="M36 18 C43 14, 57 14, 64 18"
            stroke="#818CF8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M44 24 L48 32 L52 24"
            stroke="#A5B4FC"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Cyber Gamer Headphones with Glowing Rings */}
          {/* Headband */}
          <path
            d="M22 36 C22 13, 78 13, 78 36"
            stroke="#F59E0B"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Earpiece */}
          <rect
            x="17"
            y="32"
            width="9"
            height="18"
            rx="4.5"
            fill="#0F172A"
            stroke="#F59E0B"
            strokeWidth="1.8"
          />
          <circle cx="21.5" cy="41" r="2.5" fill="#6366F1" />

          {/* Right Earpiece */}
          <rect
            x="74"
            y="32"
            width="9"
            height="18"
            rx="4.5"
            fill="#0F172A"
            stroke="#F59E0B"
            strokeWidth="1.8"
          />
          <circle cx="78.5" cy="41" r="2.5" fill="#6366F1" />

          {/* Definitions */}
          <defs>
            <radialGradient id="avatarGradient" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#4338CA" />
              <stop offset="60%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#0F172A" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
