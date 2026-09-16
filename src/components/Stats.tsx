import React from "react";
import { motion } from "framer-motion";

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
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* 3-column grid with stats: 20+ Years Experience, 95+ Projects Done, 200% Satisfied Clients */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`flex flex-col items-center justify-center text-center p-8 md:p-12 ${
                idx === 0 ? "md:pl-0" : ""
              } ${idx === 2 ? "md:pr-0" : ""}`}
            >
              {/* Stat Number */}
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-text-primary tracking-tight leading-none mb-3 tabular-nums">
                {stat.number}
              </div>

              {/* Stat Label */}
              <div className="text-xs sm:text-sm text-text-primary font-medium uppercase tracking-[0.2em]">
                {stat.label}
              </div>

              {/* Sublabel */}
              {stat.sublabel && (
                <div className="text-[11px] text-muted tracking-wider mt-1">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
