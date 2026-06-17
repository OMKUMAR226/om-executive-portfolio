'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { PERSONAL } from '@/src/lib/constants';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
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

export default function AuditPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('auditPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('auditPopupSeen', 'true');
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: 'rgba(2, 6, 23, 0.8)',
          backdropFilter: 'blur(8px)'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--navy-900)',
              border: '1px solid var(--gold)',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(245, 158, 11, 0.15)'
            }}
          >
            {/* Top accent line */}
            <div style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, var(--gold), var(--sky))' }} />
            
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: 'var(--slate-400)',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ padding: '32px' }}>
              <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '100px', color: 'var(--gold)', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em', marginBottom: '20px' }}>
                STRATEGIC OFFER
              </div>
              
              <h2 style={{ fontSize: '24px', color: 'var(--white)', margin: '0 0 16px 0', lineHeight: 1.3 }}>
                You are ignoring a 1.47 Billion population juggernaut.
              </h2>
              
              <div style={{ color: 'var(--slate-300)', fontSize: '15px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <p style={{ margin: 0 }}>
                  It sounds like you know the potential of the Indian market, but scaling into unknown territory feels risky. I get it. But what is it costing your company right now to leave the largest market on Earth on the table?
                </p>
                <p style={{ margin: 0 }}>
                  Capturing even a microscopic <strong>0.01%</strong> of this demographic translates directly to a <strong>100X return</strong> and massive recurring revenue. 
                </p>
                <p style={{ margin: 0 }}>
                  I am offering an uncensored, custom <strong>India Market Audit Report</strong> tailored to your exact product. You get a raw TAM analysis, competitor breakdown, and regulatory red flags. The investment? Just <strong>$99</strong>. No retainers. Just pure, actionable intelligence.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                <a 
                  href={PERSONAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'var(--emerald)',
                    color: '#000',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '15px',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <MessageCircle size={18} />
                  Message on WhatsApp for Audit
                </a>
                <a 
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'rgba(14, 165, 233, 0.1)',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    color: 'var(--sky)',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '15px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                  }}
                >
                  <LinkedinIcon size={18} />
                  Connect on LinkedIn
                </a>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--slate-400)', fontSize: '13px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}
                >
                  I'm not ready to scale yet.
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
