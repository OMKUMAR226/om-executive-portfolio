'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import SectionLabel from '@/components/shared/SectionLabel';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const CASE_STUDIES = [
  {
    id: 'mybizpartner',
    company: 'MyBizPartner × SalesVerse',
    tags: ['D2C eCommerce', 'Conversion Architecture'],
    badge: '₹8.64L/YEAR',
    result: 'Zero-cost B2B acquisition engine. 35–40% commission structure. 6-stage pipeline. National scale. ₹0 upfront to partner.',
    href: '/case-studies/mybizpartner',
  },
  {
    id: 'ev-salesforce',
    company: 'J_Kaur EV × SalesVerse',
    tags: ['Electric Mobility', 'Pan-India Distribution'],
    badge: '₹28,000/DEAL',
    result: 'Student-powered national EV distribution. 40% gross margin per vehicle. ₹0 inventory held. Scales to all Indian cities.',
    href: '/case-studies/ev-salesforce',
  },
  {
    id: 'ezodrop',
    company: 'Ezodrop × SalesVerse',
    tags: ['Amazon eCommerce', 'Client Acquisition'],
    badge: '₹1,50,000/MONTH',
    result: 'Embedded operations architect. Client stores generating ₹50,000–1.5L ($600-$1.8k)/month. Performance-only acquisition model.',
    href: '/case-studies/ezodrop',
  },
  {
    id: 'aidn-community',
    company: 'AIDN Tech Community',
    tags: ['Community Architecture', 'Organic Growth'],
    badge: '$7,200+ USD',
    result: '6,000+ members built from zero. $8,100+ managed. ₹0 ad spend. 30–40% surplus maintained across all 4 national events.',
    href: '/case-studies/aidn-community',
  },
];

export default function CaseStudyPreviews() {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section
      id="case-studies"
      style={{
        padding: '96px 32px',
        background: 'var(--navy-950)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionLabel text="// PROOF OF EXECUTION" />
          <AnimatedHeading as="h2" style={{ marginBottom: '16px' }}>
            The Numbers Are Documented. The Results Are Real.
          </AnimatedHeading>
          <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: '17px', color: 'var(--slate-400)', lineHeight: 1.7 }}>
            Four case studies. Four industries. One consistent result: every engagement delivered.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="cs-grid"
        >
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={cs.id}
              ref={(el) => (refs.current[i] = el)}
              className="reveal case-study-card"
            >
              <Link href={cs.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <GlassCard
                  variant="gold"
                  style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer' }}
                >
                  {/* Company & tags */}
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '16px', color: 'var(--white)', marginBottom: '8px' }}>
                      {cs.company}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {cs.tags.map((tag) => (
                        <span key={tag} className="pill pill-sky" style={{ fontSize: '11px' }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Key result MoneyBadge */}
                  <MoneyBadge value={cs.badge} size="lg" color="gold" />

                  {/* Result description */}
                  <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--slate-400)', margin: 0, flexGrow: 1 }}>
                    {cs.result}
                  </p>

                  {/* CTA link */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--sky)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    borderTop: '1px solid rgba(56,189,248,0.1)',
                    paddingTop: '14px',
                  }}>
                    Read Full Case Study →
                  </div>
                </GlassCard>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/case-studies"
            className="btn-outline"
            style={{ display: 'inline-flex', gap: '8px' }}
          >
            View All Case Studies →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
