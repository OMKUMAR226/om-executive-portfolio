import { Globe, Network, Users, Code, FlaskConical, Building2, Megaphone, Smartphone, Search } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import MoneyBadge from '@/components/shared/MoneyBadge';
import SectionLabel from '@/components/shared/SectionLabel';
import MagneticButton from '@/components/shared/MagneticButton';

export const metadata = {
  title: 'Services | Eight Capabilities. One Operator. Day 1.',
  description: 'India Market Entry Architecture, 30+ Agencies, 6,000+ Developers, Full Stack Dev, and GTM Strategy. One person. One conversation.',
};

const SERVICES = [
  {
    icon: Globe,
    title: 'From Zero to Operational in 30 Days — Not 12 Months.',
    tag: 'INDIA MARKET ENTRY ARCHITECTURE',
    badge: { val: 'SAVES ₹15–30L ($18k-$36k)', color: 'sky' },
    body: 'I map your total addressable market in India. Identify the right city and state to launch first. Build the partner and channel network. Create the GTM strategy. Identify and eliminate every regulatory and operational friction point before it costs you money. What takes most companies 12 months to fumble through, I execute in 30 days.',
    who: 'Foreign startups and companies entering India for the first time.',
    result: 'A live operational foundation — not a slide deck.',
  },
  {
    icon: Network,
    title: '30+ Agencies. 6,000+ Developers. 13+ Communities. Day 1.',
    tag: 'ECOSYSTEM & NETWORK ACCESS',
    badges: [{ val: '30+ AGENCIES', color: 'sky' }, { val: '6,000+ PIPELINE', color: 'sky' }],
    body: 'I am the single point of contact for a pre-vetted network of 30+ agencies covering full-stack dev, design, B2B growth, CRM, content, and creative. Plus direct access to India\'s top tech communities, government nodes, startup founders, and C-suite decision makers.',
    who: 'Any company needing Indian talent or delivery without sourcing from scratch.',
    result: 'Operational partnerships without the 4-month vetting process.',
  },
  {
    icon: Users,
    title: 'Zero-Ad. Zero-Budget. Real Scale.',
    tag: 'ORGANIC GROWTH & COMMUNITY BUILDING',
    badge: { val: '₹0 AD SPEND → 6,000 MEMBERS', color: 'gold' },
    body: 'I grew AISF to 6,000+ members with pure content strategy and LinkedIn organic — no paid ads, ever. Same methodology applied to your India brand presence, community, developer ecosystem, or customer base.',
    result: 'Paid traffic rents attention. Community architecture owns it.',
  },
  {
    icon: Code,
    title: 'IBM-Certified Depth. Indian Cost Structure.',
    tag: 'LOW-COST HIGH-QUALITY DEVELOPMENT',
    badge: { val: 'IBM CERTIFIED · PATENT FILED', color: 'sky' },
    body: 'Full-stack development using React, Node.js, Python, AI/ML, and Cloud. I also coordinate large-scale builds through my 30+ agency network. I vet technical quality with the scrutiny of an inventor — I hold a patent and two indexed publications.',
    result: 'Production-grade code at a fraction of US/EU price.',
  },
  {
    icon: FlaskConical,
    title: 'Real Users. Real Feedback. Before You Launch.',
    tag: 'BETA TESTING & PRODUCT VALIDATION',
    badge: { val: '6,000+ PRE-VETTED USERS', color: 'gold' },
    body: 'Direct pipeline access to thousands of engineering students from India\'s top institutions. Structured beta programs: activation, feedback loops, product testimonials, and iteration cycles.',
    result: 'Validated product data from your actual target demographic.',
  },
  {
    icon: Building2,
    title: 'End-to-End. From Registration to Revenue.',
    tag: 'BUSINESS SETUP & OPERATIONS',
    body: 'Complete Indian business setup — entity registration, banking, compliance, team recruitment, vendor sourcing, operational process design. I\'ve embedded directly into startups to overhaul their entire operational structure prior to funding rounds.',
    result: 'A running operation — not a compliance checklist.',
  },
  {
    icon: Megaphone,
    title: 'Indian Audiences Trust Differently. I Know What Works.',
    tag: 'CONTENT, DISTRIBUTION & ACTIVATION',
    body: 'LinkedIn content strategy, campus activations, product distribution through college networks, WhatsApp-first campaigns, UGC generation, and influencer coordination across tier-1 and tier-2 Indian cities.',
    result: 'Real Indian audience growth — not vanity metrics.',
  },
  {
    icon: Smartphone,
    title: 'App Growth & Play Store Optimization.',
    tag: 'APP ACQUISITION & RETENTION',
    badge: { val: 'GUARANTEED RESULTS', color: 'gold' },
    body: 'Increasing organic app downloads, app registrations, Play Store reviews and ratings, and app usage with guaranteed results. We drive real user acquisition through community networks rather than fake clicks.',
    who: 'App founders looking for high-quality Indian user acquisition.',
    result: 'From downloads to active, engaged users.',
  },
  {
    icon: Search,
    title: 'Initial Uncensored India Market Audit.',
    tag: 'MARKET OPPORTUNITY BRIEF',
    badge: { val: '1.47 BILLION MARKET', color: 'sky' },
    body: 'An initial audit for any company considering India. I provide an uncensored market opportunity brief with TAM analysis. India has 1.47 billion people. Capturing even 0.01% means steady recurring income.',
    who: 'Companies exploring the Indian market with zero risk.',
    result: 'Clarity on whether India is right for your product.',
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* Header */}
      <section style={{ paddingTop: '160px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel text="// DELIVERABLES" />
          <AnimatedHeading as="h1">
            Eight Capabilities. One Operator. Day 1.
          </AnimatedHeading>
        </div>
      </section>

      {/* Hormozi Value Stack */}
      <section style={{ padding: '0 32px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <GlassCard style={{ overflow: 'hidden' }}>
            <div style={{ padding: '32px 32px 24px', borderBottom: '1px solid rgba(56,189,248,0.1)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--white)', margin: 0 }}>What You&apos;d Normally Pay For All Of This Separately:</h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '700px' }}>
                <thead>
                  <tr>
                    <th>What You Need</th>
                    <th>Market Cost</th>
                    <th>With Om</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['India Market Consultant', '₹2–5L/month retainer'],
                    ['30-Agency White-Label Network', '4–6 months to build'],
                    ['Dev Team Coordination', '₹1–3L/month overhead'],
                    ['6,000-Member Community Access', 'Years to build'],
                    ['Beta Testing Pool', '₹50k–2L/campaign'],
                    ['GTM Strategy Consultant', '₹1–4L/month'],
                    ['Operations Lead', '₹3–8L/month salary'],
                  ].map(([what, cost]) => (
                    <tr key={what}>
                      <td style={{ color: 'var(--white)', fontWeight: 500 }}>{what}</td>
                      <td><MoneyBadge value={cost} size="sm" color="red" /></td>
                      <td style={{ color: 'var(--emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Included
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '26px', fontWeight: 600, color: 'var(--gold)' }}>
                All of this. One person. One conversation.
              </span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 7 Services list */}
      <section style={{ padding: '0 32px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <GlassCard key={i} style={{ padding: '40px' }} className="service-card">
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px' }} className="service-grid">
                  
                  {/* Left: Icon */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(56,189,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(56,189,248,0.3)' }}>
                      <Icon size={36} color="var(--sky)" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '12px', color: 'var(--sky)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
                        {service.tag}
                      </div>
                      
                      {/* Badges */}
                      {service.badge && <MoneyBadge value={service.badge.val} size="sm" color={service.badge.color} />}
                      {service.badges && (
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {service.badges.map(b => <MoneyBadge key={b.val} value={b.val} size="sm" color={b.color} />)}
                        </div>
                      )}
                    </div>

                    <h3 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '16px', lineHeight: 1.3 }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '16px', color: 'var(--slate-400)', lineHeight: 1.7, marginBottom: '24px' }}>
                      {service.body}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '3px solid var(--gold)' }}>
                      {service.who && (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <span style={{ color: 'var(--slate-500)', fontSize: '14px', fontWeight: 600, flexShrink: 0 }}>Who It&apos;s For:</span>
                          <span style={{ color: 'var(--slate-300)', fontSize: '14px' }}>{service.who}</span>
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'var(--slate-500)', fontSize: '14px', fontWeight: 600, flexShrink: 0 }}>The Result:</span>
                        <span style={{ color: 'var(--white)', fontSize: '14px', fontWeight: 500 }}>{service.result}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </GlassCard>
            );
          })}

          {/* Bottom CTA */}
          <GlassCard variant="gold" style={{ padding: '40px', textAlign: 'center', marginTop: '24px' }}>
            <p style={{ fontSize: '20px', color: 'var(--white)', fontWeight: 500, marginBottom: '24px' }}>
              Don&apos;t see exactly what you need? If it involves India, I&apos;ve either done it or know exactly who can.
            </p>
            <MagneticButton href="mailto:salesverse.connect@gmail.com" variant="primary" external>
              salesverse.connect@gmail.com
            </MagneticButton>
          </GlassCard>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
