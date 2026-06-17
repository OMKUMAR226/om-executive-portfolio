'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import MoneyBadge from '@/components/shared/MoneyBadge';
import MagneticButton from '@/components/shared/MagneticButton';
import SectionLabel from '@/components/shared/SectionLabel';

const TYPEWRITER_ROLES = [
  'End-to-End Execution Partner',
  'Full-Stack Dev & App Scaling',
  'Organic Growth & Paid Ads',
  'India Operations Lead',
  'Technical Co-Founder',
];

const VALUE_STACK = [
  'Development, Organic Growth, and Paid Acquisition.',
  'Direct Pipeline to 6,000+ AI Developers.',
  'Executing Globally from India.',
];

export default function HeroSection() {
  const roleRef = useRef(null);
  const wordIndexRef = useRef(0);
  const isDeleteRef = useRef(false);
  const textRef = useRef('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const word = TYPEWRITER_ROLES[wordIndexRef.current];
      const speed = isDeleteRef.current ? 55 : 90;
      if (!isDeleteRef.current) {
        textRef.current = word.slice(0, textRef.current.length + 1);
        if (roleRef.current) roleRef.current.textContent = textRef.current;
        if (textRef.current.length === word.length) {
          timeoutRef.current = setTimeout(() => { isDeleteRef.current = true; tick(); }, 2000);
          return;
        }
      } else {
        textRef.current = word.slice(0, textRef.current.length - 1);
        if (roleRef.current) roleRef.current.textContent = textRef.current;
        if (textRef.current.length === 0) {
          isDeleteRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % TYPEWRITER_ROLES.length;
        }
      }
      timeoutRef.current = setTimeout(tick, speed);
    };
    timeoutRef.current = setTimeout(tick, 800);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Reveal on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-reveal');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 100);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        background: 'var(--gradient-hero)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large ambient glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,200,66,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT — Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Availability badge */}
            <div className="hero-reveal">
              <span className="availability-badge">
                <span className="pulse-dot" style={{ marginRight: '4px' }} />
                // Available for Global Remote Roles — Immediate Start
              </span>
            </div>

            {/* H1 — Pain-first */}
            <div className="hero-reveal">
              <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 1.05, margin: 0 }}>
                <span style={{ display: 'block', color: 'var(--white)' }}>Most Founders</span>
                <span style={{ display: 'block', color: 'var(--red-pain)', fontWeight: 800, fontSize: 'clamp(44px, 6vw, 82px)' }}>Burn 6–12 Months</span>
                <span style={{ display: 'block', color: 'var(--white)' }}>Figuring Out Execution.</span>
                <span style={{ display: 'block', color: 'var(--white)' }}>I Provide The Ultimate</span>
                <span style={{ display: 'block', color: 'var(--gold)' }}>End-to-End Ecosystem.</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="hero-reveal" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: 'var(--slate-400)' }}>
                Your{' '}
              </span>
              <span
                ref={roleRef}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: 'var(--sky)' }}
              />
              <span style={{
                display: 'inline-block', width: '2px', height: '20px',
                background: 'var(--sky)', animation: 'blink 1s step-end infinite',
                verticalAlign: 'middle', marginLeft: '1px',
              }} />
            </div>

            {/* Massive Data Grid (Replacing the paragraph) */}
            <div className="hero-reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: 800, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-0.03em' }}>30+</span>
                <span style={{ color: 'var(--slate-400)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>Vetted Indian Agencies</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: 800, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-0.03em' }}>$8.1k</span>
                <span style={{ color: 'var(--slate-400)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>Capital Managed</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: 800, color: 'var(--gold-light)', lineHeight: 1, letterSpacing: '-0.03em' }}>40%</span>
                <span style={{ color: 'var(--slate-400)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>Operational Surplus</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: 800, color: 'var(--gold-light)', lineHeight: 1, letterSpacing: '-0.03em' }}>6k+</span>
                <span style={{ color: 'var(--slate-400)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>AI Devs in Network</span>
              </div>
            </div>

            {/* Value stack */}
            <div className="hero-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {VALUE_STACK.map((line, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '13px',
                    color: 'var(--slate-300)',
                  }}
                >
                  <span style={{ color: 'var(--sky)', flexShrink: 0, marginTop: '1px' }}>→</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-reveal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <MagneticButton href="/contact" variant="primary" id="hero-book-call">
                Book a 20-Min Call
              </MagneticButton>
              <MagneticButton href="/case-studies" variant="outline" id="hero-see-proof">
                See The Proof →
              </MagneticButton>
            </div>


          </div>

          {/* RIGHT — Identity Card */}
          <div className="hero-reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="animated-border-card"
              style={{ width: '100%', maxWidth: '380px' }}
            >
              <div
                className="animated-border-inner"
                style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Profile photo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
                  <div style={{ position: 'relative', width: '140px', height: '140px' }}>
                    {/* Radar rings */}
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="radar-ring"
                        style={{
                          width: `${140 + n * 28}px`,
                          height: `${140 + n * 28}px`,
                          top: `${-n * 14}px`,
                          left: `${-n * 14}px`,
                          animationDelay: `${(n - 1) * 0.7}s`,
                        }}
                      />
                    ))}
                    <div
                      style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        border: '3px solid rgba(56,189,248,0.4)',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        background: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(245,200,66,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {/* Profile Image */}
                      <Image 
                        src="/om-profile.jpg" 
                        alt="Om Kumar" 
                        fill
                        style={{ objectFit: 'cover', zIndex: 2 }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback Initials */}
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 800,
                          fontSize: '48px',
                          background: 'linear-gradient(180deg, var(--gold) 0%, var(--white) 50%, var(--emerald) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 0 10px rgba(255,153,51,0.5))',
                          letterSpacing: '-0.02em',
                          position: 'absolute',
                          zIndex: 1,
                        }}
                      >
                        OM
                      </span>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--white)', margin: 0 }}>
                      Om Kumar Garg
                    </h3>
                  </div>

                  {/* Role pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '10px' }}>
                    <span className="pill pill-gold">Global Hub: India</span>
                    <span className="pill pill-sky">Execution Architect</span>
                    <span className="pill pill-emerald">Zero-Risk Operator</span>
                  </div>
                </div>

                {/* Info rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(56,189,248,0.1)', paddingTop: '20px' }}>
                  {[
                    { icon: '🎓', text: 'VIT Pune — B.Tech CS & AI · 2027' },
                    { icon: '🌐', text: 'India Market Lead' },
                    { icon: '🔗', text: '6,000+ Dev Pipeline & 30+ Agencies' },
                    { icon: '🔬', text: 'Inventor — Patent Filed in India' },
                    { icon: '📚', text: '2 Scopus/Springer Publications' },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '16px', flexShrink: 0 }}>{row.icon}</span>
                      {row.text ? (
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'var(--slate-300)', lineHeight: 1.4 }}>
                          {row.text}
                        </span>
                      ) : (
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {row.badges.map((b) => (
                            <MoneyBadge key={b} value={b} size="sm" color="gold" />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom MoneyBadges */}
                <div style={{
                  display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center',
                  borderTop: '1px solid rgba(56,189,248,0.1)', paddingTop: '20px',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <MoneyBadge value="6,000+" size="md" color="sky" />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'var(--slate-400)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Dev Pipeline
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <MoneyBadge value="30+" size="md" color="gold" />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'var(--slate-400)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Agencies
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <MoneyBadge value="Govt. Patent" size="md" color="emerald" />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'var(--slate-400)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      WallBreach Filed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
