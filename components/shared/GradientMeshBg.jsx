'use client';

import { useEffect, useRef } from 'react';

const ORBS = [
  { size: 600, color: 'rgba(56,189,248,0.06)', top: '-10%', left: '-5%', duration: 8 },
  { size: 800, color: 'rgba(245,200,66,0.04)', bottom: '-15%', right: '-10%', duration: 12 },
  { size: 500, color: 'rgba(124,58,237,0.05)', top: '10%', right: '5%', duration: 10 },
  { size: 700, color: 'rgba(16,185,129,0.03)', top: '40%', left: '30%', duration: 15 },
];

export default function GradientMeshBg() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -2,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {ORBS.map((orb, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animation: `floatSlow ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${i * -2}s`,
          }}
        />
      ))}
    </div>
  );
}
