'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import SectionLabel from '@/components/shared/SectionLabel';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const PRIMARY_STATS = [
  { prefix: '$', value: 8100, suffix: '+ USD', label: 'Event Budget Managed' },
  { prefix: '₹', value: 6.77, suffix: 'L+', label: 'Event Budget (INR)', decimals: 2 },
  { prefix: '$', value: 7200, suffix: '+ USD', label: 'Revenue Generated' },
  { prefix: '$', value: 4100, suffix: '+ USD', label: 'Developer Prizes Won' },
];

const SECONDARY_STATS = [
  { prefix: '', value: 30, suffix: '+', label: 'Vetted Agencies' },
  { prefix: '', value: 6000, suffix: '+', label: 'Community Members' },
  { prefix: '', value: 40, suffix: '%', label: 'Operational Surplus' },
  { prefix: '', value: 4, suffix: '', label: 'National Hackathons' },
];

function StatBlock({ stat, size = 'primary', index = 0 }) {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
            setIsVisible(true);
          }, index * 100);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const fontSize = size === 'primary' ? 'clamp(40px, 5vw, 64px)' : 'clamp(28px, 3.5vw, 40px)';

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ textAlign: 'center', padding: '24px 16px' }}
    >
      <div
        className="money-badge money-badge-gold"
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(245,200,66,0.05)',
          border: '1px solid rgba(245,200,66,0.15)',
          borderRadius: '16px',
          padding: '20px 28px',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize,
            color: 'var(--gold)',
            textShadow: 'var(--glow-gold)',
            lineHeight: 1,
          }}
        >
          {stat.prefix}
          {isVisible ? (
            <CountUp
              start={0}
              end={stat.value}
              duration={2.2}
              decimals={stat.decimals || 0}
              separator=","
            />
          ) : (
            '0'
          )}
          {stat.suffix}
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--slate-400)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {stat.label}
        </span>
      </div>
    </div>
  );
}

export default function StatsCounters() {
  return (
    <section
      id="stats"
      style={{
        background: 'var(--navy-900)',
        padding: '96px 32px',
        borderTop: '1px solid rgba(56,189,248,0.06)',
        borderBottom: '1px solid rgba(56,189,248,0.06)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionLabel text="// THE PROOF BY NUMBERS" />
          <AnimatedHeading as="h2">The Infrastructure, By Numbers.</AnimatedHeading>
        </div>

        {/* Primary row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '16px',
          }}
          className="stats-primary"
        >
          {PRIMARY_STATS.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} size="primary" index={i} />
          ))}
        </div>

        {/* Secondary row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
          className="stats-secondary"
        >
          {SECONDARY_STATS.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} size="secondary" index={i + 4} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-primary, .stats-secondary {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-primary, .stats-secondary {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
