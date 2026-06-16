'use client';

export default function GlowCard({
  children,
  className = '',
  accentColor = 'cyan',
  hover = true,
  padding = 'p-6',
  style = {},
}) {
  const borderMap = {
    cyan: 'rgba(0,212,255,0.12)',
    violet: 'rgba(124,58,237,0.2)',
    orange: 'rgba(255,107,53,0.2)',
    gold: 'rgba(251,191,36,0.3)',
  };
  const hoverShadowMap = {
    cyan: 'rgba(0,212,255,0.1)',
    violet: 'rgba(124,58,237,0.1)',
    orange: 'rgba(255,107,53,0.1)',
    gold: 'rgba(251,191,36,0.1)',
  };

  return (
    <div
      className={`glass ${hover ? 'glass-hover' : ''} ${padding} ${className}`}
      style={{
        borderColor: borderMap[accentColor] || borderMap.cyan,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = `0 20px 40px ${hoverShadowMap[accentColor] || hoverShadowMap.cyan}`;
        e.currentTarget.style.borderColor =
          accentColor === 'cyan'
            ? 'rgba(0,212,255,0.35)'
            : accentColor === 'violet'
            ? 'rgba(124,58,237,0.4)'
            : accentColor === 'orange'
            ? 'rgba(255,107,53,0.4)'
            : 'rgba(251,191,36,0.5)';
      }}
      onMouseLeave={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = borderMap[accentColor] || borderMap.cyan;
      }}
    >
      {children}
    </div>
  );
}
