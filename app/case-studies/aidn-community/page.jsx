import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata = {
  title: 'AIDN Tech Community Case Study | 6,000+ Members, ₹0 Ad Spend',
};

export default function AIDNPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* Sticky Metrics Bar */}
      <div className="sticky-metrics-bar">
        <MoneyBadge value="6,000+ MEMBERS" size="sm" color="gold" />
        <MoneyBadge value="$8,100+ (₹6.7L+)" size="sm" color="sky" />
        <MoneyBadge value="$7,200+ REVENUE" size="sm" color="gold" />
        <MoneyBadge value="30–40% SURPLUS" size="sm" color="sky" />
        <MoneyBadge value="₹0 AD SPEND" size="sm" color="sky" />
      </div>

      <section style={{ paddingTop: '100px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span className="pill pill-sky">Community Architecture</span>
            <span className="pill pill-gold">Organic Growth</span>
            <span className="pill pill-emerald" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--emerald)' }} />
              Ongoing
            </span>
          </div>

          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            From Zero to 6,000 Members — Building India&apos;s Largest AI Student Ecosystem on ₹0 Ad Budget
          </AnimatedHeading>
          
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--slate-400)', fontSize: '14px', marginBottom: '40px' }}>
            <span style={{ color: 'var(--white)' }}>Organization:</span> AIDN Tech Community — VIT Pune <br/>
            <span style={{ color: 'var(--white)' }}>Role:</span> Founder & Ecosystem Architect
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              Building a community is easy. Keeping it active and profitable is extremely difficult. Most organizations attempt to solve this by throwing ad spend at the problem, resulting in inflated vanity metrics and low-quality engagement.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              I founded AIDN with a different philosophy: organic value architecture. By identifying the core needs of AI engineering students in India (hackathons, direct industry access, and technical upskilling), we built an engine that grew from 0 to 6,000+ active members purely through organic distribution and high-value event execution.
            </p>
          </div>

          {/* Key Numbers Grid */}
          <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '24px' }}>Ecosystem Performance Metrics</h2>
          
          <GlassCard style={{ marginBottom: '60px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Members</td>
                    <td><MoneyBadge value="6,000+" size="sm" color="sky" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Hackathons Managed</td>
                    <td>4 National Events</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Combined Budget</td>
                    <td><MoneyBadge value="$8,100+ USD (₹6.77L+)" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Revenue Generated</td>
                    <td><MoneyBadge value="$7,200+ (₹6L+)" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Operational Surplus</td>
                    <td><MoneyBadge value="30–40%" size="sm" color="sky" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Developer Prizes</td>
                    <td><MoneyBadge value="$4,100+ (₹3.4L+)" size="sm" color="gold" /></td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)' }}>Sub-Communities</td>
                    <td>13+</td>
                  </tr>
                  <tr className="total-row">
                    <td>Paid Ad Spend</td>
                    <td><MoneyBadge value="₹0" size="sm" color="sky" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Timeline & Results */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginBottom: '60px' }} className="aidn-grid">
            
            {/* Timeline */}
            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '32px' }}>Event Timeline</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                
                <div className="timeline-item">
                  <div className="timeline-line" style={{ background: 'var(--sky)' }}>
                    <div className="timeline-dot" />
                  </div>
                  <div style={{ paddingBottom: '32px', paddingTop: '2px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>JAN 2025</div>
                    <h3 style={{ fontSize: '18px', color: 'var(--white)', marginBottom: '8px', margin: 0 }}>AIDN Founded</h3>
                    <p style={{ fontSize: '14px', color: 'var(--slate-400)', margin: 0 }}>Zero members, zero budget, zero ad spend.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-line">
                    <div className="timeline-dot" />
                  </div>
                  <div style={{ paddingBottom: '32px', paddingTop: '2px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>MAR 2025</div>
                    <h3 style={{ fontSize: '18px', color: 'var(--white)', marginBottom: '8px', margin: 0 }}>VIT Code Apex 1.0</h3>
                    <p style={{ fontSize: '14px', color: 'var(--slate-400)', margin: 0 }}>256 teams participated. Over ₹40,000+ ($480+) in prizes distributed.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-line">
                    <div className="timeline-dot" />
                  </div>
                  <div style={{ paddingBottom: '32px', paddingTop: '2px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>JUN 2025</div>
                    <h3 style={{ fontSize: '18px', color: 'var(--white)', marginBottom: '8px', margin: 0 }}>VIT Code Apex 2.0</h3>
                    <p style={{ fontSize: '14px', color: 'var(--slate-400)', margin: 0 }}>Scaled to 600 teams (2.3× growth). ₹70,000+ ($840+) prize pool.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-line">
                    <div className="timeline-dot" />
                  </div>
                  <div style={{ paddingBottom: '32px', paddingTop: '2px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>AUG 2025</div>
                    <h3 style={{ fontSize: '18px', color: 'var(--white)', marginBottom: '8px', margin: 0 }}>BrainBack.ai</h3>
                    <p style={{ fontSize: '14px', color: 'var(--slate-400)', margin: 0 }}>56 high-tier CSAI teams. Paid internships awarded directly.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-line" style={{ minHeight: '40px', background: 'transparent' }}>
                    <div className="timeline-dot" style={{ background: 'var(--gold)' }} />
                  </div>
                  <div style={{ paddingTop: '2px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>OCT 2025</div>
                    <h3 style={{ fontSize: '18px', color: 'var(--white)', marginBottom: '8px', margin: 0 }}>OdooXVIT</h3>
                    <p style={{ fontSize: '14px', color: 'var(--slate-400)', margin: 0 }}>Massive scale event with ₹1.45L+ ($1.7k+) prize pool.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Results Grid */}
            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--white)', marginBottom: '32px' }}>Final Results</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <GlassCard variant="gold" style={{ padding: '24px', textAlign: 'center' }}>
                  <MoneyBadge value="6,000+" size="xl" color="gold" />
                  <div style={{ fontSize: '14px', color: 'var(--slate-300)', marginTop: '8px' }}>Active Members</div>
                </GlassCard>
                <GlassCard style={{ padding: '24px', textAlign: 'center' }}>
                  <MoneyBadge value="$8,100+ (₹6.7L+)" size="lg" color="sky" />
                  <div style={{ fontSize: '14px', color: 'var(--slate-300)', marginTop: '8px' }}>Budgets Managed</div>
                </GlassCard>
                <GlassCard style={{ padding: '24px', textAlign: 'center' }}>
                  <MoneyBadge value="$7,200+ (₹6L+)" size="lg" color="sky" />
                  <div style={{ fontSize: '14px', color: 'var(--slate-300)', marginTop: '8px' }}>Revenue Generated</div>
                </GlassCard>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <GlassCard style={{ padding: '20px', flex: 1, textAlign: 'center' }}>
                    <MoneyBadge value="$4,100+ (₹3.4L+)" size="md" color="gold" />
                    <div style={{ fontSize: '12px', color: 'var(--slate-400)', marginTop: '8px' }}>Prizes Paid</div>
                  </GlassCard>
                  <GlassCard style={{ padding: '20px', flex: 1, textAlign: 'center' }}>
                    <MoneyBadge value="30–40%" size="md" color="sky" />
                    <div style={{ fontSize: '12px', color: 'var(--slate-400)', marginTop: '8px' }}>Surplus</div>
                  </GlassCard>
                  <GlassCard style={{ padding: '20px', flex: 1, textAlign: 'center' }}>
                    <MoneyBadge value="₹0" size="md" color="sky" />
                    <div style={{ fontSize: '12px', color: 'var(--slate-400)', marginTop: '8px' }}>Ad Spend</div>
                  </GlassCard>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .aidn-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
