import Link from 'next/link';
import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import SectionLabel from '@/components/shared/SectionLabel';

export const metadata = {
  title: 'Case Studies | Proof of Execution',
  description: 'Four case studies. Four industries. One consistent result: every engagement delivered, every budget maintained. MSME registered enterprise.',
};

const CASE_STUDIES = [
  {
    id: 'mybizpartner',
    company: 'MyBizPartner × SalesVerse',
    tags: ['D2C eCommerce', 'Conversion Architecture'],
    badge: '35-40% Commission',
    result: 'Zero-cost B2B acquisition engine. 35–40% commission. 6-stage pipeline. National scale. ₹0 upfront to partner.',
    href: '/case-studies/mybizpartner',
  },
  {
    id: 'ev-salesforce',
    company: 'J_Kaur EV × SalesVerse',
    tags: ['Electric Mobility', 'Pan-India Distribution'],
    badge: 'Pan-India Distribution',
    result: 'Student-powered national EV distribution. 40% gross margin. ₹0 inventory held. Scales to all Indian cities.',
    href: '/case-studies/ev-salesforce',
  },
  {
    id: 'ezodrop',
    company: 'Ezodrop × SalesVerse',
    tags: ['Amazon eCommerce', 'Client Acquisition'],
    badge: '48–59% Growth',
    result: 'Embedded operations architect. Scaled client acquisition through student network channels. Performance-only model.',
    href: '/case-studies/ezodrop',
  },
  {
    id: 'aidn-community',
    company: 'AISF Pune / AIDN',
    tags: ['Community Architecture', 'Non-Profit'],
    badge: '6,000+ Members',
    result: 'Built from zero with ₹0 ad spend. 4 national hackathons. Company-sponsored non-profit tech community.',
    href: '/case-studies/aidn-community',
  },
];

export default function CaseStudiesListing() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel text="// PROOF OF EXECUTION" />
          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            The Numbers Are Documented. The Results Are Real.
          </AnimatedHeading>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: 'var(--slate-400)', maxWidth: '600px', margin: '0 auto' }}>
            Four case studies. Four industries. One consistent result: every engagement delivered, every budget maintained. All through a Govt. of India MSME registered enterprise.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 32px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="cs-list-container">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="cs-list-item">
                <Link href={cs.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <GlassCard variant="gold" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'pointer' }}>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '12px' }}>
                        {cs.company}
                      </h3>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {cs.tags.map((tag) => (
                          <span key={tag} className="pill pill-sky" style={{ fontSize: '12px' }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '16px 0', borderTop: '1px solid rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.1)' }}>
                      <MoneyBadge value={cs.badge} size="xl" color="gold" />
                    </div>

                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--slate-400)', margin: 0, flexGrow: 1 }}>
                      {cs.result}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--sky)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600,
                    }}>
                      Read Full Case Study →
                    </div>
                  </GlassCard>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .cs-list-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media (max-width: 900px) {
          .cs-list-container {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding-bottom: 24px;
            gap: 20px;
            /* Hide scrollbar */
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .cs-list-container::-webkit-scrollbar {
            display: none;
          }
          .cs-list-item {
            flex: 0 0 85vw;
            max-width: 500px;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </div>
  );
}
