'use client';

import { useEffect, useRef } from 'react';
import { Globe, Building, Network } from 'lucide-react';
import GlassCard from '@/components/shared/GlassCard';
import SectionLabel from '@/components/shared/SectionLabel';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const CARDS = [
  {
    icon: Globe,
    heading: "You've Validated. Now You Need India Done Right.",
    title: 'Foreign Startup Entering India',
    body: "You've proven product-market fit in your home market. Every India agency you've spoken to wants a retainer and gives you a deck. You need someone inside your org — not outside it — who already has the network and track record.",
  },
  {
    icon: Building,
    heading: 'You Need Indian Quality Without Indian Risk.',
    title: 'Global Company Needing India Capabilities',
    body: 'Development at Indian cost without quality risk. Beta testers who match your actual user demographic. Distribution, app downloads, product testimonials — without 6 months of vendor sourcing from scratch.',
  },
  {
    icon: Network,
    heading: 'You Have Demand. You Need Reliable Delivery.',
    title: 'Agency Needing India White-Label',
    body: "Client demand exceeding your capacity. You need an Indian partner for overflow work who vets quality before it reaches your client. You've been burned before. This is different — because I hold the technical scrutiny of a patent inventor.",
  },
];

export default function WhoThisIsFor() {
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
      id="who"
      style={{
        padding: '96px 32px',
        background: 'var(--navy-900)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionLabel text="// IS THIS YOU?" />
          <AnimatedHeading as="h2">
            You Don&apos;t Have an India Problem. You Have an Operator Problem.
          </AnimatedHeading>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="who-grid"
        >
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={card.title} ref={(el) => (refs.current[i] = el)} className="reveal">
                <GlassCard
                  variant="gold"
                  style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(245,200,66,0.08)',
                      border: '1px solid rgba(245,200,66,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--gold)' }} />
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '10px',
                        color: 'var(--gold)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {card.title}
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', lineHeight: 1.3, margin: 0 }}>
                      {card.heading}
                    </h3>
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--slate-400)', margin: 0, flexGrow: 1 }}>
                    {card.body}
                  </p>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
