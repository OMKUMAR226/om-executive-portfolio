import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import SectionLabel from '@/components/shared/SectionLabel';
import MagneticButton from '@/components/shared/MagneticButton';

export const metadata = {
  title: 'Achievements & Documentation | The Proof',
  description: 'Verified numbers, patents, publications, and technical certifications. Execution, documented.',
};

export default function AchievementsPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel text="// THE PROOF" />
          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            Documented Execution.
          </AnimatedHeading>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: 'var(--slate-400)', maxWidth: '640px', margin: '0 auto' }}>
            Numbers without context are vanity metrics. Claims without proof are just marketing. This is the verifiable documentation of my technical depth and operational output.
          </p>
        </div>
      </section>

      {/* Financial Impact */}
      <section style={{ padding: '0 32px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '32px', borderBottom: '1px solid rgba(56,189,248,0.1)', paddingBottom: '16px' }}>Financial Impact Summary</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="stats-grid">
            <GlassCard variant="gold" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '16px' }}>TOTAL BUDGET MANAGED</div>
              <MoneyBadge value="$8,100+ (₹6.7L+)" size="xl" color="gold" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }} />
              <div style={{ fontSize: '14px', color: 'var(--slate-400)', marginTop: '8px' }}>(₹6.77L+ ($8,100+))</div>
            </GlassCard>

            <GlassCard style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '16px' }}>REVENUE GENERATED</div>
              <MoneyBadge value="$7,200+ (₹6L+)" size="xl" color="sky" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }} />
              <div style={{ fontSize: '14px', color: 'var(--slate-400)', marginTop: '8px' }}>Across 4 national events</div>
            </GlassCard>

            <GlassCard style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '16px' }}>DEVELOPER PRIZES SECURED</div>
              <MoneyBadge value="$4,100+ (₹3.4L+)" size="xl" color="gold" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }} />
              <div style={{ fontSize: '14px', color: 'var(--slate-400)', marginTop: '8px' }}>Distributed to ecosystem</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Technical Depth */}
      <section style={{ padding: '0 32px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '32px', borderBottom: '1px solid rgba(56,189,248,0.1)', paddingBottom: '16px' }}>Technical Depth & Research</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }} className="tech-grid">
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Patent */}
              <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '11px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                  🏛️ GOVERNMENT OF INDIA — IPO
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--white)', margin: 0, lineHeight: 1.4 }}>
                  WallBreach: Real-Time Wall Breach & Intrusion Detection
                </h4>
                <div style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                  App No: 202521028062 · Filed: March 2025 · Published: May 2025
                </div>
                <span className="pill pill-emerald" style={{ alignSelf: 'flex-start' }}>ACTIVE — Awaiting Examination</span>
              </GlassCard>

              {/* Scopus */}
              <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                  SCOPUS INDEXED · CSCT 2025
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--white)', margin: 0, lineHeight: 1.4 }}>
                  AI-Enforced Construction Safety Compliance System: Real-Time Hazard and PPE Monitoring using YOLOv8 and Deep Learning
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--slate-400)' }}>Registration Fee:</span>
                  <MoneyBadge value="₹10,620 ($127)" size="sm" color="gold" />
                </div>
              </GlassCard>

              {/* Springer */}
              <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                  SPRINGER INDEXED · RASESIA 2024
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--white)', margin: 0, lineHeight: 1.4 }}>
                  SafetySync: Intelligent Collision Detection and Notification Device
                </h4>
                <div style={{ fontSize: '14px', color: 'var(--slate-400)' }}>NIT Kurukshetra · July 2024</div>
              </GlassCard>
            </div>

            {/* IBM Cert */}
            <GlassCard variant="gold" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '24px', height: 'max-content', position: 'sticky', top: '100px' }}>
              <div style={{ width: '100px', height: '100px', background: 'rgba(245,200,66,0.1)', borderRadius: '24px', border: '1px solid rgba(245,200,66,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="var(--gold)"><path d="M14 12c0-1.1-.9-2-2-2h-4v4h4c1.1 0 2-.9 2-2zm-4-1h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v-2zm10 1c0 2.76-2.24 5-5 5h-4v-1.5h4c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5h-4V7h4c2.76 0 5 2.24 5 5zM8 7v10H6.5V7H8zm-3.5 0v1.5h-3v7h3V17h-4.5V7h4.5z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '22px', color: 'var(--white)', marginBottom: '12px' }}>
                  IBM Full Stack Software Developer Professional
                </h3>
                <p style={{ color: 'var(--slate-400)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  15-Course Coursera Specialization. <br/>React, Node.js, Python, Cloud, DevOps, Microservices.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  <span className="pill pill-gold">Verified</span>
                  <span className="pill pill-sky">Production-Grade</span>
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </section>

      {/* Academics */}
      <section style={{ padding: '0 32px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '32px', borderBottom: '1px solid rgba(56,189,248,0.1)', paddingBottom: '16px' }}>Academic Performance</h2>
          
          <GlassCard style={{ padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>INSTITUTION</div>
                <h3 style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>Vishwakarma Institute of Technology (VIT Pune)</h3>
                <div style={{ fontSize: '15px', color: 'var(--slate-400)', marginTop: '8px' }}>B.Tech — Computer Science & AI (Class of 2027)</div>
              </div>

              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px' }}>SGPA (3RD YEAR)</div>
                  <MoneyBadge value="9.58/10" size="lg" color="gold" />
                  <div style={{ fontSize: '12px', color: 'var(--slate-500)', marginTop: '8px' }}>≈ 3.8 US GPA</div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px' }}>CGPA (OVERALL)</div>
                  <MoneyBadge value="8.78/10" size="lg" color="gold" />
                  <div style={{ fontSize: '12px', color: 'var(--slate-500)', marginTop: '8px' }}>≈ 3.5 US GPA</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '0 32px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <GlassCard variant="gold" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '24px' }}>Ready to deploy this infrastructure?</h2>
            <MagneticButton href="/contact" variant="primary">
              Book a 20-Min Alignment Call
            </MagneticButton>
          </GlassCard>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
