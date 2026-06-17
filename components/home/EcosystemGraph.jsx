'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const NODES = [
  "US/Global Market",
  "Venture Studio Partners",
  "6,000+ AI Devs",
  "C-Suite Network",
  "Government Access",
  "Physical & Digital Supply"
];

export default function EcosystemGraph() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const radius = 220;
  const containerSize = 600;
  const center = containerSize / 2;

  // Calculate positions for nodes
  const nodePositions = NODES.map((_, index) => {
    // Shift by -Math.PI/2 to start from top
    const angle = (index * (Math.PI * 2)) / NODES.length - Math.PI / 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  });

  return (
    <section className="py-24 bg-canvas flex justify-center items-center overflow-hidden relative min-h-screen">
      {/* Background Ambient Blur */}
      <div className="absolute bg-[#2563eb]/10 blur-[120px] w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div 
        className="relative" 
        style={{ width: containerSize, height: containerSize }}
      >
        {/* SVG Connections */}
        <svg 
          className="absolute inset-0 pointer-events-none z-0" 
          width={containerSize} 
          height={containerSize}
        >
          <defs>
            {nodePositions.map((_, index) => (
              <linearGradient 
                key={`grad-${index}`} 
                id={`line-grad-${index}`} 
                x1="50%" y1="50%" 
                // Convert relative X/Y to percentage for gradient
                x2={`${50 + (nodePositions[index].x / radius) * 50}%`} 
                y2={`${50 + (nodePositions[index].y / radius) * 50}%`}
              >
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {nodePositions.map((pos, index) => {
            const isFaded = hoveredIndex !== null && hoveredIndex !== index;
            return (
              <line
                key={`line-${index}`}
                x1={center}
                y1={center}
                x2={center + pos.x}
                y2={center + pos.y}
                stroke={`url(#line-grad-${index})`}
                strokeWidth="2"
                style={{
                  opacity: isFaded ? 0.2 : 1,
                  filter: isFaded ? 'blur(4px)' : 'none',
                  transition: 'all 0.4s ease'
                }}
              />
            );
          })}
        </svg>

        {/* Orbiting Nodes */}
        {NODES.map((title, index) => {
          const pos = nodePositions[index];
          const isHovered = hoveredIndex === index;
          const isFaded = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={`node-wrapper-${index}`}
              className="absolute z-10"
              style={{
                left: center + pos.x,
                top: center + pos.y,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{
                  y: [0, -4, 0, 4, 0],
                  x: [0, 2, 0, -2, 0],
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  // Scale transition overrides the repeat if hovered, so we use layout/css transition for scale or just let framer handle it.
                }}
                style={{
                  opacity: isFaded ? 0.2 : 1,
                  filter: isFaded ? 'blur(4px)' : 'none',
                  transition: 'opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease'
                }}
                className={`acrylic-panel px-6 py-3 rounded-full flex items-center justify-center text-sm font-semibold font-inter text-text-primary whitespace-nowrap cursor-pointer ${
                  isHovered ? 'border-[#d4af37] border-2 opacity-100 shadow-champagne-glow' : 'border border-[#d4af37]/30'
                }`}
              >
                {title}
              </motion.div>
            </div>
          );
        })}

        {/* Central Node */}
        <div 
          className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-[#0A0A0A] shadow-neumorphic-dark border-2 border-[#d4af37] flex items-center justify-center transition-transform duration-500 hover:scale-105"
        >
          <span className="font-grotesk font-bold text-xl text-white tracking-widest drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
            INDIA
          </span>
        </div>

      </div>
    </section>
  );
}
