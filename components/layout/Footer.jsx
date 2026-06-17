'use client';

import Link from 'next/link';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Linkedin = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy-900)',
        borderTop: '1px solid rgba(56,189,248,0.08)',
        padding: '60px 32px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top animated gradient line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--sky), var(--gold), var(--sky), transparent)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 4s linear infinite',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '48px',
          paddingBottom: '48px',
        }}
        className="footer-grid"
      >
        {/* Col 1 — Brand */}
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '22px',
              color: 'var(--white)',
              marginBottom: '6px',
            }}
          >
            Om Kumar Garg
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'var(--slate-400)',
              lineHeight: 1.5,
              marginBottom: '20px',
            }}
          >
            India Market Lead · Ecosystem Architect · Operations Partner
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://linkedin.com/in/kumarom266"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(56,189,248,0.08)',
                border: '1px solid rgba(56,189,248,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sky)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(56,189,248,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:salesverse.connect@gmail.com"
              aria-label="Email"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(56,189,248,0.08)',
                border: '1px solid rgba(56,189,248,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sky)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(56,189,248,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/918305261866?text=Hi%20Om%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20potential%20collaboration."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--emerald)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(16,185,129,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(16,185,129,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'var(--sky)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Direct Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: <Mail size={15} />, label: 'salesverse.connect@gmail.com', href: 'mailto:salesverse.connect@gmail.com' },
              { icon: <Phone size={15} />, label: '+91 83052 61866', href: 'tel:+918305261866' },
              { icon: <Linkedin size={15} />, label: 'linkedin.com/in/kumarom266', href: 'https://linkedin.com/in/kumarom266', ext: true },
              { icon: <MessageCircle size={15} />, label: 'WhatsApp — Message Now', href: 'https://wa.me/918305261866?text=Hi%20Om%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20potential%20collaboration.', ext: true },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.ext ? '_blank' : undefined}
                rel={item.ext ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--slate-400)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sky)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--slate-400)')}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'var(--slate-400)',
          }}
        >
          Zero overhead. Maximum output. © 2025 Om Kumar Garg
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'var(--slate-400)',
          }}
        >
          Remote-First · India-Native · Globally Deployable
        </span>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
