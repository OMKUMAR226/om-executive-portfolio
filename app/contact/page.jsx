'use client';

import { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, Loader2, Send } from 'lucide-react';

const Linkedin = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import GlassCard from '@/components/shared/GlassCard';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import SectionLabel from '@/components/shared/SectionLabel';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', company: '', email: '', budget: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Failed to send message. Please try email or WhatsApp directly.');
    }
  };

  return (
    <div style={{ paddingBottom: '120px' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '60px', paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel text="// DEPLOYMENT INQUIRY" />
          <AnimatedHeading as="h1" style={{ marginBottom: '24px' }}>
            Let&apos;s Discuss Your India Architecture.
          </AnimatedHeading>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', color: 'var(--slate-400)', maxWidth: '640px', margin: '0 auto' }}>
            No retainers for slide decks. Just immediate, operational execution. Let&apos;s see if your growth aligns with my infrastructure.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 32px' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '40px' }} className="contact-grid">
            
            {/* Left: Direct Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <GlassCard variant="gold" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '24px' }}>Direct Lines</h3>
                
                <div style={{ padding: '16px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', marginBottom: '32px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px', letterSpacing: '0.05em' }}>STRATEGIC VALUE</div>
                  <p style={{ fontSize: '14px', color: 'var(--slate-300)', margin: 0, lineHeight: 1.6 }}>
                    Connect with me directly on <strong>LinkedIn</strong> or <strong>WhatsApp</strong> to receive an <strong style={{ color: 'var(--white)' }}>Initial India Market Audit Report</strong> tailored to your company.
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <a href="https://linkedin.com/in/kumarom266" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Linkedin size={20} color="var(--sky)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--slate-400)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '4px' }}>LINKEDIN (Recommended)</div>
                      <div style={{ fontSize: '15px', color: 'var(--white)', fontWeight: 500 }}>linkedin.com/in/kumarom266</div>
                    </div>
                  </a>

                  <a href="https://wa.me/918305261866?text=Hi%20Om%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20potential%20collaboration." target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MessageCircle size={20} color="var(--emerald)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--slate-400)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '4px' }}>WHATSAPP (Fastest)</div>
                      <div style={{ fontSize: '15px', color: 'var(--white)', fontWeight: 500 }}>+91 83052 61866</div>
                    </div>
                  </a>

                  <a href="mailto:salesverse.connect@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={20} color="var(--sky)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--slate-400)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '4px' }}>EMAIL</div>
                      <div style={{ fontSize: '15px', color: 'var(--white)', fontWeight: 500 }}>salesverse.connect@gmail.com</div>
                    </div>
                  </a>
                </div>
              </GlassCard>

              <GlassCard style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--white)', marginBottom: '16px' }}>Availability</h3>
                <ul style={{ color: 'var(--slate-400)', fontSize: '14px', lineHeight: 1.8, margin: 0, paddingLeft: '20px' }}>
                  <li>Immediate start available.</li>
                  <li>Remote-first alignment.</li>
                  <li>US, AUS, UAE, NZ, UK time zones accommodated.</li>
                  <li>Standard response time: <span style={{ color: 'var(--white)', fontWeight: 600 }}>&lt; 24 hours</span>.</li>
                </ul>
              </GlassCard>
            </div>

            {/* Right: Contact Form */}
            <GlassCard style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '8px' }}>Send an Inquiry</h3>
              <p style={{ fontSize: '14px', color: 'var(--slate-400)', marginBottom: '32px' }}>
                Fill out the form below or email me directly. I will review your requirements and respond within 24 hours.
              </p>

              {status === 'success' ? (
                <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid var(--emerald)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 style={{ fontSize: '18px', color: 'var(--white)', marginBottom: '8px', margin: 0 }}>Message Sent Successfully</h4>
                  <p style={{ fontSize: '14px', color: 'var(--slate-300)', margin: 0 }}>
                    Thank you. I&apos;ve received your inquiry and will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    style={{ background: 'none', border: 'none', color: 'var(--sky)', fontSize: '14px', marginTop: '24px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>

                  <div className="form-group">
                    <label>Strategic Commitment Level (Optional)</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select an option...</option>
                      <option value="pilot">Pilot & Validate ($1,000 - $3,000 / mo)</option>
                      <option value="growth">Scaling & Growth ($3,000 - $7,000 / mo)</option>
                      <option value="aggressive">Aggressive Market Capture ($7,000 - $15,000+ / mo)</option>
                      <option value="performance">Strategic Partner (Performance / Rev-Share)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>How can I help you? *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your India expansion plans, operational needs, or development requirements..."></textarea>
                  </div>

                  {status === 'error' && (
                    <div style={{ color: 'var(--red-pain)', fontSize: '13px', padding: '12px', background: 'rgba(248,113,113,0.1)', borderRadius: '8px', border: '1px solid rgba(248,113,113,0.3)' }}>
                      {errorMsg}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="submit-btn"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </GlassCard>

          </div>
        </div>
      </section>

      <style>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-family: "'JetBrains Mono', monospace";
          font-size: 11px;
          color: var(--slate-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .form-group input, .form-group select, .form-group textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(56,189,248,0.15);
          border-radius: 8px;
          padding: 14px 16px;
          color: var(--white);
          font-family: "'Inter', sans-serif";
          font-size: 15px;
          transition: all 0.2s ease;
          outline: none;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--sky);
          background: rgba(56,189,248,0.05);
          box-shadow: 0 0 10px rgba(56,189,248,0.1);
        }
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 16px top 50%;
          background-size: 10px auto;
        }
        .form-group select option {
          background: var(--navy-900);
          color: var(--white);
        }
        .submit-btn {
          margin-top: 10px;
          background: linear-gradient(135deg, var(--sky), #0EA5E9);
          border: none;
          border-radius: 8px;
          padding: 16px;
          color: #000;
          font-family: "'Inter', sans-serif";
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(56,189,248,0.3);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .contact-link:hover > div:first-child {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(56,189,248,0.2);
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
