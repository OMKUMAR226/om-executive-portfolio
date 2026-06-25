import GlassCard from '@/components/shared/GlassCard';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import SectionLabel from '@/components/shared/SectionLabel';
import MagneticButton from '@/components/shared/MagneticButton';
import { Building2, Shield, FileCheck, BadgeCheck, Globe, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'MSME Registration | Government of India — Udyam Certified',
  description: 'ORBYT is a Government of India registered MSME under the Ministry of Micro, Small and Medium Enterprises. Udyam Registration Number: UDYAM-MP-40-0049721.',
};

export default function MSMEPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>

      {/* Hero Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel text="// GOVERNMENT OF INDIA — REGISTERED" />
          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            MSME Certified Enterprise
          </AnimatedHeading>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            color: 'var(--slate-400)',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Officially registered under the Ministry of Micro, Small and Medium Enterprises, Government of India. 
            Udyam Registration provides legal credibility, government recognition, and compliance assurance.
          </p>
        </div>
      </section>

      {/* Official Certificate Banner */}
      <section style={{ padding: '0 32px 60px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="animated-border-card">
            <div className="animated-border-inner" style={{ padding: '48px 40px' }}>
              
              {/* Government Header */}
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  marginBottom: '8px',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))',
                    border: '1px solid rgba(212,175,55,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Shield size={24} color="var(--gold)" />
                  </div>
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--gold)',
                  letterSpacing: '0.2em',
                  marginBottom: '6px',
                }}>
                  MINISTRY OF MICRO, SMALL AND MEDIUM ENTERPRISES
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  color: 'var(--slate-400)',
                  letterSpacing: '0.05em',
                }}>
                  भारत सरकार · Government of India
                </div>
              </div>

              {/* Certificate Title */}
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  fontWeight: 700,
                  background: 'var(--gradient-gold-sky)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '12px',
                }}>
                  UDYAM REGISTRATION CERTIFICATE
                </h2>
                <div style={{
                  width: '80px',
                  height: '3px',
                  background: 'var(--gradient-gold-sky)',
                  margin: '0 auto',
                  borderRadius: '2px',
                  boxShadow: '0 0 12px rgba(212,175,55,0.4)',
                }} />
              </div>

              {/* Registration Number - Highlighted */}
              <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                padding: '20px',
                background: 'rgba(212,175,55,0.05)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--slate-400)',
                  letterSpacing: '0.15em',
                  marginBottom: '8px',
                }}>
                  UDYAM REGISTRATION NUMBER
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(20px, 3.5vw, 28px)',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: '0.08em',
                  textShadow: '0 0 20px rgba(212,175,55,0.3)',
                }}>
                  UDYAM-MP-40-0049721
                </div>
              </div>

              {/* Key Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginBottom: '32px',
              }} className="msme-details-grid">

                <DetailRow label="Enterprise Name" value="ORBYT" icon={<Building2 size={16} />} highlight />
                <DetailRow label="Enterprise Type" value="Micro Enterprise" icon={<Briefcase size={16} />} />
                <DetailRow label="Major Activity" value="Services" icon={<Globe size={16} />} />
                <DetailRow label="Date of Incorporation" value="24 June 2026" icon={<FileCheck size={16} />} />
                <DetailRow label="Date of Udyam Registration" value="25 June 2026" icon={<BadgeCheck size={16} />} />
                <DetailRow label="NIC Code" value="70200 — Management Consultancy Activities" icon={<FileCheck size={16} />} />

              </div>

              {/* Verification Footer */}
              <div style={{
                textAlign: 'center',
                paddingTop: '24px',
                borderTop: '1px solid rgba(212,175,55,0.1)',
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  background: 'rgba(16,185,129,0.06)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: '9999px',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--emerald)',
                    boxShadow: '0 0 8px var(--emerald)',
                    animation: 'pulseDot 1.5s ease-in-out infinite',
                  }} />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--emerald)',
                    letterSpacing: '0.1em',
                  }}>
                    VERIFIED — ACTIVE REGISTRATION
                  </span>
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  color: 'var(--slate-400)',
                  lineHeight: 1.6,
                }}>
                  Verifiable at{' '}
                  <a
                    href="https://udyamregistration.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--sky)', textDecoration: 'none' }}
                  >
                    udyamregistration.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means Section */}
      <section style={{ padding: '0 32px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '24px',
            color: 'var(--white)',
            marginBottom: '32px',
            borderBottom: '1px solid rgba(212,175,55,0.1)',
            paddingBottom: '16px',
          }}>
            What MSME Registration Means
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }} className="msme-benefits-grid">

            <GlassCard style={{ padding: '32px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Shield size={24} color="var(--gold)" />
              </div>
              <h4 style={{ fontSize: '17px', color: 'var(--white)', margin: '0 0 12px', lineHeight: 1.4 }}>
                Government Recognized
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.7, margin: 0 }}>
                Officially registered under the Ministry of MSME, Government of India — providing legal credibility and institutional trust.
              </p>
            </GlassCard>

            <GlassCard style={{ padding: '32px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,99,235,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <BadgeCheck size={24} color="var(--sky)" />
              </div>
              <h4 style={{ fontSize: '17px', color: 'var(--white)', margin: '0 0 12px', lineHeight: 1.4 }}>
                Compliance Assured
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.7, margin: 0 }}>
                Meets all regulatory requirements under the MSMED Act, 2006 — ensuring transparent and compliant business operations.
              </p>
            </GlassCard>

            <GlassCard style={{ padding: '32px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <FileCheck size={24} color="var(--emerald)" />
              </div>
              <h4 style={{ fontSize: '17px', color: 'var(--white)', margin: '0 0 12px', lineHeight: 1.4 }}>
                Eligible for Government Benefits
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', lineHeight: 1.7, margin: 0 }}>
                Access to government tenders, subsidized credit, tax benefits, and priority sector lending under MSME schemes.
              </p>
            </GlassCard>

          </div>
        </div>
      </section>

      {/* NIC Classification */}
      <section style={{ padding: '0 32px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '24px',
            color: 'var(--white)',
            marginBottom: '32px',
            borderBottom: '1px solid rgba(212,175,55,0.1)',
            paddingBottom: '16px',
          }}>
            Industry Classification
          </h2>

          <GlassCard style={{ overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '500px' }}>
                <thead>
                  <tr>
                    <th>NIC Code</th>
                    <th>Classification</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--gold)',
                        fontWeight: 600,
                      }}>
                        70200
                      </span>
                    </td>
                    <td style={{ color: 'var(--white)', fontWeight: 500 }}>
                      Management Consultancy Activities
                    </td>
                    <td>
                      <span className="pill pill-emerald">Services</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '0 32px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <GlassCard variant="gold" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '12px' }}>
              Ready to work with a registered enterprise?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--slate-400)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Government-backed credibility. Verified operations. Professional service delivery.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Book a 20-Min Alignment Call
            </MagneticButton>
          </GlassCard>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .msme-details-grid { grid-template-columns: 1fr !important; }
          .msme-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* Detail Row sub-component */
function DetailRow({ label, value, icon, highlight = false }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      padding: '16px 20px',
      background: highlight
        ? 'rgba(212,175,55,0.04)'
        : 'rgba(255,255,255,0.02)',
      border: `1px solid ${highlight ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.04)'}`,
      borderRadius: '12px',
      transition: 'border-color 0.3s ease, background 0.3s ease',
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        background: highlight
          ? 'rgba(212,175,55,0.1)'
          : 'rgba(255,255,255,0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: highlight ? 'var(--gold)' : 'var(--slate-400)',
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          color: 'var(--slate-400)',
          letterSpacing: '0.12em',
          marginBottom: '4px',
          textTransform: 'uppercase',
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          color: highlight ? 'var(--gold)' : 'var(--white)',
          fontWeight: highlight ? 600 : 500,
        }}>
          {value}
        </div>
      </div>
    </div>
  );
}
