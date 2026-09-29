import React from "react";
import { FadeUpStagger, FadeUpItem } from "./motion/FadeUpStagger";
import { NumberCounter } from "./motion/NumberCounter";
import { ParallaxLayer } from "./motion/EditorialReveal";

interface StatItem {
  number: string;
  label: string;
  sublabel?: string;
}

const statsData: StatItem[] = [
  {
    number: "12+",
    label: "Core Tech Stacks",
    sublabel: "MERN • Next.js • Laravel • DBs",
  },
  {
    number: "02",
    label: "Active Industry Roles",
    sublabel: "Cuboid & WebMantis",
  },
  {
    number: "100%",
    label: "Engineering Dedication",
    sublabel: "BS Computer Engineering",
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative bg-[#050505] py-36 md:py-48 border-t border-white/10 overflow-hidden">
      {/* Restrained Ambient Glow */}
      <ParallaxLayer offset={[40, -40]} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-soft/5 blur-[160px] rounded-full" />
      </ParallaxLayer>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Staggered Fade-Up + Number Counter over 1.5s */}
        <FadeUpStagger
          stagger={0.12}
          threshold={0.15}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {statsData.map((stat, idx) => (
            <FadeUpItem
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center p-8 md:p-14 ${
                idx === 0 ? "md:pl-0" : ""
              } ${idx === 2 ? "md:pr-0" : ""}`}
            >
              {/* Number counter from 0 to value with bold condensed display font */}
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-condensed font-black text-white/95 tracking-tighter leading-none mb-3 tabular-nums select-none group">
                <NumberCounter value={stat.number} duration={1.5} />
              </div>

              {/* Stat Label with soft-pink accent */}
              <div className="text-xs sm:text-sm font-mono text-pink-soft uppercase tracking-[0.25em] font-medium">
                {stat.label}
              </div>

              {/* Monospace Sublabel */}
              {stat.sublabel && (
                <div className="font-mono text-[11px] text-zinc-500 tracking-wider mt-2 uppercase">
                  {stat.sublabel}
                </div>
              )}
            </FadeUpItem>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
};

export default Stats;
