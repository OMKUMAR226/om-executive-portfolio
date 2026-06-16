'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import MagneticButton from '@/components/shared/MagneticButton';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '0 32px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(5,11,22,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(56,189,248,0.1)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '26px',
            color: 'var(--sky)',
            textDecoration: 'none',
            textShadow: '0 0 20px rgba(56,189,248,0.6)',
            letterSpacing: '0.01em',
            transition: 'letter-spacing 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = '0.1em')}
          onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = '0.01em')}
        >
          OM.
        </Link>

        {/* Desktop Nav */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  color: isActive ? 'var(--gold)' : 'var(--slate-400)',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  position: 'relative',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--sky)';
                    e.currentTarget.style.background = 'rgba(56,189,248,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? 'var(--gold)' : 'var(--slate-400)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '14px',
                    right: '14px',
                    height: '2px',
                    background: 'var(--gold)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(245,200,66,0.5)',
                  }} />
                )}
              </Link>
            );
          })}
          <div style={{ marginLeft: '8px' }}>
            <MagneticButton href="/contact" variant="primary" style={{ padding: '10px 24px', fontSize: '14px' }}>
              Book a Call
            </MagneticButton>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="mobile-menu-btn"
          style={{
            background: 'rgba(56,189,248,0.08)',
            border: '1px solid rgba(56,189,248,0.2)',
            borderRadius: '10px',
            color: 'var(--sky)',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 500,
          background: 'rgba(5,11,22,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(248,113,113,0.1)',
            border: '1px solid rgba(248,113,113,0.3)',
            borderRadius: '10px',
            color: 'var(--red-pain)',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '36px',
              color: pathname === link.href ? 'var(--sky)' : 'var(--white)',
              textDecoration: 'none',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
              letterSpacing: '-0.01em',
            }}
          >
            {link.label}
          </Link>
        ))}

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <a
            href="https://wa.me/918305261866?text=Hi%20Om%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20potential%20collaboration."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '14px', padding: '12px 24px' }}
          >
            WhatsApp Om
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
