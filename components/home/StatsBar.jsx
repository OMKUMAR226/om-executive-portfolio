'use client';

import { useEffect, useRef } from 'react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { STATS } from '@/lib/constants';

export default function StatsBar() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0a0a12, #080810)',
        borderTop: '1px solid rgba(0,212,255,0.08)',
        borderBottom: '1px solid rgba(0,212,255,0.08)',
        padding: '48px 24px',
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0',
        }}
        id="stats-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              textAlign: 'center',
              padding: '16px 12px',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                lineHeight: 1,
                marginBottom: '8px',
              }}
              className="gradient-text-green"
            >
              {stat.prefix}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
            </div>
            <p
              style={{
                color: '#94A3B8',
                fontSize: '12px',
                lineHeight: 1.4,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                margin: 0,
                letterSpacing: '0.01em',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          #stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          #stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 20px 8px !important;
          }
        }
        @media (max-width: 480px) {
          #stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
