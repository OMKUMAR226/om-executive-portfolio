'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  style = {},
  id,
}) {
  const containerRef = useRef(null);
  const btnRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current;
    const btn = btnRef.current;
    if (!container || !btn) return;

    const rect = container.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 80;

    if (dist < maxDist) {
      const strength = (1 - dist / maxDist) * 12;
      const x = (dx / dist) * strength;
      const y = (dy / dist) * strength;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        btn.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    btn.style.transform = 'translate(0, 0) scale(1)';
    setTimeout(() => {
      if (btn) btn.style.transition = '';
    }, 500);
  }, []);

  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';

  const buttonContent = (
    <div
      ref={containerRef}
      style={{ display: 'inline-block', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        external ? (
          <a
            ref={btnRef}
            href={href}
            target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : "_blank"}
            rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : "noopener noreferrer"}
            className={`${variantClass} ${className}`}
            style={{ display: 'inline-flex', ...style }}
            id={id}
          >
            {children}
          </a>
        ) : (
          <Link
            ref={btnRef}
            href={href}
            className={`${variantClass} ${className}`}
            style={{ display: 'inline-flex', ...style }}
            id={id}
          >
            {children}
          </Link>
        )
      ) : (
        <button
          ref={btnRef}
          onClick={onClick}
          className={`${variantClass} ${className}`}
          style={style}
          id={id}
        >
          {children}
        </button>
      )}
    </div>
  );

  return buttonContent;
}
