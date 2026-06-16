'use client';

import { useRef, useCallback } from 'react';

export default function GlassCard({
  children,
  className = '',
  variant = 'default',   // 'default' | 'gold' | 'red'
  tilt = true,
  style = {},
  onClick,
  id,
}) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!tilt) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * 8;
      const rotY = dx * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px)`;

      // Light reflection
      const highlight = card.querySelector('.card-highlight');
      if (highlight) {
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        highlight.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.07), transparent 60%)`;
      }
    });
  }, [tilt]);

  const handleMouseLeave = useCallback(() => {
    if (!tilt) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.35s ease, box-shadow 0.35s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    const highlight = card.querySelector('.card-highlight');
    if (highlight) highlight.style.background = 'transparent';
    setTimeout(() => {
      if (card) card.style.transition = '';
    }, 500);
  }, [tilt]);

  const variantClass = {
    default: 'glass-card',
    gold: 'glass-card glass-card-gold',
    red: 'glass-card glass-card-red',
  }[variant] || 'glass-card';

  return (
    <div
      ref={cardRef}
      id={id}
      className={`${variantClass} ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Light reflection overlay */}
      <div
        className="card-highlight"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 0.15s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
