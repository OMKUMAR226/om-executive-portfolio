import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata = {
  title: 'J_Kaur EV Case Study | National Distribution',
};

export default function EVCaseStudyPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* Sticky Metrics Bar */}
      <div className="sticky-metrics-bar">
        <MoneyBadge value="PAN-INDIA DISTRIBUTION" size="sm" color="gold" />
        <MoneyBadge value="40% GROSS MARGIN" size="sm" color="sky" />
        <MoneyBadge value="₹0 INVENTORY" size="sm" color="sky" />
        <MoneyBadge value="PAN-INDIA" size="sm" color="sky" />
        <MoneyBadge value="4 CATEGORIES" size="sm" color="sky" />
      </div>

      <section style={{ paddingTop: '100px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span className="pill pill-sky">Electric Mobility</span>
            <span className="pill pill-gold">Pan-India Distribution</span>
            <span className="pill pill-sky" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sky)' }} />
              Operational
            </span>
          </div>

          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            Building India&apos;s First Student-Powered National EV Distribution Engine
          </AnimatedHeading>
          
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--slate-400)', fontSize: '14px', marginBottom: '40px' }}>
            <span style={{ color: 'var(--white)' }}>Company:</span> J_Kaur EV / GS Enterprise × SalesVerse <br/>
            <span style={{ color: 'var(--white)' }}>Role:</span> Agency Architect & Distribution Lead
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              The electric vehicle market in India is expanding rapidly, but distribution remains localized. Manufacturers struggle to reach tier-2 and tier-3 cities without massive upfront capital investment in dealerships and inventory. 
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              J_Kaur EV had the product, but needed a low-cost, high-velocity distribution model. I architected a system that bypassed traditional dealerships entirely. By tapping into India&apos;s massive student network, we created a distributed sales force that operates on a performance-only basis, carrying zero inventory while maintaining 40% gross margins.
            </p>
          </div>

          {/* Three-Layer Architecture Visual */}
          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>Three-Layer Distribution Architecture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '60px' }} className="arch-grid">
            <GlassCard variant="gold" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '12px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace" }}>LAYER 1</div>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>J_Kaur EV</h3>
              <ul style={{ color: 'var(--slate-300)', fontSize: '15px', paddingLeft: '20px', lineHeight: 1.8, margin: 0 }}>
                <li>Product Supply</li>
                <li>Inbound Leads</li>
                <li>Fulfillment & Delivery</li>
              </ul>
            </GlassCard>

            <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', borderColor: 'rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.03)' }}>
              <div style={{ fontSize: '12px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace" }}>LAYER 2</div>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>SalesVerse (Om)</h3>
              <ul style={{ color: 'var(--slate-300)', fontSize: '15px', paddingLeft: '20px', lineHeight: 1.8, margin: 0 }}>
                <li>Network Management</li>
                <li>Student Training</li>
                <li>Deal Closing & Oversight</li>
              </ul>
            </GlassCard>

            <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '12px', color: 'var(--slate-400)', fontFamily: "'JetBrains Mono', monospace" }}>LAYER 3</div>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>Student Network</h3>
              <ul style={{ color: 'var(--slate-300)', fontSize: '15px', paddingLeft: '20px', lineHeight: 1.8, margin: 0 }}>
                <li>Local Outreach</li>
                <li>Lead Qualification</li>
                <li>Prospect Handoff</li>
              </ul>
            </GlassCard>
          </div>

          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>Vehicle Catalogue & Margins</h2>
          
          <GlassCard style={{ marginBottom: '60px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Supply Price</th>
                    <th>Market Price</th>
                    <th>Margin</th>
                    <th>SalesVerse (40%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Electric Scooter</td>
                    <td><MoneyBadge value="₹39,000" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹48k–55k" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹9k–16k" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹3,600–6,400" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>E-Rickshaw (passenger)</td>
                    <td><MoneyBadge value="₹1,15,000" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹1.65L–1.85L" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹50k–70k" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹20k–28k" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>EV Loader (cargo)</td>
                    <td><MoneyBadge value="₹1.2L–1.4L" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹1.75L–2.1L" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹55k–70k" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹22k–28k" size="sm" color="gold" /></td>
                  </tr>
                  <tr className="total-row">
                    <td>Municipal Garbage Truck</td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>High</td>
                    <td><MoneyBadge value="₹8,000–12,000+" size="sm" color="gold" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>Student Compensation Structure</h2>
          
          <GlassCard style={{ marginBottom: '80px', padding: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="student-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  <span style={{ color: 'var(--slate-300)' }}>Top-tier scooter student/deal</span>
                  <MoneyBadge value="₹4,000+" size="sm" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  <span style={{ color: 'var(--slate-300)' }}>E-rickshaw per deal</span>
                  <MoneyBadge value="₹15,500–25,500+" size="sm" color="gold" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  <span style={{ color: 'var(--slate-300)' }}>City Manager bonus (scooter)</span>
                  <MoneyBadge value="₹200/deal" size="sm" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                  <span style={{ color: 'var(--slate-300)' }}>City Manager bonus (rickshaw)</span>
                  <MoneyBadge value="₹500/deal" size="sm" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>IndiaMart per additional city</span>
                  <MoneyBadge value="₹4,500–5,000/mo" size="sm" color="sky" />
                </div>
              </div>
            </div>
          </GlassCard>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '32px' }}>Final Results</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <MoneyBadge value="PAN-INDIA DISTRIBUTION" size="xl" color="gold" />
              <MoneyBadge value="₹0 INVENTORY" size="xl" color="sky" />
              <MoneyBadge value="₹0 OVERHEAD" size="xl" color="sky" />
              <MoneyBadge value="PAN-INDIA" size="xl" color="gold" />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .arch-grid { grid-template-columns: 1fr !important; }
          .student-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
