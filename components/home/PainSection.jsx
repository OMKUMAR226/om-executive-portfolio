'use client';

import { useEffect, useRef } from 'react';
import MoneyBadge from '@/components/shared/MoneyBadge';
import GlassCard from '@/components/shared/GlassCard';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import SectionLabel from '@/components/shared/SectionLabel';

const PAIN_CARDS = [
  {
    badge: '6–12 MONTHS LOST',
    title: 'The Search & Recovery Cycle',
    body: "The average foreign company spends 6–12 months finding, vetting, and recovering from the wrong India partner. That's not a delay. That's a market window your competitor walks through while you're still searching.",
  },
  {
    badge: '₹15–30L ($18k-$36k) WASTED',
    title: 'The Retainer-and-Underdeliver Trap',
    body: "Misaligned agency retainers, wrong early hires, incorrect GTM strategy, avoidable compliance errors — each one burns capital that should be funding growth. India has no patience for slow pivots on wasted runway.",
  },
  {
    badge: 'FIRST-MOVER GONE',
    title: 'The Window Closes Without You',
    body: "India's market rewards early movers. Every month you spend figuring out the landscape is a month your competitor — who found the right embedded operator first — is compounding their distribution moat. You can't buy back timing.",
  },
];

export default function PainSection() {
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
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section
      id="pain"
      style={{
        background: 'var(--navy-900)',
        borderTop: '1px solid rgba(248,113,113,0.1)',
        borderBottom: '1px solid rgba(248,113,113,0.1)',
        padding: '96px 32px',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionLabel text="// THE COST OF GETTING INDIA WRONG" />
          <AnimatedHeading as="h2" style={{ marginBottom: '16px' }}>
            Every Month Without The Right Operator Is Costing You.
          </AnimatedHeading>
          <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '17px', lineHeight: 1.7, color: 'var(--slate-400)' }}>
            Before you see what I bring, understand what you&apos;re currently paying for by not having it.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="pain-grid"
        >
          {PAIN_CARDS.map((card, i) => (
            <div
              key={card.badge}
              ref={(el) => (refs.current[i] = el)}
              className="reveal"
            >
              <GlassCard
                variant="red"
                style={{
                  padding: '32px',
                  height: '100%',
                  background: 'rgba(248,113,113,0.03)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <MoneyBadge value={card.badge} size="md" color="red" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--slate-400)', margin: 0 }}>
                  {card.body}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Conviction statement */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '56px',
            maxWidth: '640px',
            margin: '56px auto 0',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 600,
              color: 'var(--white)',
              lineHeight: 1.55,
            }}
          >
            You don&apos;t need another agency on a retainer.
            <br />
            You need someone embedded inside your team
            <br />
            with the infrastructure already built.
            <br />
            <span style={{ color: 'var(--emerald)', fontSize: '0.75em' }}>
              Government-registered. MSME certified. Risk-mitigated from Day 1.
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pain-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .pain-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
