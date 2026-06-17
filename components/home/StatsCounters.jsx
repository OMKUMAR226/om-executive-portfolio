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
        className="premium-moving-border"
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
              textShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(205, 127, 50, 0.3)', // Mix of gold and bronze
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
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--slate-300)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {stat.label}
          </span>
        </div>
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
          <AnimatedHeading as="h2" style={{ marginBottom: '16px' }}>The Infrastructure, By Numbers.</AnimatedHeading>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '17px', lineHeight: 1.7, color: 'var(--slate-400)' }}>
            Managing diverse scales—from 24-hour national tech hackathons to entrepreneurship summits, student welfare initiatives, and PoliceMitra welfare events.
          </p>
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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .premium-moving-border:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2), 0 0 20px rgba(205, 127, 50, 0.3);
        }
        
        @keyframes spinPremium {
          to { --premium-angle: 360deg; }
        }
      `}</style>
    </section>
  );
}
