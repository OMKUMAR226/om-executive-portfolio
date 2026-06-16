'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import GlowCard from '@/components/shared/GlowCard';
import SectionTitle from '@/components/shared/SectionTitle';
import TechBadge from '@/components/shared/TechBadge';
import { CASE_STUDY_PREVIEWS } from '@/lib/constants';

export default function QuickCaseStudies() {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => { el.classList.add('visible'); }, i * 100);
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

  const colors = ['cyan', 'violet', 'orange'];

  return (
    <section
      style={{
        padding: '96px 24px',
        background: 'linear-gradient(135deg, rgba(10,10,18,0.8), rgba(5,5,8,0.8))',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle
          label="Proof of Execution"
          title="Case Studies"
          subtitle="Real engagements. Real outcomes. Real infrastructure built."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {CASE_STUDY_PREVIEWS.map((cs, i) => (
            <div
              key={cs.id}
              ref={(el) => (refs.current[i] = el)}
              className="reveal"
            >
              <Link href={cs.href} style={{ textDecoration: 'none', display: 'block' }}>
                <GlowCard accentColor={colors[i]} padding="p-7">
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {cs.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} color={colors[i]} />
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#F1F5F9',
                      marginBottom: '16px',
                      lineHeight: 1.3,
                    }}
                  >
                    {cs.title}
                  </h3>

                  {/* Result badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      background: 'rgba(0,255,135,0.08)',
                      border: '1px solid rgba(0,255,135,0.25)',
                      borderRadius: '8px',
                      color: '#00FF87',
                      fontSize: '13px',
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: '16px',
                    }}
                  >
                    ✅ {cs.result}
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      color: '#00D4FF',
                      fontSize: '13px',
                      fontWeight: 600,
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Read Full Case Study →
                  </div>
                </GlowCard>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
