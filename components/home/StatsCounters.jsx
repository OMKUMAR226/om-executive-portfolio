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
  { prefix: '', value: 30, suffix: '+', label: 'Mature Partner Agencies' },
  { prefix: '', value: 12, suffix: '+', label: 'Total Events Managed' },
  { prefix: '', value: 4, suffix: '', label: '24H National Hackathons' },
  { prefix: '', value: 40, suffix: '%', label: 'Avg Operational Surplus' },
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
          // Fire counter as soon as it enters viewport
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const fontSize = size === 'primary' ? 'clamp(36px, 4vw, 56px)' : 'clamp(28px, 3vw, 40px)';

  return (
    <div
      ref={ref}
      style={{ textAlign: 'center', height: '100%' }}
    >
      <div 
        className="premium-moving-border marquee-hover-card"
        style={{ width: '100%', height: '100%' }}
      >
        <div
          className="premium-moving-inner"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0A0A0A, #111111)',
            borderRadius: '18px',
            padding: '32px 24px',
            gap: '12px',
            width: '100%',
            height: '100%',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize,
              color: 'var(--white)',
              textShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(205, 127, 50, 0.3)',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            {stat.prefix}
            {isVisible ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
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
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--slate-300)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}
          >
            {stat.label}
          </span>
        </div>
      </div>
    </div>
  );
}

const MarqueeSet = ({ stats, size }) => (
  <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
    {stats.map((stat, i) => (
      <div key={`${stat.label}-${i}`} style={{ width: 'clamp(300px, 25vw, 400px)', flexShrink: 0 }}>
        <StatBlock stat={stat} size={size} index={i} />
      </div>
    ))}
  </div>
);

const MarqueeTrack = ({ stats, direction = 'left', size = 'primary' }) => {
  return (
    <div className={`marquee-track ${direction}`}>
      <MarqueeSet stats={stats} size={size} />
      <MarqueeSet stats={stats} size={size} />
      <MarqueeSet stats={stats} size={size} />
      <MarqueeSet stats={stats} size={size} />
    </div>
  );
};

export default function StatsCounters() {
  return (
    <section
      id="stats"
      style={{
        background: 'var(--navy-900)',
        padding: '96px 0',
        borderTop: '1px solid rgba(56,189,248,0.06)',
        borderBottom: '1px solid rgba(56,189,248,0.06)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionLabel text="// THE PROOF BY NUMBERS" />
          <AnimatedHeading as="h2" style={{ marginBottom: '16px' }}>The Infrastructure, By Numbers.</AnimatedHeading>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '17px', lineHeight: 1.7, color: 'var(--slate-400)' }}>
            Managing diverse scales—from 24-hour national tech hackathons to entrepreneurship summits, student welfare initiatives, and PoliceMitra welfare events.
          </p>
        </div>

      </div>

      {/* Infinite Marquee Section */}
      <div className="marquee-wrapper">
        <MarqueeTrack stats={PRIMARY_STATS} direction="left" size="primary" />
        <MarqueeTrack stats={SECONDARY_STATS} direction="right" size="secondary" />
      </div>

      <style>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 32px;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .marquee-track.left {
          animation: scrollLeft 45s linear infinite;
        }

        .marquee-track.right {
          animation: scrollRight 45s linear infinite;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }

        @keyframes scrollRight {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }

        .marquee-hover-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .marquee-hover-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 50px rgba(212, 175, 55, 0.3), 0 0 30px rgba(205, 127, 50, 0.4) !important;
          z-index: 10;
        }

        @property --premium-angle {
          syntax: '<angle>';
          inherits: true;
          initial-value: 0deg;
        }
        
        .premium-moving-border {
          position: relative;
          border-radius: 20px;
          padding: 2px;
          background: conic-gradient(
            from var(--premium-angle),
            rgba(212, 175, 55, 0.8) 0deg,      /* Gold */
            rgba(255, 255, 255, 0.9) 90deg,    /* White */
            rgba(205, 127, 50, 0.8) 180deg,    /* Bronze */
            rgba(212, 175, 55, 0.2) 270deg,    /* Dim Gold */
            rgba(212, 175, 55, 0.8) 360deg
          );
          animation: spinPremium 6s linear infinite;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        
        @keyframes spinPremium {
          to { --premium-angle: 360deg; }
        }
      `}</style>
    </section>
  );
}
