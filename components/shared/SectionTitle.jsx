'use client';

import { useEffect, useRef } from 'react';

export default function SectionTitle({
  label,
  title,
  subtitle,
  gradient = true,
  align = 'center',
  className = '',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ textAlign: align, marginBottom: '48px' }}
    >
      {label && (
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-cyan)',
            textTransform: 'uppercase',
            marginBottom: '12px',
            padding: '4px 12px',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: '4px',
            background: 'rgba(0,212,255,0.05)',
          }}
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 700,
          marginBottom: '16px',
          lineHeight: 1.2,
        }}
        className={gradient ? 'gradient-text' : ''}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '17px',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: align === 'center' ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
