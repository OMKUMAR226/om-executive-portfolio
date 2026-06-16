'use client';

import { useEffect, useRef } from 'react';
import GlowCard from '@/components/shared/GlowCard';
import SectionTitle from '@/components/shared/SectionTitle';
import TechBadge from '@/components/shared/TechBadge';
import { WHAT_I_BRING } from '@/lib/constants';

function NetworkIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="8" r="5" fill="none" stroke="#00D4FF" strokeWidth="2" />
      <circle cx="8" cy="36" r="5" fill="none" stroke="#00D4FF" strokeWidth="2" />
      <circle cx="40" cy="36" r="5" fill="none" stroke="#00D4FF" strokeWidth="2" />
      <line x1="24" y1="13" x2="8" y2="31" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="24" y1="13" x2="40" y2="31" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="13" y1="36" x2="35" y2="36" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.5" />
      <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="14" r="6" fill="none" stroke="#7C3AED" strokeWidth="2" />
      <path d="M4 40c0-7.73 6.27-14 14-14" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="14" r="6" fill="none" stroke="#7C3AED" strokeWidth="2" />
      <path d="M44 40c0-7.73-6.27-14-14-14" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 26c2-0.7 4-1 6-1s4 0.3 6 1" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" fill="none" stroke="#FF6B35" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="10" ry="18" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="#FF6B35" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="10" y1="14" x2="38" y2="14" stroke="#FF6B35" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="10" y1="34" x2="38" y2="34" stroke="#FF6B35" strokeWidth="1.5" strokeOpacity="0.3" />
    </svg>
  );
}

const ICONS = { network: NetworkIcon, users: UsersIcon, globe: GlobeIcon };

export default function WhatIBring() {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => { el.classList.add('visible'); }, i * 120);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px' }}>
      <SectionTitle
        label="What I Bring"
        title="The Infrastructure You Can't Build in 6 Months"
        subtitle="Most companies hire consultants. I become your unfair advantage."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {WHAT_I_BRING.map((item, i) => {
          const Icon = ICONS[item.icon];
          const accentMap = { cyan: '#00D4FF', violet: '#7C3AED', orange: '#FF6B35' };
          const accent = accentMap[item.accentColor];
          return (
            <div
              key={item.id}
              ref={(el) => (refs.current[i] = el)}
              className="reveal"
            >
              <GlowCard accentColor={item.accentColor} padding="p-8">
                {/* Icon */}
                <div
                  style={{
                    marginBottom: '20px',
                    filter: `drop-shadow(0 0 12px ${accent}80)`,
                  }}
                >
                  <Icon />
                </div>

                {/* Headline */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  {item.headline}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#F1F5F9',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    color: '#94A3B8',
                    fontSize: '15px',
                    lineHeight: 1.75,
                    marginBottom: '20px',
                  }}
                >
                  {item.body}
                </p>

                {/* Badge */}
                <TechBadge label={item.badge} color={item.accentColor} />
              </GlowCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
