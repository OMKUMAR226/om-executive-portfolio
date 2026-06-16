'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PERSONAL, TYPEWRITER_WORDS } from '@/lib/constants';

const TECH_CHIPS = [
  { label: 'React.js', top: '8%', left: '70%', delay: '0s' },
  { label: 'AI/ML', top: '20%', left: '82%', delay: '1s' },
  { label: 'Node.js', top: '72%', left: '68%', delay: '2s' },
  { label: 'Python', top: '85%', left: '78%', delay: '0.5s' },
  { label: 'YOLOv8', top: '50%', left: '88%', delay: '1.5s' },
  { label: 'AWS', top: '35%', left: '5%', delay: '2.5s' },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    const speed = isDeleting ? 60 : 100;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow bg */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* LEFT — Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Availability badge */}
          <div style={{ animation: 'fadeIn 0.6s ease forwards' }}>
            <span className="availability-badge">
              <span className="pulse-dot" />
              ⚡ Available for Remote Global Roles
            </span>
          </div>

          {/* Main heading */}
          <div style={{ animation: 'slideUp 0.7s ease 0.1s both' }}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                lineHeight: 1.05,
                margin: 0,
                fontSize: 'clamp(48px, 6vw, 80px)',
              }}
            >
              <span style={{ color: '#F1F5F9', display: 'block' }}>Om Kumar</span>
              <span className="gradient-text" style={{ display: 'block' }}>Garg</span>
            </h1>
          </div>

          {/* Typewriter line */}
          <div
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              animation: 'slideUp 0.7s ease 0.2s both',
            }}
          >
            <span style={{ color: '#94A3B8' }}>I am your </span>
            <span style={{ color: '#00D4FF', fontWeight: 700 }}>{displayText}</span>
            <span className="typewriter-cursor" />
          </div>

          {/* Sub-tagline */}
          <p
            style={{
              color: '#94A3B8',
              fontSize: '17px',
              lineHeight: 1.8,
              maxWidth: '520px',
              margin: 0,
              animation: 'slideUp 0.7s ease 0.3s both',
            }}
          >
            Most foreign businesses spend 6–12 months finding the right people in India,
            losing capital on misaligned partners, and watching their strategies fail in
            translation. I&apos;ve already built the infrastructure that solves all three —
            and I bring it inside your organization from Day 1.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              animation: 'slideUp 0.7s ease 0.4s both',
            }}
          >
            <Link href="/case-studies" className="btn-primary">
              Explore My Work
            </Link>
            <a
              href={PERSONAL.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Book a 20-Min Call
            </a>
          </div>

          {/* Social links */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              animation: 'slideUp 0.7s ease 0.5s both',
            }}
          >
            {[
              { href: PERSONAL.linkedin, label: 'LinkedIn', icon: '🔗' },
              { href: `mailto:${PERSONAL.email}`, label: 'Email', icon: '📧' },
              { href: PERSONAL.whatsapp, label: 'WhatsApp', icon: '💬' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#94A3B8',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
              >
                <span style={{ fontSize: '18px' }}>{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minHeight: '320px',
            animation: 'fadeIn 1s ease 0.5s both',
          }}
          className="hero-visual"
        >
          {/* Radial glow behind */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Floating tech chips */}
          {TECH_CHIPS.map((chip) => (
            <div
              key={chip.label}
              className="floating-badge-chip"
              style={{
                top: chip.top,
                left: chip.left,
                animationDelay: chip.delay,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            >
              {chip.label}
            </div>
          ))}

          {/* Hex container */}
          <div className="hex-container">
            {/* Orbit rings */}
            <div className="orbit-ring orbit-ring-1">
              <div className="orbit-dot" style={{ background: '#00D4FF', boxShadow: '0 0 8px #00D4FF' }} />
              <div className="orbit-dot" style={{ background: '#00D4FF', top: 'auto', bottom: '-4px', boxShadow: '0 0 8px #00D4FF' }} />
            </div>
            <div className="orbit-ring orbit-ring-2">
              <div className="orbit-dot" style={{ background: '#7C3AED', boxShadow: '0 0 8px #7C3AED' }} />
              <div className="orbit-dot" style={{ background: '#7C3AED', top: 'auto', bottom: '-4px', boxShadow: '0 0 8px #7C3AED' }} />
              <div className="orbit-dot" style={{ background: '#7C3AED', top: '50%', left: '-4px', transform: 'translateY(-50%)', boxShadow: '0 0 8px #7C3AED' }} />
            </div>
            <div className="orbit-ring orbit-ring-3">
              <div className="orbit-dot" style={{ background: '#FF6B35', boxShadow: '0 0 8px #FF6B35' }} />
              <div className="orbit-dot" style={{ background: '#FF6B35', top: 'auto', bottom: '-4px', boxShadow: '0 0 8px #FF6B35' }} />
            </div>

            {/* Hex core */}
            <div className="hex-core">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '24px',
                  color: '#00D4FF',
                  textShadow: '0 0 20px rgba(0,212,255,0.8)',
                  letterSpacing: '-0.02em',
                }}
              >
                OKG
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-visual {
            order: -1;
            min-height: 260px !important;
          }
          .floating-badge-chip { display: none; }
        }
      `}</style>
    </section>
  );
}
