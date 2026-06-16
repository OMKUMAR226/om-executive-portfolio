'use client';

export default function TechBadge({ label, color = 'cyan', className = '' }) {
  const colorMap = {
    cyan: { bg: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.25)', text: '#00D4FF' },
    violet: { bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)', text: '#9F7AEA' },
    orange: { bg: 'rgba(255,107,53,0.08)', border: 'rgba(255,107,53,0.25)', text: '#FF6B35' },
    green: { bg: 'rgba(0,255,135,0.08)', border: 'rgba(0,255,135,0.25)', text: '#00FF87' },
    blue: { bg: 'rgba(0,98,255,0.08)', border: 'rgba(0,98,255,0.25)', text: '#4099ff' },
    white: { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)', text: '#94A3B8' },
  };

  const c = colorMap[color] || colorMap.cyan;

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 600,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.02em',
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        transition: 'all 0.2s ease',
        cursor: 'default',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = c.border;
        e.currentTarget.style.boxShadow = `0 0 12px ${c.border}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = c.bg;
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {label}
    </span>
  );
}
