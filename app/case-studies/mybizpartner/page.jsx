import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata = {
  title: 'MyBizPartner Case Study | ₹8.64L/Year Zero-Cost Acquisition',
};

export default function MyBizPartnerPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* Sticky Metrics Bar */}
      <div className="sticky-metrics-bar">
        <MoneyBadge value="35–40%" size="sm" color="sky" />
        <MoneyBadge value="₹8.64L ($10.4k)/YEAR" size="sm" color="gold" />
        <MoneyBadge value="₹72,000 ($860)/MONTH" size="sm" color="gold" />
        <MoneyBadge value="₹0 UPFRONT" size="sm" color="sky" />
        <MoneyBadge value="6 STAGES" size="sm" color="sky" />
      </div>

      <section style={{ paddingTop: '100px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span className="pill pill-sky">D2C eCommerce</span>
            <span className="pill pill-gold">Conversion Architecture</span>
            <span className="pill pill-emerald" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--emerald)' }} />
              Active Partnership
            </span>
          </div>

          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            Architecting a Zero-Cost B2B Acquisition Engine That Scales to ₹8.64L/Year
          </AnimatedHeading>
          
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--slate-400)', fontSize: '14px', marginBottom: '40px' }}>
            <span style={{ color: 'var(--white)' }}>Company:</span> MyBizPartner × SalesVerse <br/>
            <span style={{ color: 'var(--white)' }}>Role:</span> Acquisition Architect & Partnership Lead
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              India&apos;s D2C eCommerce market was bleeding revenue at a scale most brand owners hadn&apos;t measured. The average Shopify store converts at 1–2%. That means if you&apos;re spending ₹1,00,000 ($1,200)/month on ads, only 10–20 people are buying. 97–98 out of every 100 visitors leave with your product in their head and your competitor&apos;s product in their cart.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              MyBizPartner had cracked the solution — an AI-powered trust system that pushed conversion to 5–8%+. The same ₹1,00,000 ($1,200) ad budget now produces 50–60 buyers. A 3–5× revenue multiplier. The product was extraordinary. The problem was an acquisition bottleneck — and that&apos;s exactly where I operate at maximum velocity.
            </p>
          </div>

          {/* Visual Comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '60px' }} className="compare-grid">
            <GlassCard variant="red" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '14px', color: 'var(--red-pain)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '20px' }}>WITHOUT MYBIZPARTNER</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>₹1,00,000 ($1,200) ad spend →</span>
                  <MoneyBadge value="10–20 BUYERS" size="sm" color="red" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>Conversion rate:</span>
                  <MoneyBadge value="1–2%" size="sm" color="red" />
                </div>
              </div>
            </GlassCard>

            <GlassCard style={{ padding: '32px', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.03)' }}>
              <h3 style={{ fontSize: '14px', color: 'var(--emerald)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '20px' }}>WITH MYBIZPARTNER</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>₹1,00,000 ($1,200) same spend →</span>
                  <MoneyBadge value="50–60 BUYERS" size="sm" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>Conversion rate:</span>
                  <MoneyBadge value="5–8%+" size="sm" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(16,185,129,0.2)' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 600 }}>Revenue multiplier:</span>
                  <MoneyBadge value="3–5×" size="md" color="gold" />
                </div>
              </div>
            </GlassCard>
          </div>

          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>The Deal Structure</h2>
          
          <GlassCard style={{ marginBottom: '60px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Milestone</th>
                    <th>Commission</th>
                    <th>Per ₹10k Deal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Foundation</td>
                    <td>Deals 1–3</td>
                    <td><MoneyBadge value="35%" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹3,500 ($42)" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Validation</td>
                    <td>Deals 4–5</td>
                    <td><MoneyBadge value="35–40%" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹3.5k–4k ($42-$48)" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Growth Lock</td>
                    <td>Deal 5+</td>
                    <td><MoneyBadge value="40% permanent" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹4,000 ($48)" size="sm" color="gold" /></td>
                  </tr>
                  <tr className="total-row">
                    <td>Scale</td>
                    <td>10+/month</td>
                    <td><MoneyBadge value="40% sustained" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹72,000/month" size="sm" color="gold" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>Revenue Projections</h2>
          
          <GlassCard style={{ marginBottom: '80px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Deals</th>
                    <th>Monthly</th>
                    <th>Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Conservative</td>
                    <td>5 × ₹10k</td>
                    <td><MoneyBadge value="₹17,500 ($210)" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹2.1L ($2.5k)" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Active</td>
                    <td>10 std + 3 premium</td>
                    <td><MoneyBadge value="₹56,000 ($670)" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹6.7L ($8k)" size="sm" color="gold" /></td>
                  </tr>
                  <tr className="total-row">
                    <td>Growth Phase</td>
                    <td>12 × ₹15k (40%)</td>
                    <td><MoneyBadge value="₹72,000 ($860)" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹8.64L ($10.4k)" size="md" color="gold" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '32px' }}>Final Results</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <MoneyBadge value="₹8.64L ($10.4k)/YEAR" size="xl" color="gold" />
              <MoneyBadge value="₹72,000 ($860)/MONTH" size="xl" color="gold" />
              <MoneyBadge value="₹0 UPFRONT" size="xl" color="sky" />
              <MoneyBadge value="₹0 FEES WAIVED" size="xl" color="sky" />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
