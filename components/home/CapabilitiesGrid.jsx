'use client';

import { useEffect, useRef } from 'react';
import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import SectionLabel from '@/components/shared/SectionLabel';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const CAPABILITIES = [
  {
    icon: '🌐',
    title: 'India Market Entry Architecture',
    body: 'I map your TAM, identify launch city, build the partner network, and design your GTM before you spend your first rupee. What takes most companies 12 months to fumble through, I execute in 30 days.',
    badge: { val: 'SAVES ₹15–30L ($18k-$36k)', color: 'sky' },
    sub: 'From zero to operational in 30 days — not 12 months.',
  },
  {
    icon: '🔗',
    title: '30+ Agencies + 6,000+ Pipeline',
    body: 'Full-stack dev shops. B2B growth firms. CRM specialists. Creative studios. All vetted. All activated on demand. Plus direct access to India\'s largest AI-focused student community.',
    badges: [{ val: '30+ AGENCIES', color: 'sky' }, { val: '6,000+ PIPELINE', color: 'sky' }],
    sub: 'Network already built. Deployed on Day 1.',
  },
  {
    icon: '📈',
    title: 'Organic Growth — ₹0 Ad Spend',
    body: 'I grew AISF to 6,000+ members with zero paid advertising. Same methodology — LinkedIn content engine, community architecture, organic distribution — applied to your India audience from Day 1.',
    badge: { val: '₹0 AD SPEND → 6,000 MEMBERS', color: 'gold' },
    sub: 'Zero budget. Real scale. Proven methodology.',
  },
  {
    icon: '💻',
    title: 'IBM-Certified Full Stack Development',
    body: 'React · Node.js · Python · AI/ML · Cloud · DevOps. I vet technical quality with the scrutiny of an inventor — I hold a filed patent and two indexed publications. I build and I evaluate.',
    sub: 'IBM Certified · Patent Filed · Scopus Indexed',
  },
  {
    icon: '🏗️',
    title: 'Operations, GTM & Business Setup',
    body: 'End-to-end operational architecture. Entity registration, team recruitment, vendor sourcing, compliance, process design. Backed by a Govt. of India MSME registered enterprise — every engagement is legally compliant and risk-mitigated.',
    badge: { val: 'MSME REGISTERED', color: 'gold' },
    sub: 'Govt. registered. Risk-mitigated. Embedded.',
  },
  {
    icon: '🧪',
    title: 'Beta Testing & Distribution',
    body: 'Pre-vetted engineering students from India\'s top institutions — available for beta testing, product feedback, app downloads, testimonials, and campus activation. Pipeline ready on Day 1.',
    badge: { val: '6,000+ USERS', color: 'sky' },
    sub: 'Real users. Real feedback. Before you launch.',
  },
  {
    icon: '📱',
    title: 'App Growth & Optimization',
    body: 'Increasing organic app downloads, app registrations, Play Store reviews/comments, and app usage with guaranteed results. Driving real user acquisition through community networks.',
    badge: { val: 'GUARANTEED RESULTS', color: 'gold' },
    sub: 'From downloads to active users.',
  },
  {
    icon: '📊',
    title: 'Mass Audience Ground-Level Surveys',
    body: 'What is it costing you to launch blind into a 1.47 billion population market? I deploy massive, ground-level demographic surveys using a 6,000-strong army to extract raw, unfiltered consumer truth before you spend a single dollar.',
    badge: { val: '1.47 BILLION AUDIENCE', color: 'red' },
    sub: 'Stop guessing. Start knowing.',
  },
];

export default function CapabilitiesGrid() {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 100);
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
      id="capabilities"
      style={{
        padding: '96px 32px',
        background: 'var(--navy-950)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SectionLabel text="// THE INFRASTRUCTURE YOU GET — DAY 1" />
          <AnimatedHeading as="h2" style={{ marginBottom: '16px' }}>
            One Operator. Nine Capabilities. Zero Ramp-Up.
          </AnimatedHeading>
          <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '17px', color: 'var(--slate-400)', lineHeight: 1.7 }}>
            This is an inventory of what walks in the door with me — already built, already operational.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="cap-grid"
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              ref={(el) => (refs.current[i] = el)}
              className="reveal"
            >
              <GlassCard style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Icon */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0,
                  }}
                >
                  {cap.icon}
                </div>

                {/* Badge(s) */}
                {cap.badge && (
                  <MoneyBadge value={cap.badge.val} size="sm" color={cap.badge.color} />
                )}
                {cap.badges && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {cap.badges.map((b) => (
                      <MoneyBadge key={b.val} value={b.val} size="sm" color={b.color} />
                    ))}
                  </div>
                )}

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--white)', lineHeight: 1.3, margin: 0 }}>
                  {cap.title}
                </h3>

                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--slate-400)', margin: 0, flexGrow: 1 }}>
                  {cap.body}
                </p>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: 'var(--sky)',
                    letterSpacing: '0.05em',
                    borderTop: '1px solid rgba(56,189,248,0.1)',
                    paddingTop: '12px',
                  }}
                >
                  {cap.sub}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cap-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
