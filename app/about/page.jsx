import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import NetworkGraph from '@/components/shared/NetworkGraph';
import SectionLabel from '@/components/shared/SectionLabel';
import MagneticButton from '@/components/shared/MagneticButton';

export const metadata = {
  title: 'About Om Kumar Garg | Not an Agency, The Operator',
  description: 'Most foreign companies burn 6–12 months finding the wrong India partner. I built a different kind of infrastructure to execute from Day 1.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* Header */}
      <section style={{ paddingTop: '160px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <SectionLabel text="// ABOUT" />
          <AnimatedHeading as="h1" style={{ marginBottom: '40px' }}>
            Not a Consultant. Not an Agency. The Operator.
          </AnimatedHeading>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              Most foreign companies make the same mistake entering India. They hire a consultant who talks but doesn&apos;t execute. They sign an agency that takes a retainer and gives them a deck. They spend the first year discovering that their strategy doesn&apos;t translate — not because India is unpredictable, but because they had the wrong operator. By the time they realise it, they&apos;ve burned 6–12 months and a significant portion of their expansion budget.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.75, color: 'var(--slate-300)', margin: 0 }}>
              I built a different kind of infrastructure — not to pitch with, but to execute with. 30+ vetted agencies across full-stack development, B2B growth, CRM, and creative production. A tech community of 6,000+ engineers built without a single rupee in paid advertising. 4 national hackathons managed with $8,100+ USD in combined budgets while maintaining 30–40% operational surplus. Two Scopus and Springer indexed publications. A patent filed with the Government of India. An IBM Full Stack Professional Certificate. A Government of India MSME registered enterprise (Udyam No: UDYAM-MP-40-0049721). These aren&apos;t resume bullets — they&apos;re proof that execution and depth can coexist in one person.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.75, color: 'var(--white)', fontWeight: 500, margin: 0 }}>
              Every company I&apos;ve worked with has received one thing: someone who moves like a co-founder, thinks like an operator, and brings the infrastructure that normally takes 12 months to build — from Day 1. That&apos;s not a promise. That&apos;s a pattern.
            </p>
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section style={{ padding: '60px 32px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <SectionLabel text="// THE NETWORK MAP" />
            <AnimatedHeading as="h2" scramble={false}>
              The Ecosystem You Inherit.
            </AnimatedHeading>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'rgba(5,11,22,0.6)', borderRadius: '24px', border: '1px solid rgba(56,189,248,0.1)', padding: '20px' }}>
            <NetworkGraph />
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--slate-400)', fontFamily: "'JetBrains Mono', monospace" }}>
              Hover any node to see details.
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts & Academics */}
      <section style={{ padding: '60px 32px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }} className="about-grid-1">
          {/* Quick Facts */}
          <GlassCard style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '24px', color: 'var(--white)' }}>Quick Facts</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="quick-facts-grid">
              <div>
                <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginBottom: '6px' }}>Location</div>
                <div style={{ fontSize: '15px', color: 'var(--slate-200)', fontWeight: 500 }}>Pune, India — Remote-Ready, All Time Zones</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginBottom: '6px' }}>Institution</div>
                <div style={{ fontSize: '15px', color: 'var(--slate-200)', fontWeight: 500 }}>Vishwakarma Institute of Technology (VIT Pune)</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginBottom: '6px' }}>Degree</div>
                <div style={{ fontSize: '15px', color: 'var(--slate-200)', fontWeight: 500 }}>B.Tech — Computer Science & AI (2027)</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginBottom: '6px' }}>Publications</div>
                <div style={{ fontSize: '15px', color: 'var(--slate-200)', fontWeight: 500 }}>Scopus (CSCT 2025) · Springer (RASESIA 2024)</div>
              </div>
            </div>
          </GlassCard>

          {/* Academic Performance */}
          <GlassCard variant="gold" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <MoneyBadge value="9.58/10" size="xl" color="gold" />
                <div style={{ fontSize: '14px', color: 'var(--slate-300)', fontWeight: 500 }}>
                  SGPA — 3rd Year<br/>(≈ 3.8 US GPA)
                </div>
              </div>
            </div>
            <div style={{ height: '1px', background: 'rgba(245,200,66,0.1)' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <MoneyBadge value="8.78/10" size="xl" color="gold" />
                <div style={{ fontSize: '14px', color: 'var(--slate-300)', fontWeight: 500 }}>
                  CGPA Overall<br/>(≈ 3.5 US GPA)
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* IBM & Patents */}
      <section style={{ padding: '20px 32px 60px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* IBM */}
          <GlassCard variant="gold" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ maxWidth: '600px' }}>
                <h3 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '8px' }}>
                  IBM Full Stack Software Developer Professional Certificate
                </h3>
                <p style={{ color: 'var(--slate-400)', fontSize: '15px', marginBottom: '24px' }}>
                  15-Course Coursera Specialization — Verified by IBM
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['React.js', 'Node.js', 'Python', 'Django', 'Flask', 'Cloud (IBM)', 'DevOps', 'CI/CD', 'Containers', 'Kubernetes', 'Microservices', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'].map(tech => (
                    <span key={tech} className="pill pill-gold">{tech}</span>
                  ))}
                </div>
              </div>
              <div style={{ width: '80px', height: '80px', background: 'rgba(245,200,66,0.1)', borderRadius: '16px', border: '1px solid rgba(245,200,66,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--gold)"><path d="M14 12c0-1.1-.9-2-2-2h-4v4h4c1.1 0 2-.9 2-2zm-4-1h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v-2zm10 1c0 2.76-2.24 5-5 5h-4v-1.5h4c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5h-4V7h4c2.76 0 5 2.24 5 5zM8 7v10H6.5V7H8zm-3.5 0v1.5h-3v7h3V17h-4.5V7h4.5z"/></svg>
              </div>
            </div>
          </GlassCard>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="patents-grid">
            {/* Patent */}
            <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '11px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                🏛️ GOVERNMENT OF INDIA — IPO
              </div>
              <h4 style={{ fontSize: '18px', color: 'var(--white)', margin: 0, lineHeight: 1.4 }}>
                WallBreach: Real-Time Wall Breach & Intrusion Detection
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                Designed and filed a proprietary algorithmic system for real-time network intrusion detection and automated security mitigation. Engineered at the intersection of systems architecture and machine learning.
              </p>
              <div style={{ fontSize: '12px', color: 'var(--slate-500)', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                Co-authored peer-reviewed research deploying advanced ML models to enforce real-time safety protocol compliance in hazardous construction environments.
              </p>
              </GlassCard>

            {/* Springer */}
            <GlassCard style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '11px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                SPRINGER INDEXED · RASESIA 2024
              </div>
              <h4 style={{ fontSize: '18px', color: 'var(--white)', margin: 0, lineHeight: 1.4 }}>
                SafetySync: Intelligent Collision Detection and Notification Device
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                Published framework for intelligent vehicular systems for real-time collision detection and automated emergency notification via sensor fusion and ML.
              </p>
              <div style={{ fontSize: '12px', color: 'var(--slate-500)', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                NIT Kurukshetra · July 2024
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Hackathons Table */}
      <section style={{ padding: '20px 32px 60px' }}>
        <div className="container">
          <GlassCard style={{ overflow: 'hidden' }}>
            <div style={{ padding: '32px 32px 24px', borderBottom: '1px solid rgba(56,189,248,0.1)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>Events Managed — Financial Record</h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '700px' }}>
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Role</th>
                    <th>Budget</th>
                    <th>Revenue</th>
                    <th>Surplus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'var(--white)', fontWeight: 500 }}>VIT Code Apex 1.0</td>
                    <td>Organizer</td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td>38.5%</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)', fontWeight: 500 }}>VIT Code Apex 2.0</td>
                    <td>Organizer</td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td>41.2%</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)', fontWeight: 500 }}>BrainBack.ai</td>
                    <td>Organizer</td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td>24.8%</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--white)', fontWeight: 500 }}>OdooXVIT</td>
                    <td>Organizer</td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td><span style={{opacity: 0.3, fontSize: '12px'}}>Internal</span></td>
                    <td>31.4%</td>
                  </tr>
                  <tr className="total-row">
                    <td>COMBINED TOTAL</td>
                    <td></td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <MoneyBadge value="$8,100+ (₹6.7L+)" size="sm" color="gold" />
                        <span style={{ fontSize: '12px', color: 'var(--slate-400)' }}>/</span>
                        <MoneyBadge value="₹6.77L+" size="sm" color="gold" />
                      </div>
                    </td>
                    <td><MoneyBadge value="$7,200+ (₹6L+)" size="sm" color="gold" /></td>
                    <td>34.7% (Avg)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <span style={{ fontSize: '14px', color: 'var(--slate-300)' }}>Developer prizes personally secured across all events:</span>
              <MoneyBadge value="$4,100+ (₹3.4L+)" size="lg" color="gold" />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Engagement Options & Resume */}
      <section style={{ padding: '20px 32px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="about-grid-2">
          
          <GlassCard variant="gold" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--white)', margin: 0 }}>Download Resume</h3>
            <p style={{ fontSize: '14px', color: 'var(--slate-400)', margin: 0 }}>
              Updated 2025 — Available for immediate roles
            </p>
            <MagneticButton href="/resume.pdf" variant="primary" external>
              Download PDF →
            </MagneticButton>
          </GlassCard>

          <GlassCard style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '24px' }}>Engagement Options</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              {['India GTM & Operations Lead', 'Chief of Staff / Head of Special Projects', 'Venture Studio Partner', 'Developer Ecosystem / Community Architect'].map(role => (
                <div key={role} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.1)', padding: '16px', borderRadius: '12px', fontSize: '14px', color: 'var(--slate-200)', fontWeight: 500, textAlign: 'center' }}>
                  {role}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--slate-400)', fontFamily: "'JetBrains Mono', monospace" }}>
              Remote-First · Open to Select Partnerships · US / AUS / UAE / EU
            </div>
          </GlassCard>

        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid-1, .about-grid-2 { grid-template-columns: 1fr !important; }
          .patents-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .patents-grid { grid-template-columns: 1fr !important; }
          .quick-facts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
