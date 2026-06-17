'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const MARQUEE_DATA = [
  { title: "$8,100+ USD", sub: "Managed Capital" },
  { title: "30+", sub: "Mature Partner Agencies" },
  { title: "6,000+", sub: "Developer Ecosystem" },
  { title: "4", sub: "National Hackathons" },
  { title: "40%", sub: "Avg Operational Surplus" },
  { title: "2", sub: "Global Research Papers" }
];

const MarqueeCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        borderColor: 'rgba(212, 175, 55, 1)' 
      }}
      className="flex flex-col justify-center items-center w-[300px] h-[140px] shrink-0 bg-surface rounded-2xl border border-accent/20 shadow-neumorphic-dark cursor-pointer transition-colors duration-300"
    >
      <h3 className="text-3xl font-bold font-grotesk text-white shadow-champagne-glow mb-2">
        {item.title}
      </h3>
      <p className="text-sm font-inter text-text-secondary uppercase tracking-wider">
        {item.sub}
      </p>
    </motion.div>
  );
};

export default function MetricsMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Split into two rows
  const row1Data = MARQUEE_DATA.slice(0, 3);
  const row2Data = MARQUEE_DATA.slice(3, 6);

  // Duplicate multiple times to ensure the track is wide enough for large screens before looping
  const repeatedRow1 = [...row1Data, ...row1Data, ...row1Data, ...row1Data, ...row1Data, ...row1Data, ...row1Data, ...row1Data];
  const repeatedRow2 = [...row2Data, ...row2Data, ...row2Data, ...row2Data, ...row2Data, ...row2Data, ...row2Data, ...row2Data];

  return (
    <section className="py-24 bg-canvas overflow-hidden relative">
      <div 
        className="w-full mx-auto"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-8">
          {/* Row 1: Moves Left */}
          <motion.div
            className="flex gap-8 w-max"
            animate={isHovered ? {} : { x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {repeatedRow1.map((item, idx) => (
              <MarqueeCard key={`r1-${idx}`} item={item} />
            ))}
          </motion.div>

          {/* Row 2: Moves Right */}
          <motion.div
            className="flex gap-8 w-max"
            animate={isHovered ? {} : { x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {repeatedRow2.map((item, idx) => (
              <MarqueeCard key={`r2-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
