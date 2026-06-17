const GOLD_ITEMS = [
  '₹6.77L+ Budget Managed', '$8,100+ USD Events', '30+ Vetted Agencies',
  '6,000+ Members', '₹0 Ad Spend', '$4,100+ Developer Prizes',
  '30–40% Surplus', 'IBM Certified', 'Patent Filed',
  'Scopus Indexed', 'Springer Indexed', 'VIT Pune',
  'NIT Kurukshetra', '4 National Hackathons', 'C-Suite Network',
  '13+ Communities', 'Pan-India Distribution', 'Zero-Cost Acquisition',
  '30+ Agencies', '40% Operational Surplus', 'IBM Certified',
];

const SKY_ITEMS = [
  'India Market Entry', 'Ecosystem Architecture', 'Zero Ramp-Up',
  'Day 1 Execution', 'Full Stack Dev', 'Beta Testing Pipeline',
  'GTM Strategy', 'Operations Lead', 'B2B Sales Systems',
  'Community Building', 'Remote-First', 'Immediate Start',
  'US · AUS · UAE · NZ', 'Revenue-Positive', 'Budget Surplus',
  'Co-Founder Ready', 'Board Advisor', 'Retained Partner',
  'Equity Consideration',
];

function TickerItem({ text, color }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '13px',
        fontWeight: 600,
        color,
        whiteSpace: 'nowrap',
        padding: '0 20px',
      }}
    >
      {text}
      <span style={{ marginLeft: '16px', opacity: 0.5 }}>◆</span>
    </span>
  );
}

export default function MarqueeTicker() {
  const doubled_gold = [...GOLD_ITEMS, ...GOLD_ITEMS];
  const doubled_sky = [...SKY_ITEMS, ...SKY_ITEMS];

  return (
    <div
      style={{
        background: 'rgba(5,11,22,0.9)',
        borderTop: '1px solid rgba(56,189,248,0.08)',
        borderBottom: '1px solid rgba(56,189,248,0.08)',
        padding: '0',
        overflow: 'hidden',
      }}
    >
      {/* Strip 1 — Gold, scrolling left */}
      <div
        className="marquee-container"
        style={{ height: '48px', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="marquee-track">
          {doubled_gold.map((item, i) => (
            <TickerItem key={`g1-${i}`} text={item} color="var(--gold)" />
          ))}
        </div>
      </div>

      {/* Strip 2 — Sky, scrolling right */}
      <div
        className="marquee-container"
        style={{ height: '48px', display: 'flex', alignItems: 'center' }}
      >
        <div className="marquee-track-reverse">
          {doubled_sky.map((item, i) => (
            <TickerItem key={`s2-${i}`} text={item} color="var(--sky)" />
          ))}
        </div>
      </div>
    </div>
  );
}
