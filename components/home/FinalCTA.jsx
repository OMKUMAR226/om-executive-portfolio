'use client';

import MoneyBadge from '@/components/shared/MoneyBadge';
import MagneticButton from '@/components/shared/MagneticButton';

const ENGAGEMENT_PILLS = [
  'India GTM & Operations',
  'Chief of Staff',
  'Venture Studio Partner',
  'Community Architect',
];

export default function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        padding: '96px 32px',
        background: 'var(--navy-950)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '10%', left: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,200,66,0.05), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Animated border container */}
        <div
          className="animated-border-card"
          style={{ maxWidth: '780px', margin: '0 auto' }}
        >
          <div
            className="animated-border-inner"
            style={{ padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 64px)',
                color: 'var(--white)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              The Infrastructure Is Already Built.
            </h2>

            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(20px, 3vw, 36px)',
                color: 'var(--gold)',
                textShadow: '0 0 20px rgba(245,200,66,0.3)',
              }}
            >
              You Just Need To Put It To Work.
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '18px',
                lineHeight: 1.75,
                color: 'var(--slate-300)',
                maxWidth: '560px',
                margin: 0,
              }}
            >
              I&apos;m not asking you to take a risk. Every operation I&apos;ve run has closed revenue-positive with a 30–40% surplus. The network is real. The numbers are documented. The only variable is whether your company&apos;s India expansion is the right fit for what I bring.
            </p>

            {/* MoneyBadge row */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <MoneyBadge value="$8,100+ (₹6.7L+)" size="md" color="gold" />
              <MoneyBadge value="30+ AGENCIES" size="md" color="sky" />
              <MoneyBadge value="6,000+ DEVELOPERS" size="md" color="sky" />
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <MagneticButton href="/contact" variant="primary" style={{ padding: '16px 36px', fontSize: '16px' }} id="final-book-call">
                Book a 20-Min Discovery Call
              </MagneticButton>
              <MagneticButton
                href="mailto:salesverse.connect@gmail.com"
                variant="outline"
                id="final-email"
              >
                salesverse.connect@gmail.com
              </MagneticButton>
            </div>

            {/* Engagement pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {ENGAGEMENT_PILLS.map((pill) => (
                <span
                  key={pill}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(56,189,248,0.15)',
                    borderRadius: '9999px',
                    padding: '5px 16px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: 'var(--slate-300)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
