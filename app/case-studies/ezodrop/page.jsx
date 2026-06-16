import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata = {
  title: 'Ezodrop Case Study | ₹1,50,000/Month Amazon Client Stores',
};

export default function EzodropPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* Sticky Metrics Bar */}
      <div className="sticky-metrics-bar">
        <MoneyBadge value="₹1.5L ($1.8k)/MONTH" size="sm" color="gold" />
        <MoneyBadge value="₹6,000 ($72) NET/DEAL" size="sm" color="sky" />
        <MoneyBadge value="₹0 DEAD STOCK" size="sm" color="sky" />
        <MoneyBadge value="50/50 SPLIT" size="sm" color="sky" />
        <MoneyBadge value="3 TIERS" size="sm" color="sky" />
      </div>

      <section style={{ paddingTop: '100px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span className="pill pill-sky">Amazon eCommerce</span>
            <span className="pill pill-gold">Client Acquisition</span>
            <span className="pill pill-gold" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
              Embedded Operations
            </span>
          </div>

          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            Embedding as Acquisition Architect — Client Amazon Stores Generating ₹1,50,000/Month
          </AnimatedHeading>
          
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--slate-400)', fontSize: '14px', marginBottom: '40px' }}>
            <span style={{ color: 'var(--white)' }}>Company:</span> Ezodrop × SalesVerse <br/>
            <span style={{ color: 'var(--white)' }}>Role:</span> Operations Architect & Acquisition Lead
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              The traditional Amazon dropshipping model is broken by dead stock. A seller buys 100 units of a product, sells 40, and watches the remaining 60 units sit in an Amazon warehouse eating monthly storage fees. The margins on the 40 sold are completely wiped out by the losses on the 60 dead units.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              Ezodrop solved this by completely eliminating dead stock risk for their clients. I embedded into their operations to architect the client acquisition pipeline, designing a 3-tier onboarding system that allowed us to scale the student acquisition network while ensuring the client achieved ₹50,000–₹1,50,000 in monthly net profit.
            </p>
          </div>

          {/* Dead Stock Visual */}
          <GlassCard variant="red" style={{ padding: '40px', marginBottom: '60px', background: 'rgba(248,113,113,0.03)' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '24px' }}>The Problem Dead Stock Creates</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }} className="deadstock-grid">
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <div style={{ fontSize: '14px', color: 'var(--slate-300)', marginBottom: '8px' }}>100 units purchased</div>
                <MoneyBadge value="₹36,000+ ($430+)" size="sm" color="red" /> invested
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <div style={{ fontSize: '14px', color: 'var(--slate-300)', marginBottom: '8px' }}>Sales velocity</div>
                40 units sold<br/>60 units stuck
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <div style={{ fontSize: '14px', color: 'var(--slate-300)', marginBottom: '8px' }}>Capital locked</div>
                <MoneyBadge value="₹36,000+ ($430+)" size="sm" color="red" /> blocked<br/>
                <MoneyBadge value="₹5,000+ ($60+)/mo" size="sm" color="red" /> warehouse
              </div>
              <div style={{ padding: '16px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '12px' }}>
                <div style={{ fontSize: '14px', color: 'var(--red-pain)', fontWeight: 600, marginBottom: '8px' }}>Outcome</div>
                Business abandoned
              </div>
            </div>
            <div style={{ fontSize: '16px', color: 'var(--white)', fontWeight: 500, textAlign: 'center' }}>
              Ezodrop eliminates this entirely. Zero dead stock risk.
            </div>
          </GlassCard>

          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>Client Onboarding Architecture</h2>
          
          <GlassCard style={{ marginBottom: '60px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Pathway</th>
                    <th>Client Pays</th>
                    <th>SalesVerse</th>
                    <th>Ezodrop</th>
                    <th>Student Rep</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Free (Head Only)</td>
                    <td><MoneyBadge value="₹0" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹0" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹0" size="sm" color="sky" /></td>
                    <td>Operational share</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Standard</td>
                    <td><MoneyBadge value="₹10,000 ($120)" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹5,000 ($60) (50%)" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹5,000 ($60) (50%)" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹1k–1.5k ($12-$18)" size="sm" color="sky" /></td>
                  </tr>
                  <tr className="total-row">
                    <td>Premium</td>
                    <td><MoneyBadge value="₹15,000 ($180)" size="sm" color="sky" /></td>
                    <td><MoneyBadge value="₹7,500 ($90) (50%)" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹7,500 ($90) (50%)" size="sm" color="gold" /></td>
                    <td><MoneyBadge value="₹1,500 ($18)" size="sm" color="sky" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: 'var(--slate-400)', marginBottom: '8px' }}>Standard Net/Deal:</div>
                <MoneyBadge value="₹3.5k–4k ($42-$48) NET" size="lg" color="gold" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: 'var(--slate-400)', marginBottom: '8px' }}>Premium Net/Deal:</div>
                <MoneyBadge value="₹6,000 ($72) NET" size="lg" color="gold" />
              </div>
            </div>
          </GlassCard>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '60px' }} className="economics-grid">
            {/* Amazon Unit Economics */}
            <GlassCard style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '24px' }}>Amazon Unit Economics</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>Customer pays</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--white)', fontWeight: 500 }}>₹2,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>Product cost</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--red-pain)' }}>–₹1,100</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>Amazon fees</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--red-pain)' }}>–₹400</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(56,189,248,0.2)', paddingTop: '20px', textAlign: 'center' }}>
                <MoneyBadge value="₹500 ($6) NET/ORDER" size="lg" color="gold" />
              </div>
            </GlassCard>

            {/* Client Projections */}
            <GlassCard variant="gold" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '32px', textAlign: 'center' }}>Client Income Projections</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>at 100 orders/mo</span>
                  <MoneyBadge value="₹50,000/MONTH" size="md" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-300)' }}>at 200 orders/mo</span>
                  <MoneyBadge value="₹1,00,000 ($1,200)/MONTH" size="md" color="sky" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(245,200,66,0.2)' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 600 }}>at 300 orders/mo</span>
                  <MoneyBadge value="₹1.5L ($1.8k)/MONTH" size="lg" color="gold" />
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .deadstock-grid { grid-template-columns: 1fr 1fr !important; }
          .economics-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .deadstock-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
