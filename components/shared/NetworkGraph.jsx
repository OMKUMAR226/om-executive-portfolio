'use client';

import { useEffect, useRef } from 'react';

const NODES = [
  { id: 'center', label: 'India', x: 50, y: 50, r: 28, color: '#F5C842', isCenter: true },
  { id: 'us_market', label: 'US Market', x: 20, y: 20, r: 16, color: '#F5C842', detail: 'Serving clients & scaling operations across North America' },
  { id: 'agencies', label: '30+ Agencies', x: 78, y: 18, r: 16, color: '#F5C842', detail: 'Vetted white-label execution partners across India' },
  { id: 'global_reach', label: 'Global Reach', x: 88, y: 52, r: 14, color: '#F5C842', detail: 'Bridging Indian engineering talent with international founders' },
  { id: 'devs', label: '6,000+ Devs', x: 75, y: 82, r: 14, color: '#F5C842', detail: "Direct access to India's largest AI engineering student community" },
  { id: 'csuite', label: 'C-Suite Net', x: 38, y: 88, r: 14, color: '#F5C842', detail: 'Direct relationships with executives across the Indian startup ecosystem' },
  { id: 'govt', label: 'Gov. Access', x: 12, y: 62, r: 13, color: '#F5C842', detail: 'Lines into government networks and academic incubators' },
  { id: 'hackathons', label: '4 Hackathons', x: 14, y: 36, r: 13, color: '#F5C842', detail: 'National scale execution with consistent 40% surplus' },
  { id: 'budget', label: '$8.1k Managed', x: 62, y: 32, r: 15, color: '#F5C842', detail: 'Zero-risk capital deployment and event budget management' },
];

export default function NetworkGraph({ animate = true }) {
  const svgRef = useRef(null);
  const hasAnimated = useRef(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !animate) return;

    const lines = svg.querySelectorAll('.network-line');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          lines.forEach((line, i) => {
            setTimeout(() => {
              line.classList.add('drawn');
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, [animate]);

  const handleNodeHover = (e, node) => {
    if (!node.detail || !tooltipRef.current) return;
    const tooltip = tooltipRef.current;
    const rect = e.target.closest('svg').getBoundingClientRect();
    const x = (node.x / 100) * rect.width + rect.left;
    const y = (node.y / 100) * 400 + rect.top;
    tooltip.style.display = 'block';
    tooltip.style.left = `${x + 12}px`;
    tooltip.style.top = `${y - 20}px`;
    tooltip.textContent = node.detail;
  };

  const handleNodeLeave = () => {
    if (tooltipRef.current) tooltipRef.current.style.display = 'none';
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '420px',
          overflow: 'visible',
        }}
      >
        {/* Connection lines */}
        {NODES.filter(n => !n.isCenter).map((node) => (
          <line
            key={`line-${node.id}`}
            x1="50" y1="50"
            x2={node.x} y2={node.y}
            className="network-line"
          />
        ))}

        {/* Satellite nodes */}
        {NODES.filter(n => !n.isCenter).map((node) => (
          <g
            key={node.id}
            onMouseEnter={(e) => handleNodeHover(e, node)}
            onMouseLeave={handleNodeLeave}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 4}
              fill={`${node.color}10`}
              stroke={`${node.color}30`}
              strokeWidth="0.5"
              style={{
                animation: 'pulseDot 3s ease-in-out infinite',
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={`${node.color}15`}
              stroke={node.color}
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={node.y + 0.5}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '3px',
                fill: node.color,
                fontWeight: 700,
              }}
            >
              {node.label.split(' ').map((word, i, arr) => (
                <tspan key={i} x={node.x} dy={i === 0 ? -(arr.length - 1) * 2 : 4}>
                  {word}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        {/* Center node */}
        <g>
          <circle cx="50" cy="50" r="36" fill="rgba(245,200,66,0.04)" stroke="rgba(245,200,66,0.15)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="28" fill="rgba(2,4,10,0.9)" stroke="#F5C842" strokeWidth="1.5" />
          <text x="50" y="50" textAnchor="middle" dominantBaseline="middle"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '6px', fill: '#F5C842', fontWeight: 800, letterSpacing: '0.15em' }}>
            INDIA
          </text>
        </g>
      </svg>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        style={{
          display: 'none',
          position: 'fixed',
          background: 'rgba(8,14,28,0.95)',
          border: '1px solid rgba(56,189,248,0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          color: '#CBD5E1',
          maxWidth: '240px',
          zIndex: 1000,
          pointerEvents: 'none',
          backdropFilter: 'blur(12px)',
          lineHeight: 1.5,
        }}
      />
    </div>
  );
}
