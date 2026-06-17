'use client';

import { useEffect, useRef } from 'react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';

export default function DisruptiveAdvantage() {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 150);
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
      id="advantage"
      style={{
        padding: '96px 32px',
        background: 'var(--navy-950)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Glows */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionLabel text="// THE DISRUPTIVE ADVANTAGE" />
          <AnimatedHeading as="h2" style={{ marginBottom: '16px' }}>
            Why Legacy Agencies Move Too Slow.
          </AnimatedHeading>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '18px', lineHeight: 1.7, color: 'var(--slate-400)' }}>
            You could hire a legacy agency with bloated retainers and slow turnaround times. 
            Or, you can partner with the ground-floor of India's emerging tech talent.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'center',
          }}
          className="advantage-grid"
        >
          {/* Left Side: The Narrative */}
          <div
            ref={(el) => (refs.current[0] = el)}
            className="reveal"
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 style={{ fontSize: '28px', color: 'var(--white)', fontWeight: 700, lineHeight: 1.3 }}>
              I am young, hungry, and <br/>
              <span className="text-gradient-gold-sky">unburdened by corporate bureaucracy.</span>
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--slate-300)' }}>
              Most foreign companies get stuck in India because they work with legacy "outsourcing" firms. These firms have high overhead, rigid structures, and operate like it's 2014.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--slate-300)' }}>
              I don't just pass messages. As a native-digital execution architect, I have direct access to the talent pools that older agencies can't tap into. I leverage my network of 6,000+ AI developers and 30+ mature, highly-capable agencies to deploy exactly what you need, at startup speed.
            </p>
            
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div className="pulse-dot pulse-dot-sky" />
                 <span style={{ fontSize: '14px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--sky)', fontWeight: 500 }}>Zero Bureaucracy</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div className="pulse-dot" />
                 <span style={{ fontSize: '14px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--emerald)', fontWeight: 500 }}>Direct Execution</span>
               </div>
            </div>
          </div>

          {/* Right Side: The Contrast */}
          <div
            ref={(el) => (refs.current[1] = el)}
            className="reveal"
          >
            <GlassCard
              style={{
                padding: '40px',
                background: 'rgba(37, 99, 235, 0.02)',
                border: '1px solid rgba(37, 99, 235, 0.1)',
              }}
            >
              <h4 style={{ fontSize: '16px', color: 'var(--slate-400)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', fontFamily: "'JetBrains Mono', monospace" }}>
                The Contrast
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  <span style={{ color: 'var(--slate-400)' }}>Legacy Agencies</span>
                  <span style={{ color: 'var(--red-pain)', fontWeight: 600 }}>Slow, Bloated, Rigid</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  <span style={{ color: 'var(--slate-400)' }}>Traditional Outsourcing</span>
                  <span style={{ color: 'var(--red-pain)', fontWeight: 600 }}>High Overhead, Mediocre Talent</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 600 }}>The Disruptive Operator</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 700 }}>Agile, Lean, Elite Network</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .advantage-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
